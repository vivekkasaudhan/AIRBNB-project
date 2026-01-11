// import React, { useContext, useState } from 'react'
// import { GiConfirmed } from 'react-icons/gi'
// import { bookingDataContext } from '../context/BookingContext'
// import { FaStar } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';
// import Star from '../component/star';
// import { authDataContext } from '../context/AuthContext';
// import { userDataContext } from '../context/userContext';
// import { listingDataContext } from '../context/ListingContext';
// import axios from 'axios';

// const Booked = () => {
//     let {bookingData}=useContext(bookingDataContext);
//     let navigate=useNavigate();
//     let [star,setStar]=useState(null);
//  let {serverUrl}=useContext(authDataContext);
//  let {getCurrentUser}=useContext(userDataContext)
//  let {getListing}=useContext(listingDataContext);
//  let {cardDetails}=useContext(listingDataContext)
//      const handleRating=async(id)=>{
//         try {
//              let result=await axios.post(serverUrl+`/api/listing/ratings/${id}`,{ratings:star},{withCredentials:true})
//              await getListing();
//              await getCurrentUser();
//              console.log(result.data);
//              navigate("/")
             
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
   

//     const handleStar=async(value)=>{
//          setStar(value);
//          console.log("You rated ",value);
         
//     }


//   return (
//     <div className="w-[100vw] min-h-[100vh] flex items-center justify-center gap-[30px] bg-slate-200 flex-col">
//   <div className="w-[95%] max-w-[500px] h-[400px] bg-[white] flex items-center justify-center border-[1px] border-[#b5b5b5] flex-col gap-[20px] p-[20px] md:w-[80%] rounded-lg">
    
//     <div className="w-[100%] h-[50%] text-[20px] flex items-center justify-center flex-col gap-[20px] font-semibold">
//       <GiConfirmed className="w-[100px] h-[100px] text-[green]" />
//       Booking Confirmed
//     </div>

//     <div className="w-[100%] flex items-center justify-between text-[16px] md:text-[18px]">
//       <span>Booking Id : </span> <span>{bookingData._id}</span>
//     </div>
//     <div className="w-[100%] flex items-center justify-between text-[16px] md:text-[18px]">
//       <span>Owner Details : </span> <span>{bookingData.host?.email}</span>
//     </div>
//     <div className="w-[100%] flex items-center justify-between text-[16px] md:text-[18px]">
//       <span>Total Rent : </span> <span>{bookingData.totalRent}</span>
//     </div>

//   </div>

//   <div className="w-[95%] max-w-[600px] h-[200px] bg-[white] flex items-center justify-center border-[1px] border-[#b5b5b5] flex-col gap-[20px] p-[20px] md:w-[80%] rounded-lg">
//   <h1 className="text-[18px]">{star} out of 5 Rating</h1>

//   <Star onRate={handleStar} />

//   <button className="px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg text-nowrap cursor-pointer"
//   onClick={()=>handleRating(cardDetails._id)}>
//     Submit
//   </button>
// </div>

// <button className=" absolute top-5 right-2 px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg text-nowrap cursor-pointer"
// onClick={()=>navigate("/")}>
//   Back to Home
// </button>

// </div>

//   )
// }

// export default Booked



import React, { useContext, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Star from "../component/star";
import { bookingDataContext } from "../context/BookingContext";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/userContext";
import { listingDataContext } from "../context/ListingContext";

const Booked = () => {
  const navigate = useNavigate();

  const { bookingData } = useContext(bookingDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const { getListing, cardDetails } = useContext(listingDataContext);

  const [star, setStar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStar = (value) => {
    setStar(value);
  };

  const handleRating = async (id) => {
    if (!star) return;
    try {
      setLoading(true);
      await axios.post(
        serverUrl + `/api/listing/ratings/${id}`,
        { ratings: star },
        { withCredentials: true }
      );
      await getListing();
      await getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center gap-8
      bg-gradient-to-br from-gray-100 to-gray-200
      dark:from-[#020617] dark:to-[#0f172a] relative"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 px-6 py-2 rounded-xl
        bg-red-500 text-white font-medium hover:bg-red-600 transition"
      >
        Back to Home
      </button>

      {/* Booking Confirm Card */}
      <div
        className="w-[90%] max-w-md rounded-3xl shadow-2xl p-8
        bg-white dark:bg-[#0b1120]
        border border-gray-200 dark:border-slate-700"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <GiConfirmed className="w-24 h-24 text-green-500" />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Booking Confirmed
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your stay has been successfully booked
          </p>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Booking ID</span>
            <span className="font-medium">{bookingData?._id}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Owner Email</span>
            <span className="font-medium">
              {bookingData?.host?.email}
            </span>
          </div>
          <div className="flex justify-between text-gray-900 dark:text-white font-semibold">
            <span>Total Rent</span>
            <span>₹{bookingData?.totalRent}</span>
          </div>
        </div>
      </div>

      {/* Rating Card */}
      <div
        className="w-[90%] max-w-lg rounded-3xl shadow-2xl p-8
        bg-white dark:bg-[#0b1120]
        border border-gray-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
          Rate your stay
        </h2>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          {star ? `${star} out of 5 stars` : "Tap to rate"}
        </p>

        <div className="flex justify-center mt-5">
          <Star onRate={handleStar} />
        </div>

        <button
          disabled={!star || loading}
          onClick={() => handleRating(cardDetails._id)}
          className={`w-full mt-6 py-3 rounded-xl font-semibold text-white transition
            ${
              loading || !star
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
            }`}
        >
          {loading ? "Submitting..." : "Submit Rating"}
        </button>
      </div>
    </div>
  );
};

export default Booked;
