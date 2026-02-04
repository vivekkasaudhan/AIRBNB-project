import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";

import { userDataContext } from "../context/userContext";
import { listingDataContext } from "../context/ListingContext";
import { bookingDataContext } from "../context/BookingContext";

const Card = ({
  title,
  landmark,
  image1,
  image2,
  image3,
  rent,
  city,
  id,
  ratings,
  isBooked,
  host,
}) => {
  const navigate = useNavigate();
  const { userData } = useContext(userDataContext);
  const { handleViewCard } = useContext(listingDataContext);
  const { cancelBooking } = useContext(bookingDataContext);

  const [popUp, setPopup] = useState(false);

  const handleClick = () => {
    if (!isBooked) {
      if (userData) handleViewCard(id);
      else navigate("/login");
    }
  };


 
  return (
    <div
      onClick={handleClick}
      className="w-[330px] max-w-[90%] rounded-2xl overflow-hidden cursor-pointer
      bg-[var(--card)]
      border border-[var(--border)]
      shadow-sm hover:shadow-xl transition-all duration-300 relative"
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[230px] overflow-hidden flex">
        {[image1, image2, image3].map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-full object-cover shrink-0"
          />
        ))}

        {/* Rating */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs
          flex items-center gap-1 shadow
          bg-[var(--card)] border border-[var(--border)]"
        >
          <FaStar className="text-amber-500" />
          <span>{ratings}/5</span>
        </div>

        {/* Booked Badge */}
        {isBooked && (
          <div className="absolute top-3 right-3 bg-green-600 text-white
            text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
            <GiConfirmed /> Booked
          </div>
        )}

        {/* Cancel Booking */}
        {isBooked && userData && host === userData._id && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPopup(true);
            }}
            className="absolute bottom-3 right-3 bg-red-500 hover:bg-red-600
              text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            <FcCancel /> Cancel
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-1">
        <h3
          className="font-semibold text-sm truncate"
          style={{ color: "var(--text)" }}
        >
          In {landmark.toUpperCase()}, {city.toUpperCase()}
        </h3>

        <p className="text-xs opacity-70 truncate">
          {title.toUpperCase()}
        </p>

        <p
          className="text-sm font-semibold"
          style={{ color: "var(--text)" }}
        >
          ₹{rent} <span className="text-xs font-normal opacity-70">/ day</span>
        </p>
      </div>

      {/* CANCEL CONFIRMATION POPUP */}
      {popUp && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <div
            className="w-[90%] rounded-xl p-5 shadow-xl
            bg-[var(--card)] border border-[var(--border)]"
          >
            <h3
              className="text-lg font-semibold text-center"
              style={{ color: "var(--text)" }}
            >
              Cancel Booking?
            </h3>

            <p className="text-sm text-center opacity-70 mt-2">
              Are you sure you want to cancel this booking?
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => {
                  cancelBooking(id);
                  setPopup(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Yes
              </button>

              <button
                onClick={() => setPopup(false)}
                className="px-4 py-2 rounded-lg border border-[var(--border)]
                bg-transparent"
                style={{ color: "var(--text)" }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;









