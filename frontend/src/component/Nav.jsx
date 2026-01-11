// import React, { useContext, useEffect } from "react";
// import logo from "../assets/image.png";
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
// import axios from "axios";
// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";


// const Nav = () => {
//   const [showpopup, setshowpopup] = useState(false);
//   let navigate = useNavigate();
//   let { serverUrl } = useContext(authDataContext);
//    let {userData,setuserData}=useContext(userDataContext);
//    let {listingdata,setListingdata}=useContext(listingDataContext)
//    let {newlistingdata,setNewListingdata,searchData,handleSearch,handleViewCard}=useContext(listingDataContext)
//    let [cate,setCate]=useState("");
//    let [input,setInput]=useState("")
//   const handleLogout = async () => {
//     try {
//       let result = await axios.post(
//         serverUrl + "/api/auth/logout",
//         {},
//         { withCredentials: true }
//       );
//       setuserData(null);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCategory=async(category)=>{
//     try {
//       setCate(category);
//       if(category=="trending")
//       {
//         setNewListingdata(listingdata);
//       }
//       else
//      { setNewListingdata(listingdata.filter((list)=>list.category==category));}
          
//     } catch (error) {
      
//     }
//   }

// const handleClick=(id)=>{
//     if(userData)
//     {
//       handleViewCard(id); 
//     }
//     else navigate("/login");

//   }


//   useEffect(()=>{
// handleSearch(input);
//   },[input])

//   return (
//     <div className="fixed top-0 bg-white z-50">
//       <div className="w-screen min-h-18 border-b border-gray-200 px-10 md:px-20 flex items-center justify-between ">
//         <div>
//           <img src={logo} alt="" className="w-[50px] h-[50px]" />
//         </div>

//         <div className="w-[35%] flex items-center relative hidden md:block ">
//           <input
//             type="text"
//             placeholder="Enter location name"
//             className="border-2 border-gray-400 rounded-4xl px-10 py-2 w-full outline-none overflow-auto"
//           onChange={(e)=>setInput(e.target.value)} value={input}/>
//           <button className="  w-8 h-8 absolute right-5 pt-2 ">
//             {" "}
//             <IoSearchSharp className="w-8 h-8 text-gray-600" />
//           </button>
//         </div>


//         <div className="flex items-center gap-x-1 relative">
//           <span className="hidden md:block"  onClick={()=>{navigate("/listingpage1");setshowpopup(false)}}>List your Home</span>
//           <button
//             className="border-2 border-gray-400 flex items-center px-3 py-2 rounded-full gap-x-2 cursor-pointer"
//             onClick={() => setshowpopup((prev) => !prev)}
//           >
//             <span><GiHamburgerMenu className="text-xl" />{" "}</span>
//             {userData==null&&<span> <CgProfile className="text-xl" /></span>}
//            {userData!=null&& <span className="w-7.5 h-7.5 bg-black rounded-full text-white">{userData.name[0]}</span>}
//           </button>
//           {showpopup && (
//             <div className="w-50 min-h-50  rounded-lg border-2 border-slate-300 absolute  top-10 right-[5%] bg-slate-100 z-50">
//               <ul className="flex flex-col items-start justify-center gap-y-3 pt-2 ">
//                {!userData&& <li
//                   className="w-full  hover:bg-gray-300 cursor-pointer  px-3  "
//                   onClick={() => {navigate("/login");setshowpopup(false)}}
//                 >
//                   Login
//                 </li>}


//                {userData&& <li
//                   className="w-full  hover:bg-gray-300 cursor-pointer px-3   "
//                   onClick={()=>{handleLogout();setshowpopup(false)}}
//                 >
//                   Logout
//                 </li>}


//                 <div className="border-t w-full border-gray-400"></div>
//                 <li className="w-full  hover:bg-gray-300 cursor-pointer   px-3 "
//                 onClick={()=>{navigate("/listingpage1");setshowpopup(false)}}>
//                   List Your Home
//                 </li>
//                 <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  "
//                  onClick={()=>{navigate("/mylisting"), setshowpopup(false)}}>
//                   My Listing
//                 </li>
//                 <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  "
//                  onClick={()=>{navigate("/mybooking"),setshowpopup(false)}}>
//                   My Booking
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//     { searchData && searchData.length > 0 && 
//   <div className="w-[100vw] h-[450px] flex flex-col gap-[20px] absolute top-[50%] overflow-auto left-[0] justify-start items-center">
//   <div className="max-w-[700px] w-[100vw] h-[300px] overflow-hidden flex flex-col bg-[#fefdfd] p-[20px] rounded-lg border-[1px] border-[#a2a1a1] cursor-pointer">
    
//       {searchData.map((search) => (
//   <div className="border-b border-black p-[10px] " onClick={()=>handleClick(search._id)}>
//     {search.title} in {search.landmark}, {search.city}
//   </div>
// ))}

    
//   </div>
// </div>}

//       </div>

//       <div className="w-[80%] flex items-center m-auto relative md:hidden  ">
//         <input
//           type="text"
//           placeholder="Enter location name"
//           className="border-2 border-gray-400 rounded-4xl px-10 py-2 w-full outline-none overflow-auto"
//        onChange={(e)=>setInput(e.target.value)} value={input} />
//         <button className="  w-8 h-8 absolute right-5 ">
//           {" "}
//           <IoSearchSharp className="w-8 h-8 text-gray-600" />
//         </button>
//       </div>

//       <div className="w-full min-h-20 flex items-center sm:justify-center gap-x-4 cursor-pointer justify-start px-3 overflow-auto ">
//         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//          `}
//         onClick={()=>handleCategory("trending")}>
//           {" "}
//           <MdWhatshot className="w-7.5 h-7.5 text-black" />
//           <h3>Trending</h3>
//         </div>


//         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="villa"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("villa")}>
          
//           <GiFamilyHouse className="w-7.5 h-7.5 text-black" />
//           <h3>Villa</h3>
//         </div>


//          <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="farmHouse"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("farmHouse")}>

//           <MdBedroomParent className="w-7.5 h-7.5 text-black" />
//           <h3>Farm House</h3>
//         </div>


//          <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="poolHouse"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("poolHouse")}>
//           <GiWoodCabin className="w-7.5 h-7.5 text-black" />
//           <h3>Pool House</h3>
//         </div>

//          <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="rooms"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("rooms")}>
//           <SiHomeassistantcommunitystore className="w-7.5 h-7.5 text-black" />
//           <h3>Rooms</h3>
//         </div>

//          <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="flat"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("flat")}>
//           <IoBedOutline className="w-7.5 h-7.5 text-black" />
//           <h3>Flat</h3>
//         </div>

//          <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="pg"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("pg")}>
//           <FaTreeCity className="w-7.5 h-7.5 text-black" />
//           <h3>PG</h3>
//         </div>

//         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
//           ${cate=="cabins"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("cabins")}>
//           <BiBuildingHouse className="w-7.5 h-7.5 text-black" />
//           <h3>cabins</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;


// import React, { useContext, useEffect, useState } from "react";
// import logo from "../assets/image.png";
// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
// import {
//   GiFamilyHouse,
//   GiWoodCabin,
// } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { authDataContext } from "../context/AuthContext";
// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";

// const Nav = () => {
//   const navigate = useNavigate();

//   const [darkMode, setDarkMode] = useState(false);
//   const [showpopup, setshowpopup] = useState(false);
//   const [cate, setCate] = useState("");
//   const [input, setInput] = useState("");

//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setuserData } = useContext(userDataContext);
//   const {
//     listingdata,
//     setNewListingdata,
//     searchData,
//     handleSearch,
//     handleViewCard,
//   } = useContext(listingDataContext);

//   /* 🌙 Dark Mode Toggle */
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   const handleLogout = async () => {
//     await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
//     setuserData(null);
//   };

//   const handleCategory = (category) => {
//     setCate(category);
//     if (category === "trending") setNewListingdata(listingdata);
//     else setNewListingdata(listingdata.filter((l) => l.category === category));
//   };

//   useEffect(() => {
//     handleSearch(input);
//   }, [input]);

//   return (
//     <nav className="fixed top-0 z-50 w-full 
//       bg-white dark:bg-[#0f172a] 
//       text-black dark:text-white 
//       shadow-sm backdrop-blur-md">

//       {/* Top Bar */}
//       <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <img
//           src={logo}
//           alt="logo"
//           onClick={() => navigate("/")}
//           className="w-10 h-10 cursor-pointer"
//         />

//         {/* Search */}
//         <div className="hidden md:flex relative w-[420px]">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Search by city, landmark, place…"
//             className="w-full rounded-full px-6 py-2.5 pr-12 outline-none
//               bg-gray-100 dark:bg-slate-800
//               border border-gray-300 dark:border-slate-700"
//           />
//           <IoSearchSharp className="absolute right-4 top-2.5 text-xl opacity-70" />
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-3">

//           {/* 🌙 Toggle */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700"
//           >
//             {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
//           </button>

//           {/* Auth Button (Always Visible) */}
//           {!userData ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
//             >
//               Sign In
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-full bg-red-500 text-white"
//             >
//               Sign Out
//             </button>
//           )}

//           {/* Menu */}
//           <button
//             onClick={() => setshowpopup(!showpopup)}
//             className="flex items-center gap-2 border rounded-full px-3 py-2"
//           >
//             <GiHamburgerMenu />
//             {userData ? (
//               <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//                 {userData.name[0]}
//               </span>
//             ) : (
//               <CgProfile />
//             )}
//           </button>

//           {/* Dropdown */}
//           {showpopup && (
//             <div className="absolute right-6 top-20 w-56 rounded-xl border 
//               bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
//               <p onClick={() => navigate("/listingpage1")} className="dropdown">
//                 List your home
//               </p>
//               <p onClick={() => navigate("/mylisting")} className="dropdown">
//                 My listings
//               </p>
//               <p onClick={() => navigate("/mybooking")} className="dropdown">
//                 My bookings
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
//         <div className="flex gap-8 overflow-x-auto px-6 py-4 justify-start md:justify-center text-xs">
//           {[
//             ["trending", MdWhatshot, "Trending"],
//             ["villa", GiFamilyHouse, "Villa"],
//             ["farmHouse", MdBedroomParent, "Farm"],
//             ["poolHouse", GiWoodCabin, "Pool"],
//             ["rooms", SiHomeassistantcommunitystore, "Rooms"],
//             ["flat", IoBedOutline, "Flat"],
//             ["pg", FaTreeCity, "PG"],
//             ["cabins", BiBuildingHouse, "Cabins"],
//           ].map(([key, Icon, label]) => (
//             <div
//               key={key}
//               onClick={() => handleCategory(key)}
//               className={`flex flex-col items-center gap-1 cursor-pointer pb-2 border-b-2
//                 ${cate === key ? "border-black dark:border-white" : "border-transparent"}`}
//             >
//               <Icon className="text-xl" />
//               <span>{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


// import React, { useContext, useEffect, useState } from "react";
// import logo from "../assets/image.png";
// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
// import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { FiHome, FiLogOut, FiList, FiBook } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { authDataContext } from "../context/AuthContext";
// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";

// const Nav = () => {
//   const navigate = useNavigate();

//   const [darkMode, setDarkMode] = useState(false);
//   const [showpopup, setshowpopup] = useState(false);
//   const [cate, setCate] = useState("");
//   const [input, setInput] = useState("");

//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setuserData } = useContext(userDataContext);
//   const {
//     listingdata,
//     setNewListingdata,
//     handleSearch,
//   } = useContext(listingDataContext);

//   /* 🌙 Dark Mode */
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   const handleLogout = async () => {
//     await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
//     setuserData(null);
//     setshowpopup(false);
//   };

//   const handleCategory = (category) => {
//     setCate(category);
//     if (category === "trending") setNewListingdata(listingdata);
//     else setNewListingdata(listingdata.filter((l) => l.category === category));
//   };

//   useEffect(() => {
//     handleSearch(input);
//   }, [input]);

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-white dark:bg-[#0b1120] text-black dark:text-white shadow-md">

//       {/* ================= TOP BAR ================= */}
//       <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <img
//           src={logo}
//           alt="logo"
//           onClick={() => navigate("/")}
//           className="w-10 h-10 cursor-pointer"
//         />

//         {/* Search */}
//         <div className="hidden md:flex relative w-[420px]">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Search by city, landmark, place…"
//             className="w-full rounded-full px-6 py-2.5 pr-12 outline-none
//               bg-gray-100 dark:bg-slate-800
//               border border-gray-300 dark:border-slate-700"
//           />
//           <IoSearchSharp className="absolute right-4 top-2.5 text-xl opacity-70" />
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-3 relative">

//           {/* Dark Toggle */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition"
//           >
//             {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
//           </button>

//           {/* Auth */}
//           {!userData ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium"
//             >
//               Sign In
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-full bg-red-500 text-white font-medium"
//             >
//               Sign Out
//             </button>
//           )}

//           {/* Menu Button */}
//           <button
//             onClick={() => setshowpopup(!showpopup)}
//             className="flex items-center gap-2 border rounded-full px-3 py-2
//               hover:shadow-md transition"
//           >
//             <GiHamburgerMenu />
//             {userData ? (
//               <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//                 {userData.name[0]}
//               </span>
//             ) : (
//               <CgProfile />
//             )}
//           </button>

//           {/* ================= DROPDOWN ================= */}
//           {showpopup && (
//             <div className="absolute right-0 top-14 w-64 rounded-2xl overflow-hidden
//               bg-white dark:bg-slate-900 border dark:border-slate-700 shadow-2xl">

//               <DropdownItem icon={<FiHome />} label="List your home" onClick={() => navigate("/listingpage1")} />
//               <DropdownItem icon={<FiList />} label="My listings" onClick={() => navigate("/mylisting")} />
//               <DropdownItem icon={<FiBook />} label="My bookings" onClick={() => navigate("/mybooking")} />

//               {userData && (
//                 <>
//                   <div className="h-[1px] bg-gray-200 dark:bg-slate-700 my-1" />
//                   <DropdownItem
//                     icon={<FiLogOut />}
//                     label="Logout"
//                     danger
//                     onClick={handleLogout}
//                   />
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ================= CATEGORIES ================= */}
//       <div className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
//         <div className="flex gap-8 overflow-x-auto px-6 py-4 justify-start md:justify-center text-xs">
//           {[
//             ["trending", MdWhatshot, "Trending"],
//             ["villa", GiFamilyHouse, "Villa"],
//             ["farmHouse", MdBedroomParent, "Farm"],
//             ["poolHouse", GiWoodCabin, "Pool"],
//             ["rooms", SiHomeassistantcommunitystore, "Rooms"],
//             ["flat", IoBedOutline, "Flat"],
//             ["pg", FaTreeCity, "PG"],
//             ["cabins", BiBuildingHouse, "Cabins"],
//           ].map(([key, Icon, label]) => (
//             <div
//               key={key}
//               onClick={() => handleCategory(key)}
//               className={`flex flex-col items-center gap-1 cursor-pointer pb-2 border-b-2
//                 transition
//                 ${cate === key ? "border-black dark:border-white" : "border-transparent"}
//               `}
//             >
//               <Icon className="text-xl" />
//               <span>{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// /* ================= DROPDOWN ITEM ================= */
// const DropdownItem = ({ icon, label, onClick, danger }) => (
//   <button
//     onClick={onClick}
//     className={`w-full flex items-center gap-3 px-4 py-3 text-sm
//       hover:bg-gray-100 dark:hover:bg-slate-800 transition
//       ${danger ? "text-red-500" : "text-gray-700 dark:text-gray-200"}`}
//   >
//     <span className="text-lg">{icon}</span>
//     {label}
//   </button>
// );

// export default Nav;




// import React, { useContext, useEffect, useState } from "react";
// import logo from "../assets/image.png";
// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
// import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { FiHome, FiList, FiBook, FiLogOut } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { authDataContext } from "../context/AuthContext";
// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";

// const Nav = () => {
//   const navigate = useNavigate();

//   const [darkMode, setDarkMode] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [cate, setCate] = useState("");
//   const [input, setInput] = useState("");

//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setuserData } = useContext(userDataContext);
//   const {
//     listingdata,
//     setNewListingdata,
//     handleSearch,
//     searchData,
//     setSearchData,
//   } = useContext(listingDataContext);

//   /* ================= DARK MODE ================= */
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   /* ================= DEBOUNCED SEARCH ================= */
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleSearch(input);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [input]);

//   /* ================= LOGOUT ================= */
//   const handleLogout = async () => {
//     await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
//     setuserData(null);
//     setShowPopup(false);
//     navigate("/");
//   };

//   /* ================= CATEGORY ================= */
//   const handleCategory = (category) => {
//     setCate(category);
//     if (category === "trending") setNewListingdata(listingdata);
//     else setNewListingdata(listingdata.filter((l) => l.category === category));
//   };

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-white dark:bg-[#0b1120] shadow-md">

//       {/* ================= TOP BAR ================= */}
//       <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <img
//           src={logo}
//           alt="logo"
//           onClick={() => navigate("/")}
//           className="w-10 h-10 cursor-pointer"
//         />

//         {/* Search */}
//         <div className="hidden md:block relative w-[420px]">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Search by city, landmark, place…"
//             className="w-full rounded-full px-6 py-2.5 pr-12 outline-none
//               bg-gray-100 dark:bg-slate-800
//               border border-gray-300 dark:border-slate-700"
//           />
//           <IoSearchSharp className="absolute right-4 top-3 text-xl opacity-70" />

//           {/* SEARCH DROPDOWN */}
//           {searchData?.length > 0 && (
//             <div className="absolute top-12 w-full bg-white dark:bg-slate-900
//               border dark:border-slate-700 rounded-xl shadow-xl z-50 max-h-72 overflow-auto">
//               {searchData.map((item) => (
//                 <div
//                   key={item._id}
//                   onClick={() => {
//                     navigate(`/listing/${item._id}`);
//                     setInput("");
//                     setSearchData(null);
//                   }}
//                   className="px-4 py-3 cursor-pointer
//                     hover:bg-gray-100 dark:hover:bg-slate-800"
//                 >
//                   <p className="font-medium text-sm text-gray-900 dark:text-white">
//                     {item.title}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {item.landmark}, {item.city}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-3 relative">

//           {/* Dark Toggle */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700"
//           >
//             {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
//           </button>

//           {/* Auth */}
//           {!userData ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
//             >
//               Sign In
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-full bg-red-500 text-white"
//             >
//               Sign Out
//             </button>
//           )}

//           {/* Menu */}
//           <button
//             onClick={() => setShowPopup(!showPopup)}
//             className="flex items-center gap-2 border rounded-full px-3 py-2"
//           >
//             <GiHamburgerMenu />
//             {userData ? (
//               <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//                 {userData.name[0]}
//               </span>
//             ) : (
//               <CgProfile />
//             )}
//           </button>

//           {/* DROPDOWN */}
//           {showPopup && (
//             <div className="absolute right-0 top-14 w-60 rounded-2xl
//               bg-white dark:bg-slate-900 border dark:border-slate-700 shadow-2xl overflow-hidden">
//               <DropdownItem icon={<FiHome />} label="List your home" onClick={() => navigate("/listingpage1")} />
//               <DropdownItem icon={<FiList />} label="My listings" onClick={() => navigate("/mylisting")} />
//               <DropdownItem icon={<FiBook />} label="My bookings" onClick={() => navigate("/mybooking")} />
//               {userData && (
//                 <>
//                   <div className="h-[1px] bg-gray-200 dark:bg-slate-700 my-1" />
//                   <DropdownItem icon={<FiLogOut />} label="Logout" danger onClick={handleLogout} />
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ================= CATEGORIES ================= */}
//       <div className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
//         <div className="flex gap-8 overflow-x-auto px-6 py-4 justify-start md:justify-center text-xs">
//           {[
//             ["trending", MdWhatshot, "Trending"],
//             ["villa", GiFamilyHouse, "Villa"],
//             ["farmHouse", MdBedroomParent, "Farm"],
//             ["poolHouse", GiWoodCabin, "Pool"],
//             ["rooms", SiHomeassistantcommunitystore, "Rooms"],
//             ["flat", IoBedOutline, "Flat"],
//             ["pg", FaTreeCity, "PG"],
//             ["cabins", BiBuildingHouse, "Cabins"],
//           ].map(([key, Icon, label]) => (
//             <div
//               key={key}
//               onClick={() => handleCategory(key)}
//               className={`flex flex-col items-center gap-1 cursor-pointer pb-2 border-b-2
//                 ${cate === key ? "border-black dark:border-white" : "border-transparent"}`}
//             >
//               <Icon className="text-xl" />
//               <span>{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// /* ================= DROPDOWN ITEM ================= */
// const DropdownItem = ({ icon, label, onClick, danger }) => (
//   <button
//     onClick={onClick}
//     className={`w-full flex items-center gap-3 px-4 py-3 text-sm
//       hover:bg-gray-100 dark:hover:bg-slate-800 transition
//       ${danger ? "text-red-500" : "text-gray-700 dark:text-gray-200"}`}
//   >
//     <span className="text-lg">{icon}</span>
//     {label}
//   </button>
// );

// export default Nav;


// import React, { useContext, useEffect, useState } from "react";
// import logo from "../assets/image.png";
// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
// import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { FiHome, FiList, FiBook, FiLogOut } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { authDataContext } from "../context/AuthContext";
// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";

// const Nav = () => {
//   const navigate = useNavigate();

//   const [darkMode, setDarkMode] = useState(true);
//   const [showpopup, setshowpopup] = useState(false);
//   const [cate, setCate] = useState("");
//   const [input, setInput] = useState("");

//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setuserData } = useContext(userDataContext);
//   const { listingdata, setNewListingdata, handleSearch } =
//     useContext(listingDataContext);

//   /* 🌙 Dark Mode */
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   /* 🔍 Search */
//   useEffect(() => {
//     handleSearch(input);
//   }, [input]);

//   const handleLogout = async () => {
//     await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
//     setuserData(null);
//     setshowpopup(false);
//   };

//   const handleCategory = (category) => {
//     setCate(category);
//     if (category === "trending") setNewListingdata(listingdata);
//     else setNewListingdata(listingdata.filter((l) => l.category === category));
//   };

//   return (
//     <nav
//       className="
//         fixed top-0 z-50 w-full
//         bg-gradient-to-b from-[#0b1120]/95 to-[#020617]/90
//         backdrop-blur-xl
//         border-b border-white/10
//         text-white
//       "
//     >
//       {/* ================= TOP BAR ================= */}
//       <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="logo"
//           onClick={() => navigate("/")}
//           className="w-10 h-10 cursor-pointer"
//         />

//         {/* Search */}
//         <div className="hidden md:flex relative w-[440px]">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Search by city, landmark, place..."
//             className="
//               w-full rounded-full px-6 py-3 pr-12
//               bg-white/10 text-white
//               placeholder:text-gray-400
//               border border-white/10
//               focus:outline-none
//               focus:ring-2 focus:ring-orange-500/60
//               focus:bg-white/15
//               transition
//             "
//           />
//           <IoSearchSharp className="absolute right-4 top-3.5 text-xl text-gray-300" />
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-3 relative">
//           {/* Dark Toggle */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
//           </button>

//           {/* Auth */}
//           {!userData ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 rounded-full bg-orange-500 text-white font-medium"
//             >
//               Sign In
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-full bg-red-500/90 hover:bg-red-500 transition"
//             >
//               Sign Out
//             </button>
//           )}

//           {/* Menu */}
//           <button
//             onClick={() => setshowpopup(!showpopup)}
//             className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <GiHamburgerMenu />
//             {userData ? (
//               <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
//                 {userData.name[0]}
//               </span>
//             ) : (
//               <CgProfile />
//             )}
//           </button>

//           {/* Dropdown */}
//           {showpopup && (
//             <div
//               className="
//                 absolute right-0 top-14 w-64 rounded-2xl
//                 bg-[#020617]/95 backdrop-blur-xl
//                 border border-white/10
//                 shadow-[0_20px_40px_rgba(0,0,0,0.6)]
//                 overflow-hidden
//               "
//             >
//               <DropdownItem icon={<FiHome />} label="List your home" onClick={() => navigate("/listingpage1")} />
//               <DropdownItem icon={<FiList />} label="My listings" onClick={() => navigate("/mylisting")} />
//               <DropdownItem icon={<FiBook />} label="My bookings" onClick={() => navigate("/mybooking")} />

//               {userData && (
//                 <>
//                   <div className="h-px bg-white/10 my-1" />
//                   <DropdownItem
//                     icon={<FiLogOut />}
//                     label="Logout"
//                     danger
//                     onClick={handleLogout}
//                   />
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ================= CATEGORIES ================= */}
//       <div className="border-t border-white/10">
//         <div className="flex gap-10 px-8 py-5 justify-start md:justify-center text-xs">
//           {[
//             ["trending", MdWhatshot, "Trending"],
//             ["villa", GiFamilyHouse, "Villa"],
//             ["farmHouse", MdBedroomParent, "Farm"],
//             ["poolHouse", GiWoodCabin, "Pool"],
//             ["rooms", SiHomeassistantcommunitystore, "Rooms"],
//             ["flat", IoBedOutline, "Flat"],
//             ["pg", FaTreeCity, "PG"],
//             ["cabins", BiBuildingHouse, "Cabins"],
//           ].map(([key, Icon, label]) => (
//             <div
//               key={key}
//               onClick={() => handleCategory(key)}
//               className={`
//                 flex flex-col items-center gap-1 cursor-pointer transition
//                 ${
//                   cate === key
//                     ? "text-orange-400 scale-110"
//                     : "text-gray-400 hover:text-white"
//                 }
//               `}
//             >
//               <Icon className="text-2xl" />
//               <span className="text-[11px]">{label}</span>
//               {cate === key && (
//                 <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// /* ================= DROPDOWN ITEM ================= */
// const DropdownItem = ({ icon, label, onClick, danger }) => (
//   <button
//     onClick={onClick}
//     className={`
//       w-full flex items-center gap-3 px-4 py-3 text-sm
//       hover:bg-white/10 transition
//       ${danger ? "text-red-400" : "text-gray-200"}
//     `}
//   >
//     <span className="text-lg">{icon}</span>
//     {label}
//   </button>
// );

// export default Nav;








// import React, { useContext, useEffect, useState } from "react";
// import logo from "../assets/image.png";
// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
// import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { FiHome, FiList, FiBook, FiLogOut } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { authDataContext } from "../context/AuthContext";
// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";

// const Nav = () => {
//   const navigate = useNavigate();

//   // ✅ WHITE MODE DEFAULT
//   const [darkMode, setDarkMode] = useState(() => {
//   return localStorage.getItem("theme") === "dark";
// });

//   const [showpopup, setshowpopup] = useState(false);
//   const [cate, setCate] = useState("");
//   const [input, setInput] = useState("");

//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setuserData } = useContext(userDataContext);
//   const { listingdata, setNewListingdata, handleSearch } =
//     useContext(listingDataContext);

//   /* 🌙 DARK MODE */
// useEffect(() => {
//   if (darkMode) {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// }, [darkMode]);


//   /* 🔍 SEARCH */
//   useEffect(() => {
//     handleSearch(input);
//   }, [input]);

//   const handleLogout = async () => {
//     await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
//     setuserData(null);
//     setshowpopup(false);
//   };

//   const handleCategory = (category) => {
//     setCate(category);
//     if (category === "trending") setNewListingdata(listingdata);
//     else setNewListingdata(listingdata.filter((l) => l.category === category));
//   };

//   return (
//     <nav
//       className="
//         fixed top-0 z-50 w-full
//         bg-white dark:bg-gradient-to-b dark:from-[#0b1120]/95 dark:to-[#020617]/90
//         text-gray-900 dark:text-white
//         backdrop-blur-xl
//         border-b border-gray-200 dark:border-white/10
//         transition-colors
//       "
//     >
//       {/* ================= TOP BAR ================= */}
//       <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

//         {/* LOGO */}
//         <img
//           src={logo}
//           alt="logo"
//           onClick={() => navigate("/")}
//           className="w-10 h-10 cursor-pointer"
//         />

//         {/* SEARCH */}
//         <div className="hidden md:flex relative w-[440px]">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Search by city, landmark, place..."
//             className="
//               w-full rounded-full px-6 py-3 pr-12
//               bg-gray-100 text-gray-900
//               dark:bg-white/10 dark:text-white
//               placeholder:text-gray-500 dark:placeholder:text-gray-400
//               border border-gray-300 dark:border-white/10
//               focus:outline-none
//               focus:ring-2 focus:ring-orange-500/60
//               transition
//             "
//           />
//           <IoSearchSharp className="absolute right-4 top-3.5 text-xl text-gray-500 dark:text-gray-300" />
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3 relative">

//           {/* THEME TOGGLE */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
//           >
//             {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
//           </button>

//           {/* AUTH */}
//           {!userData ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 rounded-full bg-orange-500 text-white font-medium text-nowrap"
//             >
//               Sign In
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-full bg-red-500 text-white text-nowrap"
//             >
//               Sign Out
//             </button>
//           )}

//           {/* MENU */}
//           <button
//             onClick={() => setshowpopup(!showpopup)}
//             className="flex items-center gap-2 px-3 py-2 rounded-full
//               bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
//           >
//             <GiHamburgerMenu />
//             {userData ? (
//               <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
//                 {userData.name[0].toUpperCase()}
//               </span>
//             ) : (
//               <CgProfile />
//             )}
//           </button>

//           {/* DROPDOWN */}
//           {showpopup && (
//             <div
//               className="
//                 absolute right-0 top-14 w-64 rounded-2xl
//                 bg-white dark:bg-[#020617]/95
//                 border border-gray-200 dark:border-white/10
//                 shadow-2xl overflow-hidden
//               "
//             >
//               <DropdownItem icon={<FiHome />} label="List your home" onClick={() => navigate("/listingpage1")} />
//               <DropdownItem icon={<FiList />} label="My listings" onClick={() => navigate("/mylisting")} />
//               <DropdownItem icon={<FiBook />} label="My bookings" onClick={() => navigate("/mybooking")} />

//               {userData && (
//                 <>
//                   <div className="h-px bg-gray-200 dark:bg-white/10 my-1" />
//                   <DropdownItem icon={<FiLogOut />} label="Logout" danger onClick={handleLogout} />
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ================= CATEGORIES ================= */}
//       <div className="border-t border-gray-200 dark:border-white/10">
//         <div className="flex gap-10 px-8 py-5 justify-start md:justify-center text-xs">
//           {[
//             ["trending", MdWhatshot, "Trending"],
//             ["villa", GiFamilyHouse, "Villa"],
//             ["farmHouse", MdBedroomParent, "Farm"],
//             ["poolHouse", GiWoodCabin, "Pool"],
//             ["rooms", SiHomeassistantcommunitystore, "Rooms"],
//             ["flat", IoBedOutline, "Flat"],
//             ["pg", FaTreeCity, "PG"],
//             ["cabins", BiBuildingHouse, "Cabins"],
//           ].map(([key, Icon, label]) => (
//             <div
//               key={key}
//               onClick={() => handleCategory(key)}
//               className={`flex flex-col items-center gap-1 cursor-pointer transition
//                 ${cate === key
//                   ? "text-orange-500 scale-110"
//                   : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
//                 }
//               `}
//             >
//               <Icon className="text-2xl" />
//               <span className="text-[11px]">{label}</span>
//               {cate === key && <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1" />}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// /* ================= DROPDOWN ITEM ================= */
// const DropdownItem = ({ icon, label, onClick, danger }) => (
//   <button
//     onClick={onClick}
//     className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition
//       hover:bg-gray-100 dark:hover:bg-white/10
//       ${danger ? "text-red-500" : "text-gray-700 dark:text-gray-200"}
//     `}
//   >
//     <span className="text-lg">{icon}</span>
//     {label}
//   </button>
// );

// export default Nav;











import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/lg.png";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode, MdLightMode, MdWhatshot } from "react-icons/md";
import {
  GiFamilyHouse,
  GiWoodCabin,
} from "react-icons/gi";
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
    await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
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
      className="fixed top-0 z-50 w-full backdrop-blur-md border-b"
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className=" cursor-pointer rounded-full w-14 h-14"
        />

        {/* SEARCH */}
        <div className="hidden md:flex relative w-[420px]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search by city, landmark..."
            className="w-full rounded-full px-6 py-2.5 pr-12 outline-none border"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />
          <IoSearchSharp className="absolute right-4 top-3 text-xl opacity-70" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 relative">

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
              className="px-4 py-2 rounded-full bg-orange-500 text-white"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-red-500 text-white"
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
              <DropdownItem icon={<FiHome />} label="List your home" onClick={() => navigate("/listingpage1")} />
              <DropdownItem icon={<FiList />} label="My listings" onClick={() => navigate("/mylisting")} />
              <DropdownItem icon={<FiBook />} label="My bookings" onClick={() => navigate("/mybooking")} />
              <div className="h-px my-1" style={{ backgroundColor: "var(--border)" }} />
              <DropdownItem icon={<FiLogOut />} label="Logout" danger onClick={handleLogout} />
            </div>
          )}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="flex gap-8 px-6 py-4 justify-center text-xs">
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
