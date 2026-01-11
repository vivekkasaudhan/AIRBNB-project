// // import React, { useState } from 'react'
// // import { useContext } from 'react'
// // import { userDataContext } from '../context/userContext'
// // import { listingDataContext } from '../context/ListingContext';
// // import { useNavigate } from 'react-router-dom';
// // import { FaStar } from "react-icons/fa";
// // import { GiConfirmed } from "react-icons/gi";
// // import { FcCancel } from "react-icons/fc";
// // import { bookingDataContext } from '../context/BookingContext';
// // const Card = ({ title, landmark, image1, image2, image3, rent, city, id ,ratings,isBooked,host}) => {
// //   let navigate=useNavigate();
// //   let {userData}=useContext(userDataContext);
// //   let {handleViewCard}=useContext(listingDataContext);
// //   let [popUp,setPopup]=useState(false);
// //   let {cancelBooking}=useContext(bookingDataContext)

// //   const handleClick=()=>{
// //     if(userData)
// //     {
// //       handleViewCard(id); 
// //     }
// //     else navigate("/login");

// //   }
// //   return (
// //     <div className="w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer z-10 relative
// //      "
// //     onClick={()=>!isBooked?handleClick():null}>

// //      {isBooked&&<div className='absolute right-1 text-green-400 bg-gray-200 top-2 rounded-lg p-1 font-bold'><GiConfirmed className='inline-flex' />Booked</div>}
// //      {isBooked&&userData&& host==userData._id&&<div className='absolute right-1 text-red-400 bg-gray-200 top-15 rounded-lg p-1 font-bold' onClick={()=>setPopup(prev=>!prev)}><FcCancel className='inline-flex' />Cancel Booking</div>}

// // {popUp&&<div className="w-[300px] h-[100px] bg-[#ffffffdf] absolute top-[110px] left-[13px] rounded-lg">
// //   <div className="w-[100%] h-[50%] text-[#e2d2d] flex items-start justify-center rounded-lg overflow-auto text-[20px] p-[10px]">
// //     Booking Cancel
// //   </div>

// //   <div className="w-[100%] h-[50%] text-[18px] font-semibold flex items-start justify-center gap-[10px] text-[#986b6b]">
// //     Are you sure?
// //     <button className="px-[20px] bg-[red] text-[white] rounded-lg hover:bg-slate-600"
// //    onClick={()=>{setPopup(false),cancelBooking(id)}} >
// //       Yes
// //     </button>
// //     <button className="px-[10px] bg-[red] text-[white] rounded-lg hover:bg-slate-600"
// //     onClick={()=>setPopup(false)}>
// //       No
// //     </button>
// //   </div>
// // </div>}




// //       <div className="w-[100%] h-[67%] rounded-lg overflow-auto flex">
// //         <img src={image1} alt="" className="w-[100%] shrink-0" />
// //         <img src={image2} alt="" className="w-[100%] shrink-0" />
// //         <img src={image3} alt="" className="w-[100%] shrink-0" />
// //       </div>

// //       <div className='w-full h-[33%] py-[20px] flex flex-col gap-1 '>
// //            <div className='flex items-center justify-between text-[18px]'><span className='w-[80%] text-ellipsis overflow-hidden text-nowrap font-semibold text-amber-950'>{`In ${landmark.toUpperCase()},${city.toUpperCase()}`}</span>
// //            <span className='flex items-center justify-center gap-x-1'><FaStar className='text-amber-600'/>{ratings}/5</span>
// //            </div>
// //            <span className='w-[80%] text-ellipsis text-[15px] overflow-hidden text-nowrap '>{title.toUpperCase()}</span>
// //            <span className='w-[80%] text-ellipsis text-[15px] overflow-hidden text-nowrap text-amber-950 '>₹{rent}/day</span>
// //       </div>


// //     </div>
// //   )
// // }

// // export default Card


// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { GiConfirmed } from "react-icons/gi";
// import { FcCancel } from "react-icons/fc";

// import { userDataContext } from "../context/userContext";
// import { listingDataContext } from "../context/ListingContext";
// import { bookingDataContext } from "../context/BookingContext";

// const Card = ({
//   title,
//   landmark,
//   image1,
//   image2,
//   image3,
//   rent,
//   city,
//   id,
//   ratings,
//   isBooked,
//   host,
// }) => {
//   const navigate = useNavigate();
//   const { userData } = useContext(userDataContext);
//   const { handleViewCard } = useContext(listingDataContext);
//   const { cancelBooking } = useContext(bookingDataContext);

//   const [popUp, setPopup] = useState(false);

//   const handleClick = () => {
//     if (!isBooked) {
//       if (userData) handleViewCard(id);
//       else navigate("/login");
//     }
//   };

//   return (
//   <div
//   onClick={handleClick}
//   className="w-[330px] max-w-[90%] rounded-2xl overflow-hidden cursor-pointer
//   bg-[var(--card)]
//   border border-[var(--border)]
//   shadow-sm hover:shadow-xl transition-all duration-300 relative "
// >

//       {/* Image Section */}
//       <div className="relative w-full h-[230px] overflow-hidden flex">
//         {[image1, image2, image3].map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt=""
//             className="w-full h-full object-cover shrink-0"
//           />
//         ))}

//         {/* Rating */}
//         <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70
//           px-2 py-1 rounded-full text-xs flex items-center gap-1 shadow ">
//           <FaStar className="text-amber-500" />
//           <span>{ratings}/5</span>
//         </div>

//         {/* Booked Badge */}
//         {isBooked && (
//           <div className="absolute top-3 right-3 bg-green-600 text-white
//             text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
//             <GiConfirmed /> Booked
//           </div>
//         )}

//         {/* Cancel Button */}
//         {isBooked && userData && host === userData._id && (
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setPopup(true);
//             }}
//             className="absolute bottom-3 right-3 bg-red-500 hover:bg-red-600
//               text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
//           >
//             <FcCancel /> Cancel
//           </button>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col gap-1">
//         <h3 className="font-semibold text-sm text-gray-900 dark:text-white truncate ">
//           In {landmark.toUpperCase()}, {city.toUpperCase()}
//         </h3>

//         <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
//           {title.toUpperCase()}
//         </p>

//         <p className="text-sm font-semibold text-gray-900 dark:text-white">
//           ₹{rent} <span className="text-xs font-normal text-gray-500">/ day</span>
//         </p>
//       </div>

//       {/* Cancel Confirmation Popup */}
//       {popUp && (
//         <div
//           onClick={(e) => e.stopPropagation()}
//           className="absolute inset-0 bg-black/40 flex items-center justify-center"
//         >
//           <div className="w-[90%] bg-white dark:bg-slate-800 rounded-xl p-5 shadow-xl">
//             <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
//               Cancel Booking?
//             </h3>

//             <p className="text-sm text-center text-gray-500 mt-2">
//               Are you sure you want to cancel this booking?
//             </p>

//             <div className="flex justify-center gap-4 mt-5">
//               <button
//                 onClick={() => {
//                   cancelBooking(id);
//                   setPopup(false);
//                 }}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => setPopup(false)}
//                 className="px-4 py-2 bg-gray-200 dark:bg-slate-700
//                   text-gray-800 dark:text-white rounded-lg"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";

import { userDataContext } from "../context/userContext";
import { listingDataContext } from "../context/ListingContext";
import { bookingDataContext } from "../context/BookingContext";

const Card = ({
  title,
  landmark,
  image1,
  image2,
  image3,
  rent,
  city,
  id,
  ratings,
  isBooked,
  host,
}) => {
  const navigate = useNavigate();
  const { userData } = useContext(userDataContext);
  const { handleViewCard } = useContext(listingDataContext);
  const { cancelBooking } = useContext(bookingDataContext);

  const [popUp, setPopup] = useState(false);

  const handleClick = () => {
    if (!isBooked) {
      if (userData) handleViewCard(id);
      else navigate("/login");
    }
  };


 
  return (
    <div
      onClick={handleClick}
      className="w-[330px] max-w-[90%] rounded-2xl overflow-hidden cursor-pointer
      bg-[var(--card)]
      border border-[var(--border)]
      shadow-sm hover:shadow-xl transition-all duration-300 relative"
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[230px] overflow-hidden flex">
        {[image1, image2, image3].map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-full object-cover shrink-0"
          />
        ))}

        {/* Rating */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs
          flex items-center gap-1 shadow
          bg-[var(--card)] border border-[var(--border)]"
        >
          <FaStar className="text-amber-500" />
          <span>{ratings}/5</span>
        </div>

        {/* Booked Badge */}
        {isBooked && (
          <div className="absolute top-3 right-3 bg-green-600 text-white
            text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
            <GiConfirmed /> Booked
          </div>
        )}

        {/* Cancel Booking */}
        {isBooked && userData && host === userData._id && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPopup(true);
            }}
            className="absolute bottom-3 right-3 bg-red-500 hover:bg-red-600
              text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            <FcCancel /> Cancel
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-1">
        <h3
          className="font-semibold text-sm truncate"
          style={{ color: "var(--text)" }}
        >
          In {landmark.toUpperCase()}, {city.toUpperCase()}
        </h3>

        <p className="text-xs opacity-70 truncate">
          {title.toUpperCase()}
        </p>

        <p
          className="text-sm font-semibold"
          style={{ color: "var(--text)" }}
        >
          ₹{rent} <span className="text-xs font-normal opacity-70">/ day</span>
        </p>
      </div>

      {/* CANCEL CONFIRMATION POPUP */}
      {popUp && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <div
            className="w-[90%] rounded-xl p-5 shadow-xl
            bg-[var(--card)] border border-[var(--border)]"
          >
            <h3
              className="text-lg font-semibold text-center"
              style={{ color: "var(--text)" }}
            >
              Cancel Booking?
            </h3>

            <p className="text-sm text-center opacity-70 mt-2">
              Are you sure you want to cancel this booking?
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => {
                  cancelBooking(id);
                  setPopup(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Yes
              </button>

              <button
                onClick={() => setPopup(false)}
                className="px-4 py-2 rounded-lg border border-[var(--border)]
                bg-transparent"
                style={{ color: "var(--text)" }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
