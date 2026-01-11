// import React, { useContext } from "react";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";

// const ListingPage3 = () => {
//   let {
//     title,
//     setTitle,
//     description,
//     setDescription,
//     frontEndImage1,
//     setFrontEndImage1,
//     frontEndImage2,
//     setFrontEndImage2,
//     frontEndImage3,
//     setFrontEndImage3,
//     backEndImage1,
//     setBackEndImage1,
//     backEndImage2,
//     setBackEndImage2,
//     backEndImage3,
//     setBackEndImage3,
//     rent,
//     setRent,
//     city,
//     setCity,
//     landmark,
//     setLandmark,
//     category,
//     setCategory,
//     handleAddListing,
//     adding,setAdding
//   } = useContext(listingDataContext);
//   let navigate = useNavigate();
//   return (
//     <div className="w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
//       <div
//         className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center"
//         onClick={() => navigate(`/listingpage2`)}
//       >
//         {/* <FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /> */}B
//       </div>
     
//       {/* <div
//           className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px]"
//         >{`${city.toUpperCase()} `}</div> */}

//       <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row">
//         <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
//           <img src={frontEndImage1} alt="" className="w-[100%] object-cover" />
//         </div>

//         <div className="w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col overflow-hidden ">
//           <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
//             <img src={frontEndImage2} alt="" className="w-[100%]" />
//           </div>
//           <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
//             <img src={frontEndImage3} alt="" className="w-[100%]" />
//           </div>
//         </div>
//       </div>
//       <div
//           className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px]"
//         >{`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()}`}</div>


//         <div
//           className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px] text-gray-800"
//         >{`${description.toUpperCase()}`}</div>


//         <div
//           className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
//   md:text-[25px]"
//         >{`Rs.${rent}/day `}</div>
//         <div className="flex items-start justify-center ">
//         <button type="button" className="bg-amber-500 px-10 py-3 rounded-2xl cursor-pointer hover:bg-amber-400 text-white text-2xl" onClick={handleAddListing} disabled={adding}>{adding? "Adding...":"Add Listing"}</button>
//         </div>
//     </div>
//   );
// };

// export default ListingPage3;




// import React, { useContext } from "react";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

// const ListingPage3 = () => {
//   const {
//     title,
//     description,
//     frontEndImage1,
//     frontEndImage2,
//     frontEndImage3,
//     rent,
//     city,
//     landmark,
//     category,
//     handleAddListing,
//     adding,
//   } = useContext(listingDataContext);

//   const navigate = useNavigate();

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-black
//       text-white px-4 py-16"
//     >
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/listingpage2")}
//         className="fixed top-6 left-6 w-11 h-11 rounded-full
//         bg-white/10 hover:bg-white/20 backdrop-blur
//         flex items-center justify-center transition"
//       >
//         <FaArrowLeft />
//       </button>

//       {/* Container */}
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="mb-10 text-center">
//           <span className="text-sm tracking-widest uppercase text-orange-400">
//             Step 3 of 3
//           </span>
//           <h1 className="text-3xl md:text-4xl font-semibold mt-2">
//             Review & publish your listing
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Make sure everything looks good before publishing
//           </p>
//         </div>

//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//           <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-2xl">
//             <img
//               src={frontEndImage1}
//               alt="Main"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="grid grid-rows-2 gap-4">
//             <div className="rounded-3xl overflow-hidden shadow-xl">
//               <img
//                 src={frontEndImage2}
//                 alt="Second"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="rounded-3xl overflow-hidden shadow-xl">
//               <img
//                 src={frontEndImage3}
//                 alt="Third"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Info Card */}
//         <div
//           className="backdrop-blur-xl bg-white/10 border border-white/20
//           rounded-3xl p-8 shadow-2xl space-y-6"
//         >
//           {/* Title */}
//           <h2 className="text-2xl font-semibold">
//             {title}
//           </h2>

//           {/* Location */}
//           <div className="flex items-center gap-2 text-gray-300">
//             <FaMapMarkerAlt className="text-orange-400" />
//             <span>
//               {landmark}, {city} · {category}
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-gray-200 leading-relaxed">
//             {description}
//           </p>

//           {/* Price */}
//           <div className="text-xl font-semibold">
//             ₹{rent}
//             <span className="text-sm font-normal text-gray-400"> / day</span>
//           </div>
//         </div>

//         {/* Publish CTA */}
//         <div className="flex justify-center mt-12">
//           <button
//             onClick={handleAddListing}
//             disabled={adding}
//             className={`
//               px-12 py-4 rounded-2xl text-lg font-semibold transition
//               ${
//                 adding
//                   ? "bg-white/20 text-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.03] shadow-2xl"
//               }
//             `}
//           >
//             {adding ? "Publishing..." : "Publish Listing"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingPage3;

import React, { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const ListingPage3 = () => {
  const {
    title,
    description,
    frontEndImage1,
    frontEndImage2,
    frontEndImage3,
    rent,
    city,
    landmark,
    category,
    handleAddListing,
    adding,
  } = useContext(listingDataContext);

  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen px-4 py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/listingpage2")}
        className="fixed top-6 left-6 w-11 h-11 rounded-full
        flex items-center justify-center transition
        border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <FaArrowLeft />
      </button>

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm tracking-widest uppercase text-orange-500">
            Step 3 of 3
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">
            Review & publish your listing
          </h1>
          <p className="opacity-70 mt-2">
            Make sure everything looks good before publishing
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div
            className="md:col-span-2 rounded-3xl overflow-hidden shadow-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <img
              src={frontEndImage1}
              alt="Main"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-rows-2 gap-4">
            {[frontEndImage2, frontEndImage3].map((img, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-lg border"
                style={{ borderColor: "var(--border)" }}
              >
                <img
                  src={img}
                  alt={`Preview ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div
          className="rounded-3xl p-8 shadow-2xl space-y-6 border"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          {/* Location */}
          <div className="flex items-center gap-2 opacity-70">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>
              {landmark}, {city} · {category}
            </span>
          </div>

          {/* Description */}
          <p className="leading-relaxed opacity-80">
            {description}
          </p>

          {/* Price */}
          <div className="text-xl font-semibold">
            ₹{rent}
            <span className="text-sm font-normal opacity-60"> / day</span>
          </div>
        </div>

        {/* Publish CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleAddListing}
            disabled={adding}
            className="px-12 py-4 rounded-2xl text-lg font-semibold transition"
            style={{
              background: adding
                ? "var(--border)"
                : "linear-gradient(to right, #f97316, #ec4899)",
              color: adding ? "#9ca3af" : "#fff",
              cursor: adding ? "not-allowed" : "pointer",
            }}
          >
            {adding ? "Publishing..." : "Publish Listing"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPage3;
