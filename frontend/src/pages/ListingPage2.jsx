// import React, { useContext } from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdWhatshot } from "react-icons/md";
// import { GiFamilyHouse } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { MdOutlinePool } from "react-icons/md";
// import { GiWoodCabin } from "react-icons/gi";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { authDataContext } from "../context/AuthContext";
// import { listingDataContext } from '../context/ListingContext';
// const ListingPage2 = () => {

//   let {category,
//       setCategory}=useContext(listingDataContext);

//  let navigate= useNavigate();

//   return (
//     <div className="w-screen h-screen flex  flex-col items-center justify-center border-2 overflow-auto relative px-4 ">
//     <div className='text-2xl '>
//         <h1>Which of these best describes your place?</h1>
//     </div>
//       <div className="w-[185px] h-[50px] text-[18px] bg-amber-500 text-white flex items-center justify-center rounded-full absolute top-4 right-4 shadow-lg">
//         Set Your Category
//       </div>

//     <div className='w-[50%] flex justify-center items-center gap-x-4 gap-y-8 flex-wrap  p-10 overflow-auto'>
        
//              <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="trending"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("trending")}>
//                       {" "}
//                       <MdWhatshot className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>Trending</h3>
//             </div>

          
//             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="villa"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("villa")}>
//                       {" "}
//                       <GiFamilyHouse className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>Villa</h3>
//             </div>

          
//              <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="farmHouse"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("farmHouse")}>
//                       {" "}
//                       <MdBedroomParent className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>Farm House</h3>
//             </div>

          
//              <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="poolHouse"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("poolHouse")}>
//                       {" "}
//                       <GiWoodCabin className="w-10 h-10 text-black " />
                      
//                       <h3 className='text-xl'>Pool House</h3>
//             </div>

          
//             <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="cabins"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("cabins")}>
//                       {" "}
//                       <BiBuildingHouse className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>Cabin</h3>
//             </div>

          
//              <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="rooms"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("rooms")}>
                      
//                       <SiHomeassistantcommunitystore className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>Rooms</h3>
//             </div>

          
//              <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="flat"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("flat")}>
//                       {" "}
//                       <IoBedOutline className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>Flat</h3>
//             </div>

          
//              <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px] border-2 w-50 h-30 rounded-lg hover:border-zinc-700 cursor-pointer ${category=="pg"?"border-2 border-zinc-900":""}`}
//              onClick={()=>setCategory("pg")}>
//                       {" "}
//                       <FaTreeCity className="w-10 h-10 text-black " />
//                       <h3 className='text-xl'>PG</h3>
//             </div>

          

          
       
//     </div>
//      <button className="mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-24 hover:bg-amber-500 cursor-pointer"
//      disabled={!category} onClick={(e)=>navigate("/listingpage3")} >
//           Next
//         </button>
      
//     </div>
//   )
// }

// export default ListingPage2





// import React, { useContext } from "react";
// import {
//   MdWhatshot,
//   MdBedroomParent,
// } from "react-icons/md";
// import {
//   GiFamilyHouse,
//   GiWoodCabin,
// } from "react-icons/gi";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   { key: "trending", label: "Trending", icon: MdWhatshot },
//   { key: "villa", label: "Villa", icon: GiFamilyHouse },
//   { key: "farmHouse", label: "Farm House", icon: MdBedroomParent },
//   { key: "poolHouse", label: "Pool House", icon: GiWoodCabin },
//   { key: "cabins", label: "Cabin", icon: BiBuildingHouse },
//   { key: "rooms", label: "Rooms", icon: SiHomeassistantcommunitystore },
//   { key: "flat", label: "Flat", icon: IoBedOutline },
//   { key: "pg", label: "PG", icon: FaTreeCity },
// ];

// const ListingPage2 = () => {
//   const { category, setCategory } = useContext(listingDataContext);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center
//       bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-black
//       px-4 py-20 text-white"
//     >
//       <div className="w-full max-w-5xl">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="text-sm tracking-widest uppercase text-orange-400">
//             Step 2 of 3
//           </span>
//           <h1 className="text-3xl md:text-4xl font-semibold mt-2">
//             Which best describes your place?
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Choose one category that fits your property
//           </p>
//         </div>

//         {/* Categories */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.map(({ key, label, icon: Icon }) => (
//             <div
//               key={key}
//               onClick={() => setCategory(key)}
//               className={`
//                 relative cursor-pointer rounded-2xl p-6
//                 backdrop-blur-xl transition-all duration-300
//                 ${
//                   category === key
//                     ? "bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-[1.03]"
//                     : "bg-white/5 border border-white/10 hover:bg-white/10"
//                 }
//               `}
//             >
//               <Icon className="text-4xl mb-4 text-orange-400" />
//               <h3 className="text-lg font-medium">{label}</h3>

//               {category === key && (
//                 <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full
//                   bg-orange-500 text-white">
//                   Selected
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex justify-center mt-14">
//           <button
//             disabled={!category}
//             onClick={() => navigate("/listingpage3")}
//             className={`
//               px-10 py-3 rounded-2xl text-lg font-semibold transition
//               ${
//                 category
//                   ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-[1.03] shadow-xl"
//                   : "bg-white/20 text-gray-400 cursor-not-allowed"
//               }
//             `}
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingPage2;



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
