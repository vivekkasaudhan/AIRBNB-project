import React from "react";
import logo from "../assets/image.png";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
const [showpopup, setshowpopup] = useState(false)


  return (



    <div>
      <div className="w-screen min-h-20 border-b border-gray-200 px-20 flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="w-[35%] flex items-center relative hidden md:block ">
          <input
            type="text"
            placeholder="Enter location name"
            className="border-2 border-gray-400 rounded-4xl px-10 py-2 w-full outline-none overflow-auto"
          />
          <button className="  w-8 h-8 absolute right-5 pt-2 ">
            {" "}
            <IoSearchSharp className="w-8 h-8 text-gray-600" />
          </button>
        </div>
        <div className="flex items-center gap-x-1 relative">
          <span className="hidden md:block">List your Home</span>
          <button className="border-2 border-gray-400 flex items-center px-3 py-2 rounded-full gap-x-2 cursor-pointer"
          onClick={()=>setshowpopup(prev=>!prev)}>
            <span>
              <GiHamburgerMenu className="text-xl" />{" "}
            </span>
            <span>
              <CgProfile className="text-xl" />
            </span>
            
          </button>
          {showpopup&&<div className="w-50 min-h-50  rounded-lg border-2 border-slate-300 absolute  top-12 right-6 bg-slate-200">
             <ul className="flex flex-col items-start justify-center gap-y-3 pt-2 ">
                <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  ">Login</li>
                <li className="w-full  hover:bg-gray-300 cursor-pointer px-3   ">Logout</li>
                <div className="border-t w-full border-gray-400"></div>
                <li className="w-full  hover:bg-gray-300 cursor-pointer   px-3 ">List Your Home</li>
                <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  ">My Listing</li>
                <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  ">Check Booking</li>
             </ul>
          </div>}
        </div>

        
      </div>


    <div className="w-[80%] flex items-center m-auto relative md:hidden  ">
          <input
            type="text"
            placeholder="Enter location name"
            className="border-2 border-gray-400 rounded-4xl px-10 py-2 w-full outline-none overflow-auto"
          />
          <button className="  w-8 h-8 absolute right-5 ">
            {" "}
            <IoSearchSharp className="w-8 h-8 text-gray-600" />
          </button>
        </div>



      <div className="w-full min-h-20 flex items-center md:justify-center gap-x-4 cursor-pointer justify-start px-3 overflow-auto ">
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <MdWhatshot className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <GiFamilyHouse className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <MdBedroomParent className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <GiWoodCabin className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <SiHomeassistantcommunitystore className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <IoBedOutline className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <FaTreeCity className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
        <div className="flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]">  <BiBuildingHouse className="w-7.5 h-7.5 text-black" /><h3>Trending</h3></div>
       
         

      </div>
    </div>
  );
};

export default Nav;
