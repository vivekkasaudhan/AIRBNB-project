

import React, { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const ListingPage3 = () => {
  const {
    title,
    description,
    frontEndImage1,
    frontEndImage2,
    frontEndImage3,
    rent,
    city,
    landmark,
    category,
    handleAddListing,
    adding,
  } = useContext(listingDataContext);

  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen px-4 py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/listingpage2")}
        className="fixed top-6 left-6 w-11 h-11 rounded-full
        flex items-center justify-center transition
        border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <FaArrowLeft />
      </button>

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm tracking-widest uppercase text-orange-500">
            Step 3 of 3
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">
            Review & publish your listing
          </h1>
          <p className="opacity-70 mt-2">
            Make sure everything looks good before publishing
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div
            className="md:col-span-2 rounded-3xl overflow-hidden shadow-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <img
              src={frontEndImage1}
              alt="Main"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-rows-2 gap-4">
            {[frontEndImage2, frontEndImage3].map((img, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-lg border"
                style={{ borderColor: "var(--border)" }}
              >
                <img
                  src={img}
                  alt={`Preview ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div
          className="rounded-3xl p-8 shadow-2xl space-y-6 border"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          {/* Location */}
          <div className="flex items-center gap-2 opacity-70">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>
              {landmark}, {city} · {category}
            </span>
          </div>

          {/* Description */}
          <p className="leading-relaxed opacity-80">
            {description}
          </p>

          {/* Price */}
          <div className="text-xl font-semibold">
            ₹{rent}
            <span className="text-sm font-normal opacity-60"> / day</span>
          </div>
        </div>

        {/* Publish CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleAddListing}
            disabled={adding}
            className="px-12 py-4 rounded-2xl text-lg font-semibold transition"
            style={{
              background: adding
                ? "var(--border)"
                : "linear-gradient(to right, #f97316, #ec4899)",
              color: adding ? "#9ca3af" : "#fff",
              cursor: adding ? "not-allowed" : "pointer",
            }}
          >
            {adding ? "Publishing..." : "Publish Listing"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPage3;
