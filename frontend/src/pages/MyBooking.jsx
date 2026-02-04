



import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import { bookingDataContext } from "../context/BookingContext";
import Card from "../component/card";

const MyBooking = () => {
  const navigate = useNavigate();
  const { userData } = useContext(userDataContext);
  const { bookingData } = useContext(bookingDataContext);

  const bookings = userData?.booking || bookingData || [];

  return (
    <div
      className="min-h-screen px-4 py-10 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="w-11 h-11 rounded-full flex items-center justify-center
        transition hover:scale-105"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <FaArrowLeftLong />
      </button>

      {/* Header */}
      <div className="mt-8 mb-12 text-center">
        <h1 className="text-3xl font-semibold">
          My Bookings
        </h1>
        <p className="opacity-70 mt-1">
          View and manage your booked stays
        </p>
      </div>

      {/* Booking Cards */}
      {bookings.length > 0 ? (
        <div
          className="grid gap-6 justify-items-center
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {bookings.map((list) => (
            <Card
              key={list._id}
              title={list.title}
              landmark={list.landmark}
              city={list.city}
              image1={list.image1}
              image2={list.image2}
              image3={list.image3}
              rent={list.rent}
              ratings={list.ratings}
              id={list._id}
              isBooked={list.isBooked}
              host={list.host}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center mt-32 text-center">
          <p className="text-xl font-medium">
            No bookings yet
          </p>
          <p className="opacity-70 mt-2">
            Start exploring stays and book your first trip
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-8 py-3 rounded-2xl font-semibold
            transition hover:scale-[1.03] text-white"
            style={{
              background:
                "linear-gradient(to right, #f97316, #ec4899)",
            }}
          >
            Explore Listings
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
