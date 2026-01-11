// import React, { useEffect } from "react";
// import { useContext } from "react";
// import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../context/userContext";
// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import axios from "axios";
// import { authDataContext } from "../context/AuthContext";
// import { bookingDataContext } from "../context/BookingContext";

// const ViewCard = () => {
//   let navigate = useNavigate();
//   let { cardDetails } = useContext(listingDataContext);
//   let { userData } = useContext(userDataContext);
//   let { serverUrl } = useContext(authDataContext);
//   let { updating, setUpdating, deleting, setDeleting } =
//     useContext(listingDataContext);

//   let {
//     checkIn,
//     setCheckIn,
//     checkOut,
//     setCheckOut,
//     total,
//     setTotal,
//     night,
//     setNight,
//     handleBooking,booking
//   } = useContext(bookingDataContext);

//   let [updatepopup, setUpdatepopup] = useState(false);
//   let [bookingpopup, setBookingpopup] = useState(false);
//   let [title, setTitle] = useState(cardDetails.title);
//   let [description, setDescription] = useState(cardDetails.description);
//   let [backEndImage1, setBackEndImage1] = useState(cardDetails.backEndImage1);
//   let [backEndImage2, setBackEndImage2] = useState(cardDetails.backEndImage2);
//   let [backEndImage3, setBackEndImage3] = useState(cardDetails.backEndImage3);
//   let [rent, setRent] = useState(cardDetails.rent);
//   let [city, setCity] = useState(cardDetails.city);
//   let [landmark, setLandmark] = useState(cardDetails.landmark);
//   let [minDate, setMinDate] = useState();

  
//   const handleUpdateListing = async () => {
//     setUpdating(true);
//     try {
//       let formData = new FormData();

//       formData.append("title", title);
//       if (backEndImage1) {
//         formData.append("image1", backEndImage1);
//       }
//       if (backEndImage2) {
//         formData.append("image2", backEndImage2);
//       }
//       if (backEndImage3) {
//         formData.append("image3", backEndImage3);
//       }
//       formData.append("description", description);
//       formData.append("rent", rent);
//       formData.append("city", city);
//       formData.append("landmark", landmark);

//       let result = await axios.post(
//         serverUrl + `/api/listing/update/${cardDetails._id}`,
//         formData,
//         {
//           withCredentials: true,
//         }
//       );
//       setUpdating(false);
//       console.log(result);
//     toast.success("update Listing Successfully");
//       navigate("/");
//       setTitle("");
//       setDescription("");

//       setBackEndImage1(null);
//       setBackEndImage2(null);
//       setBackEndImage3(null);
//       setRent("");
//       setCity("");
//       setLandmark("");
//     } catch (error) {
//       setUpdating(false);
//       console.log(error);
//        toast.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     let today = new Date().toISOString().split("T")[0];
//     setMinDate(today);
//   }, []);

//   useEffect(() => {
//     if (checkIn && checkOut) {
//       let inDate = new Date(checkIn);
//       let OutDate = new Date(checkOut);
//       let n = (OutDate - inDate) / (24 * 60 * 60 * 1000);
//       setNight(n);
//       let airBnbCharge = cardDetails.rent * (7 / 100);
//       let tax = cardDetails.rent * (7 / 100);
//       if (n > 0) {
//         setTotal(cardDetails.rent * n + airBnbCharge + tax);
//       } else {
//         setTotal(0);
//       }
//     }
//   }, [checkIn, checkOut, cardDetails.rent, total]);


   
//   const handleDeleteListing = async () => {
//     setDeleting(true);
//     try {
//       let result = await axios.delete(
//         serverUrl + `/api/listing/delete/${cardDetails._id}`,
//         { withCredentials: true }
//       );
//       setDeleting(false);
//       console.log(result.data);
//       navigate("/");
//     } catch (error) {
//       setDeleting(false);
//       console.log(error);
//     }
//   };

//   const handleimage1 = (e) => {
//     let file = e.target.files[0];
//     setBackEndImage1(file);
//   };

//   const handleimage2 = (e) => {
//     let file = e.target.files[0];
//     setBackEndImage2(file);
//   };

//   const handleimage3 = (e) => {
//     let file = e.target.files[0];
//     setBackEndImage3(file);
//   };

//   return (
//     <div className="w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
//       <div
//         className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[2%] left-[20px] rounded-[50%] flex items-center justify-center"
//         onClick={() => navigate(`/`)}
//       >
//         <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
//       </div>

//       <div
//         className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px]"
//       >{`${cardDetails.city.toUpperCase()} `}</div>

//       <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row">
//         <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
//           <img
//             src={cardDetails.image1}
//             alt=""
//             className="w-[100%] object-cover"
//           />
//         </div>

//         <div className="w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col overflow-hidden ">
//           <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
//             <img src={cardDetails.image2} alt="" className="w-[100%]" />
//           </div>
//           <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
//             <img src={cardDetails.image3} alt="" className="w-[100%]" />
//           </div>
//         </div>
//       </div>
//       <div
//         className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px]"
//       >{`${cardDetails.title.toUpperCase()} ${cardDetails.category.toUpperCase()}, ${cardDetails.landmark.toUpperCase()}`}</div>

//       <div
//         className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px] text-gray-800"
//       >{`${cardDetails.description.toUpperCase()}`}</div>

//       <div
//         className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px]"
//       >{`Rs.${cardDetails.rent}/day `}</div>
//       <div className="flex items-start justify-center ">
//         {cardDetails.host == userData._id && (
//           <button
//             type="button"
//             className="bg-amber-500 px-10 py-3 rounded-2xl cursor-pointer hover:bg-amber-400 text-white text-2xl text-nowrap"
//             onClick={() => setUpdatepopup((prev) => !prev)}
//           >
//             Edit listing
//           </button>
//         )}
//         {cardDetails.host != userData._id && (
//           <button
//             type="button"
//             className="bg-amber-500 px-10 py-3 rounded-2xl cursor-pointer hover:bg-amber-400 text-white text-2xl text-nowrap"
//             onClick={() => setBookingpopup((prev) => !prev)}
//           >
//             Reserve
//           </button>
//         )}
//       </div>

//       {/* updatelistingpage */}


      

//       {updatepopup && (
//   <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">

//     {/* Close */}
//     <RxCross2
//       className="absolute top-6 left-6 w-10 h-10 text-white cursor-pointer hover:scale-110 transition"
//       onClick={() => setUpdatepopup(false)}
//     />

//     <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 overflow-auto max-h-[90vh]">

//       {/* Header */}
//       <h1 className="text-2xl font-semibold text-center mb-6 border-b pb-4">
//         Update Listing
//       </h1>

//       {/* Form */}
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="space-y-5"
//       >
//         {/* Title */}
//         <div>
//           <label className="block font-medium mb-1">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block font-medium mb-1">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border rounded-xl px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
//             required
//           />
//         </div>

//         {/* Images */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           {[1, 2, 3].map((i) => (
//             <label
//               key={i}
//               className="flex flex-col items-center justify-center
//               border-2 border-dashed rounded-2xl p-4 cursor-pointer
//               hover:border-orange-400 transition text-sm text-gray-600"
//             >
//               Upload Image {i}
//               <input
//                 type="file"
//                 className="hidden"
//                 onChange={
//                   i === 1 ? handleimage1 : i === 2 ? handleimage2 : handleimage3
//                 }
//               />
//             </label>
//           ))}
//         </div>

//         {/* Rent */}
//         <div>
//           <label className="block font-medium mb-1">Rent / day</label>
//           <input
//             type="text"
//             value={rent}
//             onChange={(e) => setRent(e.target.value)}
//             className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//             required
//           />
//         </div>

//         {/* City & Landmark */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block font-medium mb-1">City</label>
//             <input
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Landmark</label>
//             <input
//               type="text"
//               value={landmark}
//               onChange={(e) => setLandmark(e.target.value)}
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
//           <button
//             type="button"
//             onClick={handleUpdateListing}
//             disabled={updating}
//             className={`flex-1 py-3 rounded-xl text-white font-semibold transition
//               ${
//                 updating
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
//               }`}
//           >
//             {updating ? "Updating..." : "Update Listing"}
//           </button>

//           <button
//             type="button"
//             onClick={handleDeleteListing}
//             disabled={deleting}
//             className={`flex-1 py-3 rounded-xl text-white font-semibold transition
//               ${
//                 deleting
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-red-500 hover:bg-red-600"
//               }`}
//           >
//             {deleting ? "Deleting..." : "Delete Listing"}
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}



     

//       {bookingpopup && (
//   <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">

//     {/* Close */}
//     <RxCross2
//       className="absolute top-6 left-6 w-10 h-10 text-white cursor-pointer hover:scale-110 transition"
//       onClick={() => setBookingpopup(false)}
//     />

//     <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* LEFT : Booking Form */}
//       <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
//         <h1 className="text-2xl font-semibold text-center mb-6 border-b pb-3">
//           Confirm & Book
//         </h1>

//         <div className="space-y-6">
//           <h3 className="text-lg font-semibold">Your Trip</h3>

//           {/* Check-in */}
//           <div className="flex flex-col gap-2">
//             <label className="font-medium">Check-in</label>
//             <input
//               type="date"
//               min={minDate}
//               value={checkIn}
//               onChange={(e) => setCheckIn(e.target.value)}
//               className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               required
//             />
//           </div>

//           {/* Check-out */}
//           <div className="flex flex-col gap-2">
//             <label className="font-medium">Check-out</label>
//             <input
//               type="date"
//               min={checkIn || minDate}
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               required
//             />
//           </div>

//           {/* CTA */}
//           <button
//             onClick={() => handleBooking(cardDetails._id)}
//             disabled={booking}
//             className={`w-full mt-4 py-3 rounded-xl text-white font-semibold transition
//               ${
//                 booking
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
//               }`}
//           >
//             {booking ? "Booking..." : "Book Now"}
//           </button>
//         </div>
//       </div>

//       {/* RIGHT : Price Summary */}
//       <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">

//         {/* Listing Preview */}
//         <div className="flex gap-4">
//           <img
//             src={cardDetails.image1}
//             alt=""
//             className="w-24 h-24 rounded-xl object-cover"
//           />
//           <div className="space-y-1">
//             <h2 className="font-semibold truncate">
//               {cardDetails.title}
//             </h2>
//             <p className="text-sm text-gray-600">
//               {cardDetails.landmark}, {cardDetails.city}
//             </p>
//             <p className="text-sm text-gray-500">
//               {cardDetails.category}
//             </p>
//             <div className="flex items-center gap-1 text-sm">
//               <FaStar className="text-orange-400" />
//               {cardDetails.ratings}
//             </div>
//           </div>
//         </div>

//         {/* Price Breakdown */}
//         <div className="border-t pt-4 space-y-3">
//           <h3 className="text-lg font-semibold">Price details</h3>

//           <div className="flex justify-between text-sm">
//             <span>
//               ₹{cardDetails.rent} × {night} nights
//             </span>
//             <span>₹{cardDetails.rent * night}</span>
//           </div>

//           <div className="flex justify-between text-sm">
//             <span>Tax</span>
//             <span>₹{(cardDetails.rent * 7) / 100}</span>
//           </div>

//           <div className="flex justify-between text-sm">
//             <span>Service fee</span>
//             <span>₹{(cardDetails.rent * 7) / 100}</span>
//           </div>

//           <div className="flex justify-between font-semibold border-t pt-3">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };

// export default ViewCard;




// import React, { useEffect, useState, useContext } from "react";
// import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import { listingDataContext } from "../context/ListingContext";
// import { userDataContext } from "../context/userContext";
// import { authDataContext } from "../context/AuthContext";
// import { bookingDataContext } from "../context/BookingContext";

// const ViewCard = () => {
//   const navigate = useNavigate();

//   const { cardDetails, updating, setUpdating, deleting, setDeleting } =
//     useContext(listingDataContext);

//   const { userData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);

//   const {
//     checkIn,
//     setCheckIn,
//     checkOut,
//     setCheckOut,
//     total,
//     setTotal,
//     night,
//     setNight,
//     handleBooking,
//     booking,
//   } = useContext(bookingDataContext);

//   const [updatepopup, setUpdatepopup] = useState(false);
//   const [bookingpopup, setBookingpopup] = useState(false);

//   const [title, setTitle] = useState(cardDetails.title);
//   const [description, setDescription] = useState(cardDetails.description);
//   const [backEndImage1, setBackEndImage1] = useState(null);
//   const [backEndImage2, setBackEndImage2] = useState(null);
//   const [backEndImage3, setBackEndImage3] = useState(null);
//   const [rent, setRent] = useState(cardDetails.rent);
//   const [city, setCity] = useState(cardDetails.city);
//   const [landmark, setLandmark] = useState(cardDetails.landmark);
//   const [minDate, setMinDate] = useState("");

//   /* ---------- DATE & PRICE ---------- */
//   useEffect(() => {
//     setMinDate(new Date().toISOString().split("T")[0]);
//   }, []);

//   useEffect(() => {
//     if (checkIn && checkOut) {
//       const n =
//         (new Date(checkOut) - new Date(checkIn)) /
//         (24 * 60 * 60 * 1000);
//       setNight(n);
//       if (n > 0) {
//         const tax = cardDetails.rent * 0.07;
//         setTotal(cardDetails.rent * n + tax + tax);
//       } else setTotal(0);
//     }
//   }, [checkIn, checkOut]);

//   /* ---------- UPDATE ---------- */
//   const handleUpdateListing = async () => {
//     setUpdating(true);
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("rent", rent);
//       formData.append("city", city);
//       formData.append("landmark", landmark);
//       if (backEndImage1) formData.append("image1", backEndImage1);
//       if (backEndImage2) formData.append("image2", backEndImage2);
//       if (backEndImage3) formData.append("image3", backEndImage3);

//       await axios.post(
//         `${serverUrl}/api/listing/update/${cardDetails._id}`,
//         formData,
//         { withCredentials: true }
//       );

//       setUpdating(false);
//       navigate("/");
//     } catch (err) {
//       setUpdating(false);
//       console.log(err);
//     }
//   };

//   /* ---------- DELETE ---------- */
//   const handleDeleteListing = async () => {
//     setDeleting(true);
//     try {
//       await axios.delete(
//         `${serverUrl}/api/listing/delete/${cardDetails._id}`,
//         { withCredentials: true }
//       );
//       setDeleting(false);
//       navigate("/");
//     } catch (err) {
//       setDeleting(false);
//       console.log(err);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#0b0b0f] text-gray-200 pb-24">

//       {/* Back Button */}
//       <div
//         className="fixed top-6 left-6 z-50 w-12 h-12 bg-[#1c1c24] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2a2a35]"
//         onClick={() => navigate("/")}
//       >
//         <FaArrowLeftLong />
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="max-w-6xl mx-auto px-4 pt-24">
//         <div className="bg-[#14141c] rounded-3xl shadow-2xl p-6 md:p-10 space-y-8">

//           <p className="text-sm uppercase tracking-widest text-gray-400">
//             {cardDetails.city}
//           </p>

//           <h1 className="text-3xl font-semibold text-white">
//             {cardDetails.title}
//           </h1>

//           <div className="flex items-center gap-2 text-sm text-gray-300">
//             <FaStar className="text-orange-400" />
//             <span>{cardDetails.ratings}</span>
//             <span className="text-gray-500">
//               · {cardDetails.category} · {cardDetails.landmark}
//             </span>
//           </div>

//           {/* IMAGE GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden">
//             <img src={cardDetails.image1} className="md:col-span-2 h-[320px] w-full object-cover" />
//             <img src={cardDetails.image2} className="h-[320px] w-full object-cover" />
//             <img src={cardDetails.image3} className="h-[320px] w-full object-cover" />
//           </div>

//           <p className="max-w-3xl text-gray-400 leading-relaxed">
//             {cardDetails.description}
//           </p>

//           {/* PRICE + CTA */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-gray-700 pt-6">
//             <p className="text-2xl font-semibold text-white">
//               ₹{cardDetails.rent}
//               <span className="text-base text-gray-400"> / night</span>
//             </p>

//             {cardDetails.host === userData._id ? (
//               <button
//                 onClick={() => setUpdatepopup(true)}
//                 className="px-8 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition"
//               >
//                 Edit Listing
//               </button>
//             ) : (
//               <button
//                 onClick={() => setBookingpopup(true)}
//                 className="px-8 py-3 rounded-xl text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02] transition"
//               >
//                 Reserve
//               </button>
//             )}
//           </div>

//         </div>
//       </div>

//       {/* ================= UPDATE POPUP ================= */}
//       {updatepopup && (
//         <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
//           <RxCross2
//             className="absolute top-6 left-6 w-10 h-10 text-white cursor-pointer"
//             onClick={() => setUpdatepopup(false)}
//           />

//           <div className="w-full max-w-3xl bg-[#14141c] rounded-3xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-auto text-white">
//             <h1 className="text-2xl font-semibold text-center mb-6 border-b border-gray-700 pb-4">
//               Update Listing
//             </h1>

//             <form className="space-y-4">
//               <input className="w-full bg-[#1c1c24] border border-gray-700 rounded-xl px-4 py-2" value={title} onChange={(e)=>setTitle(e.target.value)} />
//               <textarea className="w-full bg-[#1c1c24] border border-gray-700 rounded-xl px-4 py-2 h-28" value={description} onChange={(e)=>setDescription(e.target.value)} />
//               <div className="grid grid-cols-3 gap-4">
//                 <input type="file" onChange={(e)=>setBackEndImage1(e.target.files[0])}/>
//                 <input type="file" onChange={(e)=>setBackEndImage2(e.target.files[0])}/>
//                 <input type="file" onChange={(e)=>setBackEndImage3(e.target.files[0])}/>
//               </div>
//               <input className="w-full bg-[#1c1c24] border border-gray-700 rounded-xl px-4 py-2" value={rent} onChange={(e)=>setRent(e.target.value)} />
//               <input className="w-full bg-[#1c1c24] border border-gray-700 rounded-xl px-4 py-2" value={city} onChange={(e)=>setCity(e.target.value)} />
//               <input className="w-full bg-[#1c1c24] border border-gray-700 rounded-xl px-4 py-2" value={landmark} onChange={(e)=>setLandmark(e.target.value)} />

//               <div className="flex gap-4 pt-4">
//                 <button onClick={handleUpdateListing} className="flex-1 bg-orange-500 py-3 rounded-xl">
//                   {updating ? "Updating..." : "Update"}
//                 </button>
//                 <button onClick={handleDeleteListing} className="flex-1 bg-red-500 py-3 rounded-xl">
//                   {deleting ? "Deleting..." : "Delete"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}


      

//       {/* ================= BOOKING POPUP ================= */}
     
//       {bookingpopup && (
//   <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">

//     {/* Close */}
//     <RxCross2
//       className="absolute top-6 left-6 w-10 h-10 text-white cursor-pointer hover:scale-110 transition"
//       onClick={() => setBookingpopup(false)}
//     />

//     <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* LEFT : Booking Form */}
//       <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-black">
//         <h1 className="text-2xl font-semibold text-center mb-6 border-b pb-3 ">
//           Confirm & Book
//         </h1>

//         <div className="space-y-6">
//           <h3 className="text-lg font-semibold">Your Trip</h3>

//           {/* Check-in */}
//           <div className="flex flex-col gap-2">
//             <label className="font-medium">Check-in</label>
//             <input
//               type="date"
//               min={minDate}
//               value={checkIn}
//               onChange={(e) => setCheckIn(e.target.value)}
//               className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               required
//             />
//           </div>

//           {/* Check-out */}
//           <div className="flex flex-col gap-2">
//             <label className="font-medium">Check-out</label>
//             <input
//               type="date"
//               min={checkIn || minDate}
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               required
//             />
//           </div>

//           {/* CTA */}
//           <button
//             onClick={() => handleBooking(cardDetails._id)}
//             disabled={booking}
//             className={`w-full mt-4 py-3 rounded-xl text-white font-semibold transition
//               ${
//                 booking
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
//               }`}
//           >
//             {booking ? "Booking..." : "Book Now"}
//           </button>
//         </div>
//       </div>

//       {/* RIGHT : Price Summary */}
//       <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-black">

//         {/* Listing Preview */}
//         <div className="flex gap-4">
//           <img
//             src={cardDetails.image1}
//             alt=""
//             className="w-24 h-24 rounded-xl object-cover"
//           />
//           <div className="space-y-1">
//             <h2 className="font-semibold truncate">
//               {cardDetails.title}
//             </h2>
//             <p className="text-sm text-gray-600">
//               {cardDetails.landmark}, {cardDetails.city}
//             </p>
//             <p className="text-sm text-gray-500">
//               {cardDetails.category}
//             </p>
//             <div className="flex items-center gap-1 text-sm">
//               <FaStar className="text-orange-400" />
//               {cardDetails.ratings}
//             </div>
//           </div>
//         </div>

//         {/* Price Breakdown */}
//         <div className="border-t pt-4 space-y-3">
//           <h3 className="text-lg font-semibold">Price details</h3>

//           <div className="flex justify-between text-sm">
//             <span>
//               ₹{cardDetails.rent} × {night} nights
//             </span>
//             <span>₹{cardDetails.rent * night}</span>
//           </div>

//           <div className="flex justify-between text-sm">
//             <span>Tax</span>
//             <span>₹{(cardDetails.rent * 7) / 100}</span>
//           </div>

//           <div className="flex justify-between text-sm">
//             <span>Service fee</span>
//             <span>₹{(cardDetails.rent * 7) / 100}</span>
//           </div>

//           <div className="flex justify-between font-semibold border-t pt-3">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };

// export default ViewCard;



import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { listingDataContext } from "../context/ListingContext";
import { userDataContext } from "../context/userContext";
import { authDataContext } from "../context/AuthContext";
import { bookingDataContext } from "../context/BookingContext";

const ViewCard = () => {
  const navigate = useNavigate();

  const { cardDetails, updating, setUpdating, deleting, setDeleting } =
    useContext(listingDataContext);
  const { userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);

  const {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    handleBooking,
    booking,
  } = useContext(bookingDataContext);

  const [updatepopup, setUpdatepopup] = useState(false);
  const [bookingpopup, setBookingpopup] = useState(false);

  const [title, setTitle] = useState(cardDetails.title);
  const [description, setDescription] = useState(cardDetails.description);
  const [rent, setRent] = useState(cardDetails.rent);
  const [city, setCity] = useState(cardDetails.city);
  const [landmark, setLandmark] = useState(cardDetails.landmark);

  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [minDate, setMinDate] = useState("");

  /* ---------- DATE ---------- */
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  /* ---------- PRICE ---------- */
  useEffect(() => {
    if (checkIn && checkOut) {
      const n =
        (new Date(checkOut) - new Date(checkIn)) / (24 * 60 * 60 * 1000);
      setNight(n);
      if (n >= 0) {
        if(n==0) setNight(1);
        const tax = cardDetails.rent * 0.07;
        setTotal(cardDetails.rent * (n==0?1:n) + tax + tax);
      } else {
        setTotal(0);
      }
    }
  }, [checkIn, checkOut]);

  /* ---------- UPDATE ---------- */
  const handleUpdateListing = async () => {
    setUpdating(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);

      if (backEndImage1) formData.append("image1", backEndImage1);
      if (backEndImage2) formData.append("image2", backEndImage2);
      if (backEndImage3) formData.append("image3", backEndImage3);

      await axios.post(
        `${serverUrl}/api/listing/update/${cardDetails._id}`,
        formData,
        { withCredentials: true }
      );

      setUpdating(false);
      navigate("/");
    } catch (err) {
      setUpdating(false);
      console.log(err);
    }
  };

  /* ---------- DELETE ---------- */
  const handleDeleteListing = async () => {
    setDeleting(true);
    try {
      await axios.delete(
        `${serverUrl}/api/listing/delete/${cardDetails._id}`,
        { withCredentials: true }
      );
      setDeleting(false);
      navigate("/");
    } catch (err) {
      setDeleting(false);
      console.log(err);
    }
  };

  return (
    <div
      className="min-h-screen pb-24"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full
        flex items-center justify-center border"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <FaArrowLeftLong />
      </button>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <div
          className="rounded-3xl shadow-xl p-6 md:p-10 space-y-6 border"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <h1 className="text-3xl font-semibold">{cardDetails.title}</h1>

          <div className="flex items-center gap-2 text-sm">
            <FaStar className="text-orange-400" />
            <span>{cardDetails.ratings}</span>
            <span>
              · {cardDetails.category} · {cardDetails.landmark}
            </span>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
            <img
              src={cardDetails.image1}
              className="md:col-span-2 h-[300px] w-full object-cover"
            />
            <img
              src={cardDetails.image2}
              className="h-[300px] w-full object-cover"
            />
            <img
              src={cardDetails.image3}
              className="h-[300px] w-full object-cover"
            />
          </div>

          <p>{cardDetails.description}</p>

          {/* PRICE + CTA */}
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-4 border-t"
               style={{ borderColor: "var(--border)" }}>

            <p className="text-2xl font-semibold">
              ₹{cardDetails.rent} <span className="text-base">/ night</span>
            </p>

            {userData && cardDetails.host === userData._id ? (
              <button
                type="button"
                onClick={() => setUpdatepopup(true)}
                className="px-8 py-3 rounded-xl border"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border)",
                }}
              >
                Edit Listing
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setBookingpopup(true)}
                className="px-8 py-3 rounded-xl text-white
                bg-gradient-to-r from-orange-500 to-pink-500"
              >
                Reserve
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= UPDATE POPUP ================= */}
     {updatepopup && (
  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm
    flex items-center justify-center px-4">

    {/* Close */}
    <RxCross2
      className="absolute top-6 left-6 w-10 h-10 cursor-pointer"
      style={{ color: "var(--text)" }}
      onClick={() => setUpdatepopup(false)}
    />

    {/* Card */}
    <div
      className="w-full max-w-3xl rounded-3xl shadow-2xl
      p-6 sm:p-10 max-h-[90vh] overflow-auto"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        color: "var(--text)",
      }}
    >
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center mb-8 pb-4 border-b"
        style={{ borderColor: "var(--border)" }}>
        Update Listing
      </h1>

      <form className="space-y-5">

        {/* Title */}
        <input
          className="w-full rounded-xl px-4 py-3 outline-none border"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        {/* Description */}
        <textarea
          className="w-full rounded-xl px-4 py-3 outline-none border h-28 resize-none"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        {/* Image Uploads */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Image 1 */}
          <label
            className="flex flex-col items-center justify-center gap-2
            rounded-2xl border-2 border-dashed cursor-pointer p-4 transition"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-sm font-medium">Image 1</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setBackEndImage1(e.target.files[0])}
            />
            {backEndImage1 ? (
              <span className="text-green-500 text-sm">✔ Uploaded</span>
            ) : (
              <span className="text-gray-500 text-sm">Choose file</span>
            )}
          </label>

          {/* Image 2 */}
          <label
            className="flex flex-col items-center justify-center gap-2
            rounded-2xl border-2 border-dashed cursor-pointer p-4 transition"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-sm font-medium">Image 2</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setBackEndImage2(e.target.files[0])}
            />
            {backEndImage2 ? (
              <span className="text-green-500 text-sm">✔ Uploaded</span>
            ) : (
              <span className="text-gray-500 text-sm">Choose file</span>
            )}
          </label>

          {/* Image 3 */}
          <label
            className="flex flex-col items-center justify-center gap-2
            rounded-2xl border-2 border-dashed cursor-pointer p-4 transition"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-sm font-medium">Image 3</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setBackEndImage3(e.target.files[0])}
            />
            {backEndImage3 ? (
              <span className="text-green-500 text-sm">✔ Uploaded</span>
            ) : (
              <span className="text-gray-500 text-sm">Choose file</span>
            )}
          </label>

        </div>

        {/* Rent */}
        <input
          className="w-full rounded-xl px-4 py-3 outline-none border"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Rent per night"
        />

        {/* City */}
        <input
          className="w-full rounded-xl px-4 py-3 outline-none border"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />

        {/* Landmark */}
        <input
          className="w-full rounded-xl px-4 py-3 outline-none border"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          placeholder="Landmark"
        />

        {/* Actions */}
        <div className="flex gap-4 pt-6">
          <button
            type="button"
            onClick={handleUpdateListing}
            className="flex-1 py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-orange-500 to-pink-500"
          >
            {updating ? "Updating..." : "Update"}
          </button>

          <button
            type="button"
            onClick={handleDeleteListing}
            className="flex-1 py-3 rounded-xl text-white font-semibold bg-red-500"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>

      </form>
    </div>
  </div>
)}


      {/* ================= BOOKING POPUP ================= */}
      {bookingpopup && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
    style={{ background: "rgba(0,0,0,0.65)" }}
  >
    {/* Close */}
    <RxCross2
      className="absolute top-6 left-6 w-10 h-10 cursor-pointer transition hover:scale-110"
      style={{ color: "white" }}
      onClick={() => setBookingpopup(false)}
    />

    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* ================= LEFT : BOOKING FORM ================= */}
      <div
        className="rounded-3xl shadow-2xl p-6 sm:p-8"
        style={{
          background: "var(--card)",
          color: "var(--text)",
          border: "1px solid var(--border)",
        }}
      >
        <h1
          className="text-2xl font-semibold text-center mb-6 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          Confirm & Book
        </h1>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Your Trip</h3>

          {/* Check-in */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Check-in</label>
            <input
              type="date"
              min={minDate}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="rounded-xl px-4 py-2 outline-none border"
              style={{
                background: "var(--bg)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              required
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Check-out</label>
            <input
              type="date"
              min={checkIn || minDate}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="rounded-xl px-4 py-2 outline-none border"
              style={{
                background: "var(--bg)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
              required
            />
          </div>

          {/* CTA */}
          <button
            onClick={() => handleBooking(cardDetails._id)}
            disabled={booking}
            className={`w-full mt-4 py-3 rounded-xl text-white font-semibold transition
              ${
                booking
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
              }`}
          >
            {booking ? "Booking..." : "Book Now"}
          </button>
        </div>
      </div>

      {/* ================= RIGHT : PRICE SUMMARY ================= */}
      <div
        className="rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6"
        style={{
          background: "var(--card)",
          color: "var(--text)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Listing Preview */}
        <div className="flex gap-4">
          <img
            src={cardDetails.image1}
            alt=""
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div className="space-y-1 overflow-hidden">
            <h2 className="font-semibold truncate">
              {cardDetails.title}
            </h2>
            <p className="text-sm opacity-70">
              {cardDetails.landmark}, {cardDetails.city}
            </p>
            <p className="text-sm opacity-60">
              {cardDetails.category}
            </p>
            <div className="flex items-center gap-1 text-sm">
              <FaStar className="text-orange-400" />
              {cardDetails.ratings}
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div
          className="border-t pt-4 space-y-3"
          style={{ borderColor: "var(--border)" }}
        >
          <h3 className="text-lg font-semibold">Price details</h3>

          <div className="flex justify-between text-sm">
            <span>
              ₹{cardDetails.rent} × {night} nights
            </span>
            <span>₹{cardDetails.rent * night}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>₹{night>=1?(cardDetails.rent * 7) / 100:0}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Service fee</span>
            <span>₹{night>=1?(cardDetails.rent * 7) / 100:0}</span>
          </div>

          <div
            className="flex justify-between font-semibold border-t pt-3"
            style={{ borderColor: "var(--border)" }}
          >
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
)}

    </div>
  );
};

export default ViewCard;




// {updatepopup && (
//         <div className="w-[100%] h-[100%] flex items-center justify-center bg-[#000000a9] absolute top-[0px] z-[100] backdrop-blur-sm">
//           <RxCross2
//             className="w-[40px] h-[40px] text-white  cursor-pointer absolute top-[2%] left-[20px] rounded-[50%] flex items-center justify-center"
//             onClick={() => {
//               setUpdatepopup(false);
//             }}
//           />

//           <form
//             className="mt-32 sm:p-10 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-screen flex flex-col gap-y-4 overflow-auto bg-white"
//             onSubmit={(e) => {
//               e.preventDefault();
//               navigate("/");
//             }}
//           >
//             {/* Title */}
//             <div className="flex flex-col text-base sm:text-xl">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//                 required
//                 onChange={(e) => setTitle(e.target.value)}
//                 value={title}
//               />
//             </div>

//             {/* Description */}
//             <div className="flex flex-col text-base sm:text-xl">
//               <label>Description</label>
//               <textarea
//                 className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 resize-none h-24"
//                 required
//                 onChange={(e) => setDescription(e.target.value)}
//                 value={description}
//               ></textarea>
//             </div>

//             {/* Image 1 */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 Add Image 1
//               </label>
//               <input
//                 type="file"
//                 className="block w-full sm:w-[80%] text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-lg file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-amber-500
//               hover:file:bg-blue-100"
//                 onChange={handleimage1}
//               />
//             </div>

//             {/* Image 2 */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 Add Image 2
//               </label>
//               <input
//                 type="file"
//                 className="block w-full sm:w-[80%] text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-lg file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-amber-500
//               hover:file:bg-blue-100"
//                 onChange={handleimage2}
//               />
//             </div>

//             {/* Image 3 */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 Add Image 3
//               </label>
//               <input
//                 type="file"
//                 className="block w-full sm:w-[80%] text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-lg file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-amber-500
//               hover:file:bg-blue-100"
//                 onChange={handleimage3}
//               />
//             </div>

//             {/* Rent */}
//             <div className="flex flex-col text-base sm:text-xl">
//               <label>Rent</label>
//               <input
//                 type="text"
//                 className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//                 required
//                 onChange={(e) => setRent(e.target.value)}
//                 value={rent}
//               />
//             </div>

//             {/* City */}
//             <div className="flex flex-col text-base sm:text-xl">
//               <label>City</label>
//               <input
//                 type="text"
//                 className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//                 required
//                 onChange={(e) => setCity(e.target.value)}
//                 value={city}
//               />
//             </div>

//             {/* Landmark */}
//             <div className="flex flex-col text-base sm:text-xl">
//               <label>Landmark</label>
//               <input
//                 type="text"
//                 className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//                 required
//                 onChange={(e) => setLandmark(e.target.value)}
//                 value={landmark}
//               />
//             </div>

//             {/* Button */}

//             <div className="flex justify-around ">
//               <button
//                 className="mt-4   px-4 py-2 rounded-xl bg-orange-400 text-white  sm:w-36 hover:bg-amber-500 text-nowrap cursor-pointer"
//                 onClick={handleUpdateListing}
//                 disabled={updating}
//               >
//                 {updating ? "updating..." : "Update Listing"}
//               </button>
//               <button
//                 className="mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-36 hover:bg-amber-500 text-nowrap cursor-pointer"
//                 disabled={deleting}
//                 onClick={handleDeleteListing}
//               >
//                 {deleting ? "deleting..." : "Delete Listing"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
      




 {/* BOOking popup */}

      {/* {bookingpopup && (
        <div className="w-full h-screen flex items-center justify-center gap-[30px] flex-col bg-[#8984849f] absolute top-[0px] z-[100] backdrop-blur-sm md:flex-row ">
          <RxCross2
            className="w-[40px] h-[40px] text-white  cursor-pointer absolute top-[2%] left-[20px] rounded-[50%] flex items-center justify-center "
            onClick={() => {
              setBookingpopup(false);
            }}
          />

          <form className="max-w-[450px] w-[90%] md:h-[450px] bg-[#f7fbfc] md:p-[20px] rounded-lg flex items-center justify-center 
          flex-col gap-[10px] border-2 border-[#bab3b3]"
          onSubmit={(e)=>e.preventDefault()}>
            <h1 className="w-[100%] flex items-center justify-center py-[10px] text-[25px] border-b border-[#a3a3a3] overflow-auto shrink-0">
              Confirm & Book
            </h1>

            <div className="w-[100%] md:h-[70%]  mt-[10px] rounded-lg p-[10px]">
              <h3 className="text-[19px] font-semibold"> Your Trip </h3>

              <div className="w-[90%] flex items-center justify-start gap-[24px] mt-[20px] md:justify-center  md:flex-row md:items-start">
                <label htmlFor="checkin" className="text-[18px] md:text-[20px]">
                  CheckIn
                </label>

                <input
                  type="date"
                  id="checkIn"
                  min={minDate}
                  className="border-[#555656] border-2 w-[200px] h-[40px] rounded-[10px] bg-transparent px-[10px] text-[15px] md:text-[18px]"
                  required
                  onChange={(e) => setCheckIn(e.target.value)}
                  value={checkIn}
                />
              </div>
              <div className="w-[90%] flex items-center justify-start gap-[10px] mt-[40px] md:justify-center  md:flex-row md:items-start">
                <label
                  htmlFor="checkout"
                  className="text-[18px] md:text-[20px]"
                >
                  CheckOut
                </label>

                <input
                  type="date"
                  id="checkout"
                  min={minDate ||checkIn}
                  className="border-[#555656] border-2 w-[200px] h-[40px] rounded-[10px] bg-transparent px-[10px] text-[15px] md:text-[18px]"
                  required
                  onChange={(e) => setCheckOut(e.target.value)}
                  value={checkOut}
                />
              </div>
              <div className="w-full flex items-center justify-center mb-3">
                <button className="mt-6  mb-2 px-10 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-36 hover:bg-amber-500
                 text-nowrap cursor-pointer " onClick={()=>handleBooking(cardDetails._id)}>
                  {booking?"booking...":"Book Now"};
                </button>
              </div>
            </div>
          </form>

          <div
            className="max-w-[450px] w-[90%] h-[450px] bg-[#f7fbfc] p-[20px] 
  rounded-lg flex items-center justify-center flex-col gap-[10px] border-[1px]
   border-[#e2e1e1]"
          >
            <div
              className="w-[95%]  h-[40%] md:h-[30%] border border-[#deddd] rounded-lg
  flex justify-center items-center gap-[8px] p-[20px]  overflow-hidden"
            >
              <div
                className="w-[70%] h-[90px] flex items-center justify-center shrink-0 
      rounded-lg md:w-[100px] md:h-[100px]"
              >
                <img
                  src={cardDetails.image1}
                  alt=""
                  className="w-[100%] h-[100%] rounded-lg "
                />
              </div>

              <div className="w-[80%] h-[100px] gap-[5px]">
                <h1 className="w-[90%] truncate">
                  IN {cardDetails.landmark.toUpperCase()},{" "}
                  {cardDetails.city.toUpperCase()}
                </h1>

                <h1>{cardDetails.title.toUpperCase()}</h1>

                <h1>{cardDetails.category.toUpperCase()}</h1>

                <h1 className="flex items-center justify-start gap-[5px]">
                  <FaStar className="text-[#eb6262]" />
                  {cardDetails.ratings}
                </h1>
              </div>
            </div>
            <div className="w-[95%] h-[60%] border-[1px] border-[#abaaaa] rounded-lg flex justify-start items-start p-[20px] gap-[15px] flex-col">
              <h1 className="text-[22px] font-semibold">Booking Price - </h1>
              <p className="w-[100%] flex justify-between items-center px-[20px]">
                <span className="font-semibold">{`Rs ${cardDetails.rent} X ${night} nights`}</span>
                <span>{cardDetails.rent*night}</span>
              </p>
              <p className="w-[100%] flex justify-between items-center px-[20px]">
                <span className="font-semibold">Tax</span>
                <span>{cardDetails.rent*7/100}</span>
              </p>
              <p className="w-[100%] flex justify-between items-center px-[20px] border-b border-gray-500 pb-2">
                <span className="font-semibold">Airbnb charge</span>
                <span>{cardDetails.rent*7/100}</span>
              </p>
              <p className="w-[100%] flex justify-between items-center px-[20px]">
                <span className="font-semibold">Total</span>
                <span>{total}</span>
              </p>
            </div>
          </div>
        </div>
      )} */}



