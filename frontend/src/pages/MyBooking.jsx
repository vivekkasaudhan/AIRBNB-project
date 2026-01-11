// import React, { useContext } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../context/userContext";
// import Card from "../component/card";
// import { bookingDataContext } from "../context/BookingContext";
// const MyBooking = () => {
//       let navigate = useNavigate();
//       let {userData}=useContext(userDataContext);
//       let {bookingData}=useContext(bookingDataContext);
//   return (
//      <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative">
//       <div
//         className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
//         onClick={() => navigate("/")}
//       >
//         <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
//       </div>

//       <div className="w-[50%] h-[10%] border-[2px] border-[#908cc8] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[20px] md:w-[600px]">
//         MY Booking
//       </div>
//       <div className="w-full h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]">
//          {  userData.booking.map((list)=>(
//                  <Card
//            title={list.title}
//            landmark={list.landmark}
//            city={list.city}
//            image1={list.image1}
//            image2={list.image2}
//            image3={list.image3}
//            rent={list.rent}
//            ratings={list.ratings}
//            id={list._id}
//             isBooked={list.isBooked}
//            host={list.host}
//          />
         
//                 ))}
//       </div>
//     </div>
   
//   )
// }

// export default MyBooking


// import React, { useContext } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../context/userContext";
// import { bookingDataContext } from "../context/BookingContext";
// import Card from "../component/card";

// const MyBooking = () => {
//   const navigate = useNavigate();
//   const { userData } = useContext(userDataContext);
//   const { bookingData } = useContext(bookingDataContext);

//   const bookings = userData?.booking || bookingData || [];

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-black
//       text-white px-4 py-10"
//     >
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/")}
//         className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20
//         flex items-center justify-center backdrop-blur transition"
//       >
//         <FaArrowLeftLong />
//       </button>

//       {/* Header */}
//       <div className="mt-8 mb-12 text-center">
//         <h1 className="text-3xl font-semibold">My Bookings</h1>
//         <p className="text-gray-400 mt-1">
//           View and manage your booked stays
//         </p>
//       </div>

//       {/* Booking Cards */}
//       {bookings.length > 0 ? (
//         <div
//           className="grid gap-6 justify-items-center
//           grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//         >
//           {bookings.map((list) => (
//             <Card
//               key={list._id}
//               title={list.title}
//               landmark={list.landmark}
//               city={list.city}
//               image1={list.image1}
//               image2={list.image2}
//               image3={list.image3}
//               rent={list.rent}
//               ratings={list.ratings}
//               id={list._id}
//               isBooked={list.isBooked}
//               host={list.host}
//             />
//           ))}
//         </div>
//       ) : (
//         /* Empty State */
//         <div className="flex flex-col items-center justify-center mt-32">
//           <p className="text-xl font-medium">No bookings yet</p>
//           <p className="text-gray-400 mt-2">
//             Start exploring stays and book your first trip
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="mt-6 px-8 py-3 rounded-2xl
//             bg-gradient-to-r from-orange-500 to-pink-500
//             font-semibold hover:scale-[1.03] transition"
//           >
//             Explore Listings
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBooking;



import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import { bookingDataContext } from "../context/BookingContext";
import Card from "../component/card";

const MyBooking = () => {
  const navigate = useNavigate();
  const { userData } = useContext(userDataContext);
  const { bookingData } = useContext(bookingDataContext);

  const bookings = userData?.booking || bookingData || [];

  return (
    <div
      className="min-h-screen px-4 py-10 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="w-11 h-11 rounded-full flex items-center justify-center
        transition hover:scale-105"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <FaArrowLeftLong />
      </button>

      {/* Header */}
      <div className="mt-8 mb-12 text-center">
        <h1 className="text-3xl font-semibold">
          My Bookings
        </h1>
        <p className="opacity-70 mt-1">
          View and manage your booked stays
        </p>
      </div>

      {/* Booking Cards */}
      {bookings.length > 0 ? (
        <div
          className="grid gap-6 justify-items-center
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {bookings.map((list) => (
            <Card
              key={list._id}
              title={list.title}
              landmark={list.landmark}
              city={list.city}
              image1={list.image1}
              image2={list.image2}
              image3={list.image3}
              rent={list.rent}
              ratings={list.ratings}
              id={list._id}
              isBooked={list.isBooked}
              host={list.host}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center mt-32 text-center">
          <p className="text-xl font-medium">
            No bookings yet
          </p>
          <p className="opacity-70 mt-2">
            Start exploring stays and book your first trip
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-8 py-3 rounded-2xl font-semibold
            transition hover:scale-[1.03] text-white"
            style={{
              background:
                "linear-gradient(to right, #f97316, #ec4899)",
            }}
          >
            Explore Listings
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
