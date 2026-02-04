import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/lg.png";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { FiHome, FiList, FiBook, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/userContext";
import { listingDataContext } from "../context/ListingContext";
import AISearch from "./AISearch";

const Nav = () => {
  const navigate = useNavigate();

  /* 🌗 THEME (CSS VARIABLE BASED) */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [showpopup, setshowpopup] = useState(false);
  const [cate, setCate] = useState("");
  const [input, setInput] = useState("");

  const { serverUrl } = useContext(authDataContext);
  const { userData, setuserData } = useContext(userDataContext);
  const { listingdata, setNewListingdata, handleSearch } =
    useContext(listingDataContext);

  /* 🌙 APPLY THEME */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* 🔍 SEARCH */
  useEffect(() => {
    handleSearch(input);
  }, [input]);

  const handleLogout = async () => {
    await axios.post(
      serverUrl + "/api/auth/logout",
      {},
      { withCredentials: true }
    );
    setuserData(null);
    setshowpopup(false);
  };

  const handleCategory = (category) => {
    setCate(category);
    if (category === "trending") setNewListingdata(listingdata);
    else setNewListingdata(listingdata.filter((l) => l.category === category));
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full backdrop-blur-md border-b pr-4 pl-4"
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
    >
      {/* TOP BAR */}
      <div className="  hidden max-w-7xl mx-auto px-4 md:px-10 h-20 md:flex items-center justify-between">
        {/* LOGO */}

        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className=" cursor-pointer rounded-full w-14 h-14"
        />

        <AISearch />

        {/* RIGHT */}
        <div className="flex items-center gap-8 relative">
          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border"
            style={{ borderColor: "var(--border)" }}
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          {/* AUTH */}
          {!userData ? (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-full bg-orange-500 text-white text-nowrap hover:cursor-pointer hover:bg-orange-600 "
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-red-500 text-white text-nowrap hover:cursor-pointer hover:bg-red-600"
            >
              Sign Out
            </button>
          )}

          {/* MENU */}
          <button
            onClick={() => setshowpopup(!showpopup)}
            className="flex items-center gap-2 px-3 py-2 rounded-full border"
            style={{ borderColor: "var(--border)" }}
          >
            <GiHamburgerMenu className="cursor-pointer" />
            {userData ? (
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center ">
                {userData.name[0].toUpperCase()}
              </span>
            ) : (
              <CgProfile 
              className="cursor-pointer"/>
            )}
          </button>

          {/* DROPDOWN */}


          

         
          {showpopup && (
            <div
              className="absolute right-0 top-14 w-64 rounded-xl shadow-xl border hover:cursor-pointer"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <DropdownItem
                icon={<FiHome />}
                label="List your home"
                onClick={() => navigate("/listingpage1")}
                
              />
              <DropdownItem
                icon={<FiList />}
                label="My listings"
                onClick={() => navigate("/mylisting")}
              />
              <DropdownItem
              
                icon={<FiBook />}
                label="My bookings"
                onClick={() => navigate("/mybooking")}
              />
              <div
                className="h-px my-1"
                style={{ backgroundColor: "var(--border)" }}
              />
             { userData?<DropdownItem
                icon={<FiLogOut />}
                label="Logout"
                danger
                onClick={handleLogout}
              />:<DropdownItem
                icon={<FiLogOut />}
                label="Login"
                danger
                onClick={() => navigate("/login")}
              />}
            </div>
          )}
         
        </div>
      </div>


      {/*  for mobile device */}

      <div className=" py-2 h-30 flex flex-col md:hidden ">
        <div className=" pt-2 max-w-7xl mx-auto px-4 md:px-10 h-20 flex gap-x-7  items-center justify-evenly">
          {/* LOGO */}
          <div>
             <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            className=" cursor-pointer rounded-full w-8 h-8"
          />
          </div>
          
         { /* RIGHT */}
          <div className="flex items-center gap-7 relative">
            {/* THEME TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>

            {/* AUTH */}
            {!userData ? (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-full bg-orange-500 text-white text-nowrap"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-red-500 text-white text-nowrap"
              >
                Sign Out
              </button>
            )}

            {/* MENU */}
            <button
              onClick={() => setshowpopup(!showpopup)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              <GiHamburgerMenu />
              {userData ? (
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  {userData.name[0].toUpperCase()}
                </span>
              ) : (
                <CgProfile />
              )}
            </button>

            {/* DROPDOWN */}
            {showpopup && (
              <div
                className="absolute right-0 top-14 w-64 rounded-xl shadow-xl border"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <DropdownItem
                  icon={<FiHome />}
                  label="List your home"
                  onClick={() => navigate("/listingpage1")}
                />
                <DropdownItem
                  icon={<FiList />}
                  label="My listings"
                  onClick={() => navigate("/mylisting")}
                />
                <DropdownItem
                  icon={<FiBook />}
                  label="My bookings"
                  onClick={() => navigate("/mybooking")}
                />
                <div
                  className="h-px my-1"
                  style={{ backgroundColor: "var(--border)" }}
                />
                <DropdownItem
                  icon={<FiLogOut />}
                  label="Logout"
                  danger
                  onClick={handleLogout}
                />
              </div>
            )}
          </div>
        </div>

        <div>
       <AISearch />
        </div>

       
      </div>

      {/* CATEGORIES */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className=" pt-7 flex gap-8 px-6 py-4 justify-center text-xs">
          {[
            ["trending", MdWhatshot, "Trending"],
            ["villa", GiFamilyHouse, "Villa"],
            ["farmHouse", MdBedroomParent, "Farm"],
            ["poolHouse", GiWoodCabin, "Pool"],
            ["rooms", SiHomeassistantcommunitystore, "Rooms"],
            ["flat", IoBedOutline, "Flat"],
            ["pg", FaTreeCity, "PG"],
            ["cabins", BiBuildingHouse, "Cabins"],
          ].map(([key, Icon, label]) => (
            <div
              key={key}
              onClick={() => handleCategory(key)}
              className="flex flex-col items-center gap-1 cursor-pointer"
              style={{
                color: cate === key ? "#f97316" : "var(--text)",
              }}
            >
              <Icon className="text-xl" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

/* DROPDOWN ITEM */
const DropdownItem = ({ icon, label, onClick, danger }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-black/5"
    style={{ color: danger ? "#ef4444" : "var(--text)" }}
  >
    {icon}
    {label}
  </button>
);

export default Nav;
