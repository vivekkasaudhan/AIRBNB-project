// import React, { useContext } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../context/userContext";
// import Card from "../component/card";

// const Mylisting = () => {
//   let navigate = useNavigate();
//   let {userData}=useContext(userDataContext);
//   return (
//     <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative">
//       <div
//         className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
//         onClick={() => navigate("/")}
//       >
//         <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
//       </div>

//       <div className="w-[50%] h-[10%] border-[2px] border-[#908cc8] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[20px] md:w-[600px]">
//         MY Listing
//       </div>
//       <div className="w-full h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]">
//          {  userData.listing.map((list)=>(
//                  <Card
//            title={list.title}
//            landmark={list.landmark}
//            city={list.city}
//            image1={list.image1}
//            image2={list.image2}
//            image3={list.image3}
//            ratings={list.ratings}
//            rent={list.rent}
//            id={list._id}
//            isBooked={list.isBooked}
//            host={list.host}
//          />
         
//                 ))}
//       </div>
//     </div>
//   );
// };

// export default Mylisting;



// import React, { useContext } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../context/userContext";
// import Card from "../component/card";

// const MyListing = () => {
//   const navigate = useNavigate();
//   const { userData } = useContext(userDataContext);

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-black
//       text-white px-4 py-10"
//     >
//       {/* Back */}
//       <button
//         onClick={() => navigate("/")}
//         className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20
//         flex items-center justify-center backdrop-blur transition"
//       >
//         <FaArrowLeftLong />
//       </button>

//       {/* Header */}
//       <div className="mt-8 mb-12 text-center">
//         <h1 className="text-3xl font-semibold">My Listings</h1>
//         <p className="text-gray-400 mt-1">
//           Manage and review your published properties
//         </p>
//       </div>

//       {/* Listings */}
//       {userData?.listing?.length > 0 ? (
//         <div
//           className="grid gap-6 justify-items-center
//           grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//         >
//           {userData.listing.map((list) => (
//             <Card
//               key={list._id}
//               title={list.title}
//               landmark={list.landmark}
//               city={list.city}
//               image1={list.image1}
//               image2={list.image2}
//               image3={list.image3}
//               ratings={list.ratings}
//               rent={list.rent}
//               id={list._id}
//               isBooked={list.isBooked}
//               host={list.host}
//             />
//           ))}
//         </div>
//       ) : (
//         /* Empty State */
//         <div className="flex flex-col items-center justify-center mt-32">
//           <p className="text-xl font-medium">No listings yet</p>
//           <p className="text-gray-400 mt-2">
//             Start hosting by adding your first property
//           </p>
//           <button
//             onClick={() => navigate("/listingpage1")}
//             className="mt-6 px-8 py-3 rounded-2xl
//             bg-gradient-to-r from-orange-500 to-pink-500
//             font-semibold hover:scale-[1.03] transition"
//           >
//             Add New Listing
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyListing;

import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import Card from "../component/card";

const MyListing = () => {
  const navigate = useNavigate();
  const { userData } = useContext(userDataContext);

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
          My Listings
        </h1>
        <p className="opacity-70 mt-1">
          Manage and review your published properties
        </p>
      </div>

      {/* Listings */}
      {userData?.listing?.length > 0 ? (
        <div
          className="grid gap-6 justify-items-center
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {userData.listing.map((list) => (
            <Card
              key={list._id}
              title={list.title}
              landmark={list.landmark}
              city={list.city}
              image1={list.image1}
              image2={list.image2}
              image3={list.image3}
              ratings={list.ratings}
              rent={list.rent}
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
            No listings yet
          </p>
          <p className="opacity-70 mt-2">
            Start hosting by adding your first property
          </p>

          <button
            onClick={() => navigate("/listingpage1")}
            className="mt-6 px-8 py-3 rounded-2xl font-semibold
            transition hover:scale-[1.03] text-white"
            style={{
              background:
                "linear-gradient(to right, #f97316, #ec4899)",
            }}
          >
            Add New Listing
          </button>
        </div>
      )}
    </div>
  );
};

export default MyListing;
