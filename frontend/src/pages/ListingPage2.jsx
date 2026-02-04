



import React, { useContext } from "react";
import {
  MdWhatshot,
  MdBedroomParent,
} from "react-icons/md";
import {
  GiFamilyHouse,
  GiWoodCabin,
} from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";

const categories = [
  { key: "trending", label: "Trending", icon: MdWhatshot },
  { key: "villa", label: "Villa", icon: GiFamilyHouse },
  { key: "farmHouse", label: "Farm House", icon: MdBedroomParent },
  { key: "poolHouse", label: "Pool House", icon: GiWoodCabin },
  { key: "cabins", label: "Cabin", icon: BiBuildingHouse },
  { key: "rooms", label: "Rooms", icon: SiHomeassistantcommunitystore },
  { key: "flat", label: "Flat", icon: IoBedOutline },
  { key: "pg", label: "PG", icon: FaTreeCity },
];

const ListingPage2 = () => {
  const { category, setCategory } = useContext(listingDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-widest uppercase text-orange-500">
            Step 2 of 3
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">
            Which best describes your place?
          </h1>
          <p className="opacity-70 mt-2">
            Choose one category that fits your property
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(({ key, label, icon: Icon }) => {
            const selected = category === key;

            return (
              <div
                key={key}
                onClick={() => setCategory(key)}
                className={`relative cursor-pointer rounded-2xl p-6
                transition-all duration-300 border`}
                style={{
                  backgroundColor: selected
                    ? "rgba(249,115,22,0.12)"
                    : "var(--card)",
                  borderColor: selected
                    ? "#f97316"
                    : "var(--border)",
                  boxShadow: selected
                    ? "0 0 25px rgba(249,115,22,0.35)"
                    : "none",
                }}
              >
                <Icon className="text-4xl mb-4 text-orange-500" />
                <h3 className="text-lg font-medium">{label}</h3>

                {selected && (
                  <span
                    className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    Selected
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button
            disabled={!category}
            onClick={() => navigate("/listingpage3")}
            className="px-10 py-3 rounded-2xl text-lg font-semibold transition"
            style={{
              background: category
                ? "linear-gradient(to right, #f97316, #ec4899)"
                : "var(--border)",
              color: category ? "#fff" : "#9ca3af",
              cursor: category ? "pointer" : "not-allowed",
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPage2;
