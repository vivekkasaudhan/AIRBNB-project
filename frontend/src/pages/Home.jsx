// // import React, { useContext } from 'react'
// // import Nav from '../component/Nav'
// // import Card from '../component/card'
// // import { listingDataContext } from '../context/ListingContext'
// // const Home = () => {
// //   let {listingdata,setListingdata,newlistingdata}=useContext(listingDataContext)
// //   return (
// //     <div>
// //       <Nav/>
// //       <div className=' w-screen h=[77vh] flex items-center flex-wrap gap-x-4 gap-y-6 justify-center mt-[250px] md:mt-[180px] overflow-auto'>
// //      {  newlistingdata.map((list)=>(
// //         <Card
// //   title={list.title}
// //   landmark={list.landmark}
// //   city={list.city}
// //   image1={list.image1}
// //   image2={list.image2}
// //   image3={list.image3}
// //   rent={list.rent}
// //   id={list._id}
// //   ratings={list.ratings}
// //   isBooked={list.isBooked}
// //   host={list.host}
// // />

// //        ))}
       
// //       </div>
     
// //     </div>
// //   )
// // }

// // export default Home


// import React, { useContext } from "react";
// import Nav from "../component/Nav";
// import Card from "../component/card";
// import { listingDataContext } from "../context/ListingContext";

// const Home = () => {
//   const { newlistingdata } = useContext(listingDataContext);

//   return (
// <div className="
//   min-h-screen 
//   bg-gray-50 dark:bg-[#0b1220]
//   transition-colors duration-300
// ">
//       {/* Navbar */}
//       <Nav />

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
//         pt-[220px] md:pt-[180px] pb-20">

//         {/* Section Heading (Optional but Premium) */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
//             Explore stays
//           </h1>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Handpicked homes for your next stay
//           </p>
//         </div>

//         {/* Cards Grid */}
//         {newlistingdata?.length > 0 ? (
//           <div
//             className="grid gap-6 justify-items-center
//               grid-cols-1
//               sm:grid-cols-2
//               md:grid-cols-3
//               lg:grid-cols-4"
//           >
//             {newlistingdata.map((list) => (
//               <Card
//                 key={list._id}
//                 title={list.title}
//                 landmark={list.landmark}
//                 city={list.city}
//                 image1={list.image1}
//                 image2={list.image2}
//                 image3={list.image3}
//                 rent={list.rent}
//                 id={list._id}
//                 ratings={list.ratings}
//                 isBooked={list.isBooked}
//                 host={list.host}
//               />
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="h-[40vh] flex flex-col items-center justify-center text-center">
//             <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
//               No listings found
//             </p>
//             <p className="text-sm text-gray-500">
//               Try changing filters or search location
//             </p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Home;
// import React, { useContext } from "react";
// import Nav from "../component/Nav";
// import Card from "../component/card";
// import { listingDataContext } from "../context/ListingContext";

// const Home = () => {
//   const { newlistingdata } = useContext(listingDataContext);

//   return (
//     <div
//       className="min-h-screen transition-colors duration-300"
//       style={{
//         backgroundColor: "var(--bg)",
//         color: "var(--text)",
//       }}
//     >
//       {/* Navbar */}
//       <Nav />

//       {/* Main Content */}
//       <main
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
//         pt-[220px] md:pt-[180px] pb-20"
//       >
//         {/* Section Heading */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold">
//             Explore stays
//           </h1>
//           <p className="text-sm opacity-70">
//             Handpicked homes for your next stay
//           </p>
//         </div>

//         {/* Cards Grid */}
//         {newlistingdata?.length > 0 ? (
//           <div
//             className="grid gap-6 justify-items-center
//               grid-cols-1
//               sm:grid-cols-2
//               md:grid-cols-3
//               lg:grid-cols-4"
//           >
//             {newlistingdata.map((list) => (
//               <Card
//                 key={list._id}
//                 title={list.title}
//                 landmark={list.landmark}
//                 city={list.city}
//                 image1={list.image1}
//                 image2={list.image2}
//                 image3={list.image3}
//                 rent={list.rent}
//                 id={list._id}
//                 ratings={list.ratings}
//                 isBooked={list.isBooked}
//                 host={list.host}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="h-[40vh] flex flex-col items-center justify-center text-center">
//             <p className="text-lg font-medium">
//               No listings found
//             </p>
//             <p className="text-sm opacity-70">
//               Try changing filters or search location
//             </p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Home;


// import React, { useContext } from "react";
// import Nav from "../component/Nav";
// import Card from "../component/card";
// import { listingDataContext } from "../context/ListingContext";

// const Home = () => {
//   const { newlistingdata, searchData } = useContext(listingDataContext);

//   // 🔥 THIS LINE FIXES EVERYTHING
//   const dataToShow =
//     searchData && searchData.length > 0 ? searchData : newlistingdata;

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#0b1220]">
//       <Nav />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
//         pt-[220px] md:pt-[180px] pb-20">

//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
//             Explore stays
//           </h1>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Handpicked homes for your next stay
//           </p>
//         </div>

//         {dataToShow?.length > 0 ? (
//           <div
//             className="grid gap-6 justify-items-center
//               grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//           >
//             {dataToShow.map((list) => (
//               <Card
//                 key={list._id}
//                 title={list.title}
//                 landmark={list.landmark}
//                 city={list.city}
//                 image1={list.image1}
//                 image2={list.image2}
//                 image3={list.image3}
//                 rent={list.rent}
//                 id={list._id}
//                 ratings={list.ratings}
//                 isBooked={list.isBooked}
//                 host={list.host}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="h-[40vh] flex flex-col items-center justify-center">
//             <p className="text-lg text-gray-400">No results found</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Home;




// import React, { useContext } from "react";
// import Nav from "../component/Nav";
// import Card from "../component/card";
// import { listingDataContext } from "../context/ListingContext";

// const Home = () => {
//   const { newlistingdata, searchData } = useContext(listingDataContext);

//   // Search result priority
//   const dataToShow =
//     searchData && searchData.length > 0 ? searchData : newlistingdata;

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-white dark:bg-[#0b1220]
//         text-gray-900 dark:text-white
//         transition-colors duration-300
//       "
//     >
//       {/* Navbar */}
//       <Nav />

//       {/* Content */}
//       <main
//         className="
//           max-w-7xl mx-auto
//           px-4 sm:px-6 lg:px-10
//           pt-[220px] md:pt-[180px]
//           pb-20
//         "
//       >
//         {/* Heading */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold">
//             Explore stays
//           </h1>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Handpicked homes for your next stay
//           </p>
//         </div>

//         {/* Cards */}
//         {dataToShow?.length > 0 ? (
//           <div
//             className="
//               grid gap-6 justify-items-center
//               grid-cols-1
//               sm:grid-cols-2
//               md:grid-cols-3
//               lg:grid-cols-4
//             "
//           >
//             {/* {dataToShow.map((list) => (
//               <Card
//                 key={list._id}
//                 title={list.title}
//                 landmark={list.landmark}
//                 city={list.city}
//                 image1={list.image1}
//                 image2={list.image2}
//                 image3={list.image3}
//                 rent={list.rent}
//                 id={list._id}
//                 ratings={list.ratings}
//                 isBooked={list.isBooked}
//                 host={list.host}
//               />
//             ))} */}
//           </div>
//         ) : (
//           <div className="h-[40vh] flex flex-col items-center justify-center">
//             <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
//               No results found
//             </p>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               Try searching another location
//             </p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Home;




import React, { useContext } from "react";
import Nav from "../component/Nav";
import Card from "../component/card";
import { listingDataContext } from "../context/ListingContext";

const Home = () => {
  const { newlistingdata, searchData } = useContext(listingDataContext);

  // Search result priority
  const dataToShow =
    searchData && searchData.length > 0 ? searchData : newlistingdata;

  return (
    <div
      className="
        min-h-screen
        transition-colors duration-300
      "
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Navbar */}
      <Nav />

      {/* Content */}
      <main
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          pt-[220px] md:pt-[180px]
          pb-20
        "
      >
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            Explore stays
          </h1>
          <p className="text-sm opacity-70">
            Handpicked homes for your next stay
          </p>
        </div>

        {/* Cards */}
        {dataToShow?.length > 0 ? (
          <div
            className="
              grid gap-6 justify-items-center
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {dataToShow.map((list) => (
              <Card
                key={list._id}
                title={list.title}
                landmark={list.landmark}
                city={list.city}
                image1={list.image1}
                image2={list.image2}
                image3={list.image3}
                rent={list.rent}
                id={list._id}
                ratings={list.ratings}
                isBooked={list.isBooked}
                host={list.host}
              />
            ))}
          </div>
        ) : (
          <div className="h-[40vh] flex flex-col items-center justify-center">
            <p className="text-lg font-medium opacity-80">
              No results found
            </p>
            <p className="text-sm opacity-60">
              Try searching another location
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
