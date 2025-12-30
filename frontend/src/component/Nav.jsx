import React, { useContext, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { userDataContext } from "../context/userContext";
import { listingDataContext } from "../context/ListingContext";


const Nav = () => {
  const [showpopup, setshowpopup] = useState(false);
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
   let {userData,setuserData}=useContext(userDataContext);
   let {listingdata,setListingdata}=useContext(listingDataContext)
   let {newlistingdata,setNewListingdata,searchData,handleSearch,handleViewCard}=useContext(listingDataContext)
   let [cate,setCate]=useState("");
   let [input,setInput]=useState("")
  const handleLogout = async () => {
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setuserData(null);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory=async(category)=>{
    try {
      setCate(category);
      if(category=="trending")
      {
        setNewListingdata(listingdata);
      }
      else
     { setNewListingdata(listingdata.filter((list)=>list.category==category));}
          
    } catch (error) {
      
    }
  }

const handleClick=(id)=>{
    if(userData)
    {
      handleViewCard(id); 
    }
    else navigate("/login");

  }


  useEffect(()=>{
handleSearch(input);
  },[input])

  return (
    <div className="fixed top-0 bg-white z-50">
      <div className="w-screen min-h-18 border-b border-gray-200 px-10 md:px-20 flex items-center justify-between ">
        <div>
          <img src={logo} alt="" className="w-[50px] h-[50px]" />
        </div>

        <div className="w-[35%] flex items-center relative hidden md:block ">
          <input
            type="text"
            placeholder="Enter location name"
            className="border-2 border-gray-400 rounded-4xl px-10 py-2 w-full outline-none overflow-auto"
          onChange={(e)=>setInput(e.target.value)} value={input}/>
          <button className="  w-8 h-8 absolute right-5 pt-2 ">
            {" "}
            <IoSearchSharp className="w-8 h-8 text-gray-600" />
          </button>
        </div>


        <div className="flex items-center gap-x-1 relative">
          <span className="hidden md:block"  onClick={()=>{navigate("/listingpage1");setshowpopup(false)}}>List your Home</span>
          <button
            className="border-2 border-gray-400 flex items-center px-3 py-2 rounded-full gap-x-2 cursor-pointer"
            onClick={() => setshowpopup((prev) => !prev)}
          >
            <span><GiHamburgerMenu className="text-xl" />{" "}</span>
            {userData==null&&<span> <CgProfile className="text-xl" /></span>}
           {userData!=null&& <span className="w-7.5 h-7.5 bg-black rounded-full text-white">{userData.name[0]}</span>}
          </button>
          {showpopup && (
            <div className="w-50 min-h-50  rounded-lg border-2 border-slate-300 absolute  top-10 right-[5%] bg-slate-100 z-50">
              <ul className="flex flex-col items-start justify-center gap-y-3 pt-2 ">
               {!userData&& <li
                  className="w-full  hover:bg-gray-300 cursor-pointer  px-3  "
                  onClick={() => {navigate("/login");setshowpopup(false)}}
                >
                  Login
                </li>}


               {userData&& <li
                  className="w-full  hover:bg-gray-300 cursor-pointer px-3   "
                  onClick={()=>{handleLogout();setshowpopup(false)}}
                >
                  Logout
                </li>}


                <div className="border-t w-full border-gray-400"></div>
                <li className="w-full  hover:bg-gray-300 cursor-pointer   px-3 "
                onClick={()=>{navigate("/listingpage1");setshowpopup(false)}}>
                  List Your Home
                </li>
                <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  "
                 onClick={()=>{navigate("/mylisting"), setshowpopup(false)}}>
                  My Listing
                </li>
                <li className="w-full  hover:bg-gray-300 cursor-pointer  px-3  "
                 onClick={()=>{navigate("/mybooking"),setshowpopup(false)}}>
                  My Booking
                </li>
              </ul>
            </div>
          )}
        </div>
    { searchData && searchData.length > 0 && 
  <div className="w-[100vw] h-[450px] flex flex-col gap-[20px] absolute top-[50%] overflow-auto left-[0] justify-start items-center">
  <div className="max-w-[700px] w-[100vw] h-[300px] overflow-hidden flex flex-col bg-[#fefdfd] p-[20px] rounded-lg border-[1px] border-[#a2a1a1] cursor-pointer">
    
      {searchData.map((search) => (
  <div className="border-b border-black p-[10px] " onClick={()=>handleClick(search._id)}>
    {search.title} in {search.landmark}, {search.city}
  </div>
))}

    
  </div>
</div>}

      </div>

      <div className="w-[80%] flex items-center m-auto relative md:hidden  ">
        <input
          type="text"
          placeholder="Enter location name"
          className="border-2 border-gray-400 rounded-4xl px-10 py-2 w-full outline-none overflow-auto"
       onChange={(e)=>setInput(e.target.value)} value={input} />
        <button className="  w-8 h-8 absolute right-5 ">
          {" "}
          <IoSearchSharp className="w-8 h-8 text-gray-600" />
        </button>
      </div>

      <div className="w-full min-h-20 flex items-center sm:justify-center gap-x-4 cursor-pointer justify-start px-3 overflow-auto ">
        <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
         `}
        onClick={()=>handleCategory("trending")}>
          {" "}
          <MdWhatshot className="w-7.5 h-7.5 text-black" />
          <h3>Trending</h3>
        </div>


        <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="villa"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("villa")}>
          
          <GiFamilyHouse className="w-7.5 h-7.5 text-black" />
          <h3>Villa</h3>
        </div>


         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="farmHouse"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("farmHouse")}>

          <MdBedroomParent className="w-7.5 h-7.5 text-black" />
          <h3>Farm House</h3>
        </div>


         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="poolHouse"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("poolHouse")}>
          <GiWoodCabin className="w-7.5 h-7.5 text-black" />
          <h3>Pool House</h3>
        </div>

         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="rooms"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("rooms")}>
          <SiHomeassistantcommunitystore className="w-7.5 h-7.5 text-black" />
          <h3>Rooms</h3>
        </div>

         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="flat"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("flat")}>
          <IoBedOutline className="w-7.5 h-7.5 text-black" />
          <h3>Flat</h3>
        </div>

         <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="pg"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("pg")}>
          <FaTreeCity className="w-7.5 h-7.5 text-black" />
          <h3>PG</h3>
        </div>

        <div className={`flex items-center justify-center flex-col hover:border-b border-[#a6a5a5] text-[13px]
          ${cate=="cabins"?"border-b border-[#a6a5a5]":""}`} onClick={()=>handleCategory("cabins")}>
          <BiBuildingHouse className="w-7.5 h-7.5 text-black" />
          <h3>cabins</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
