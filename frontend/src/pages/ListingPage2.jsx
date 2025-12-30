import React, { useContext } from 'react'
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
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import { listingDataContext } from '../context/ListingContext';
const ListingPage2 = () => {

  let {category,
      setCategory}=useContext(listingDataContext);

 let navigate= useNavigate();

  return (
    <div className="w-screen h-screen flex  flex-col items-center justify-center border-2 overflow-auto relative px-4 ">
    <div className='text-2xl '>
        <h1>Which of these best describes your place?</h1>
    </div>
      <div className="w-[185px] h-[50px] text-[18px] bg-amber-500 text-white flex items-center justify-center rounded-full absolute top-4 right-4 shadow-lg">
        Set Your Category
      </div>

    <div className='w-[50%] flex justify-center items-center gap-x-4 gap-y-8 flex-wrap  p-10 overflow-auto'>
        
             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="trending"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("trending")}>
                      {" "}
                      <MdWhatshot className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>Trending</h3>
            </div>

          
            <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="villa"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("villa")}>
                      {" "}
                      <GiFamilyHouse className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>Villa</h3>
            </div>

          
             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="farmHouse"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("farmHouse")}>
                      {" "}
                      <MdBedroomParent className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>Farm House</h3>
            </div>

          
             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="poolHouse"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("poolHouse")}>
                      {" "}
                      <GiWoodCabin className="w-10 h-10 text-black " />
                      
                      <h3 className='text-xl'>Pool House</h3>
            </div>

          
            <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="cabins"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("cabins")}>
                      {" "}
                      <BiBuildingHouse className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>Cabin</h3>
            </div>

          
             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="rooms"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("rooms")}>
                      
                      <SiHomeassistantcommunitystore className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>Rooms</h3>
            </div>

          
             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="flat"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("flat")}>
                      {" "}
                      <IoBedOutline className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>Flat</h3>
            </div>

          
             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="pg"?"border-2 border-zinc-900":""}`}
             onClick={()=>setCategory("pg")}>
                      {" "}
                      <FaTreeCity className="w-10 h-10 text-black " />
                      <h3 className='text-xl'>PG</h3>
            </div>

          

          
       
    </div>
     <button className="mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-24 hover:bg-amber-500 cursor-pointer"
     disabled={!category} onClick={(e)=>navigate("/listingpage3")} >
          Next
        </button>
      
    </div>
  )
}

export default ListingPage2
