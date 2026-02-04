



import React, { useContext, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Star from "../component/star";
import { bookingDataContext } from "../context/BookingContext";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/userContext";
import { listingDataContext } from "../context/ListingContext";

const Booked = () => {
  const navigate = useNavigate();

  const { bookingData } = useContext(bookingDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const { getListing, cardDetails } = useContext(listingDataContext);

  const [star, setStar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStar = (value) => {
    setStar(value);
  };

  const handleRating = async (id) => {
    if (!star) return;
    try {
      setLoading(true);
      await axios.post(
        serverUrl + `/api/listing/ratings/${id}`,
        { ratings: star },
        { withCredentials: true }
      );
      await getListing();
      await getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center gap-8
      bg-gradient-to-br from-gray-100 to-gray-200
      dark:from-[#020617] dark:to-[#0f172a] relative"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 px-6 py-2 rounded-xl
        bg-red-500 text-white font-medium hover:bg-red-600 transition"
      >
        Back to Home
      </button>

      {/* Booking Confirm Card */}
      <div
        className="w-[90%] max-w-md rounded-3xl shadow-2xl p-8
        bg-white dark:bg-[#0b1120]
        border border-gray-200 dark:border-slate-700"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <GiConfirmed className="w-24 h-24 text-green-500" />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Booking Confirmed
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your stay has been successfully booked
          </p>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Booking ID</span>
            <span className="font-medium">{bookingData?._id}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Owner Email</span>
            <span className="font-medium">
              {bookingData?.host?.email}
            </span>
          </div>
          <div className="flex justify-between text-gray-900 dark:text-white font-semibold">
            <span>Total Rent</span>
            <span>₹{bookingData?.totalRent}</span>
          </div>
        </div>
      </div>

      {/* Rating Card */}
      <div
        className="w-[90%] max-w-lg rounded-3xl shadow-2xl p-8
        bg-white dark:bg-[#0b1120]
        border border-gray-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
          Rate your stay
        </h2>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          {star ? `${star} out of 5 stars` : "Tap to rate"}
        </p>

        <div className="flex justify-center mt-5">
          <Star onRate={handleStar} />
        </div>

        <button
          disabled={!star || loading}
          onClick={() => handleRating(cardDetails._id)}
          className={`w-full mt-6 py-3 rounded-xl font-semibold text-white transition
            ${
              loading || !star
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
            }`}
        >
          {loading ? "Submitting..." : "Submit Rating"}
        </button>
      </div>
    </div>
  );
};

export default Booked;
