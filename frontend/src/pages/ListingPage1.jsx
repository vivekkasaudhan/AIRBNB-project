
// import React, { useContext } from "react";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";

// const ListingPage1 = () => {

// let {   title,
//       setTitle,
//       description,
//       setDescription,
//       frontEndImage1,
//       setFrontEndImage1,
//       frontEndImage2,
//       setFrontEndImage2,
//       frontEndImage3,
//       setFrontEndImage3,
//       backEndImage1,
//       setBackEndImage1,
//       backEndImage2,
//       setBackEndImage2,
//       backEndImage3,
//       setBackEndImage3,
//       rent,
//       setRent,
//       city,
//       setCity,
//       landmark,
//       setLandmark,
//       category,
//       setCategory,}=useContext(listingDataContext);

      
//      const handleimage1=(e)=>{
//       let file=e.target.files[0];
//       setBackEndImage1(file);
//       setFrontEndImage1(URL.createObjectURL(file));
//      }

//      const handleimage2=(e)=>{
//       let file=e.target.files[0];
//       setBackEndImage2(file);
//       setFrontEndImage2(URL.createObjectURL(file));
//      }

//      const handleimage3=(e)=>{
//       let file=e.target.files[0];
//       setBackEndImage3(file);
//       setFrontEndImage3(URL.createObjectURL(file));
//      }
//      let navigate=useNavigate();

//   return (
//     <div className="w-screen h-screen flex items-center justify-center border-2 overflow-auto relative px-4 ">
      
//       {/* Top Button */}
//       <div className="w-[180px] h-[45px] text-[18px] bg-amber-500 text-white flex items-center justify-center rounded-full absolute top-4 right-4 shadow-lg">
//         SetUp Your Home
//       </div>

//       <form className="mt-32 sm:p-10 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-screen flex flex-col gap-y-4 overflow-auto bg-white"
//       onSubmit={(e)=>{e.preventDefault(); navigate("/listingpage2") }}>

//         {/* Title */}
//         <div className="flex flex-col text-base sm:text-xl">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//             required onChange={(e)=>setTitle(e.target.value)} value={title}
//           />
//         </div>

//         {/* Description */}
//         <div className="flex flex-col text-base sm:text-xl">
//           <label>Description</label>
//           <textarea
//             className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 resize-none h-24"
//             required onChange={(e)=>setDescription(e.target.value)} value={description}
//           ></textarea>
//         </div>

//         {/* Image 1 */}
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">
//             Add Image 1
//           </label>
//           <input
//             type="file"
//             className="block w-full sm:w-[80%] text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-lg file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-amber-500
//               hover:file:bg-blue-100"
//           onChange={handleimage1}/>
//         </div>

//         {/* Image 2 */}
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">
//             Add Image 2
//           </label>
//           <input
//             type="file"
//             className="block w-full sm:w-[80%] text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-lg file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-amber-500
//               hover:file:bg-blue-100"
//          onChange={handleimage2} />
//         </div>

//         {/* Image 3 */}
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">
//             Add Image 3
//           </label>
//           <input
//             type="file"
//             className="block w-full sm:w-[80%] text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-lg file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-amber-500
//               hover:file:bg-blue-100"
//          onChange={handleimage3} />
//         </div>

//         {/* Rent */}
//         <div className="flex flex-col text-base sm:text-xl">
//           <label>Rent</label>
//           <input
//             type="text"
//             className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//             required onChange={(e)=>setRent(e.target.value)} value={rent}
//           />
//         </div>

//         {/* City */}
//         <div className="flex flex-col text-base sm:text-xl">
//           <label>City</label>
//           <input
//             type="text"
//             className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//             required onChange={(e)=>setCity(e.target.value)} value={city}
//           />
//         </div>

//         {/* Landmark */}
//         <div className="flex flex-col text-base sm:text-xl">
//           <label>Landmark</label>
//           <input
//             type="text"
//             className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
//             required onChange={(e)=>setLandmark(e.target.value)} value={landmark}
//           />
//         </div>

//         {/* Button */}
//         <button className="mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-24 hover:bg-amber-500">
//           Next
//         </button>

//       </form>
//     </div>
//   );
// };

// export default ListingPage1;


// import React, { useContext } from "react";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";
// import { FaCloudUploadAlt } from "react-icons/fa";

// const ListingPage1 = () => {
//   const {
//     title, setTitle,
//     description, setDescription,
//     setFrontEndImage1, setBackEndImage1,
//     setFrontEndImage2, setBackEndImage2,
//     setFrontEndImage3, setBackEndImage3,
//     rent, setRent,
//     city, setCity,
//     landmark, setLandmark,
//   } = useContext(listingDataContext);

//   const navigate = useNavigate();



  
//   const handleImage = (e, setBackend, setFrontend) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setBackend(file);
//     setFrontend(URL.createObjectURL(file));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-black
//       flex justify-center px-4 py-20">

//       {/* Glass Card */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           navigate("/listingpage2");
//         }}
//         className="w-full max-w-3xl
//         backdrop-blur-xl bg-white/10
//         border border-white/20
//         rounded-3xl shadow-2xl
//         p-8 sm:p-12 space-y-8 text-white"
//       >
//         {/* Header */}
//         <div>
//           <span className="text-sm uppercase tracking-widest text-orange-400">
//             Step 1 of 3
//           </span>
//           <h1 className="text-3xl font-semibold mt-2">
//             Create your listing
//           </h1>
//           <p className="text-gray-300 mt-1">
//             Let’s start with the basics of your place
//           </p>
//         </div>

//         {/* Floating Input */}
//         <div className="relative">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="peer w-full bg-transparent border border-white/30
//               rounded-xl px-4 pt-6 pb-2 outline-none
//               focus:border-orange-400 transition"
//           />
//           <label className="absolute left-4 top-2 text-sm text-gray-400
//             peer-focus:text-orange-400 peer-focus:text-xs peer-focus:-top-2
//             transition-all">
//             Title
//           </label>
//         </div>

//         {/* Description */}
//         <div className="relative">
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="peer w-full bg-transparent border border-white/30
//               rounded-xl px-4 pt-6 pb-2 h-28 resize-none outline-none
//               focus:border-orange-400 transition"
//           />
//           <label className="absolute left-4 top-2 text-sm text-gray-400
//             peer-focus:text-orange-400 peer-focus:text-xs peer-focus:-top-2
//             transition-all">
//             Description
//           </label>
//         </div>

//         {/* Image Uploads */}
//         <div className="grid sm:grid-cols-3 gap-4">
//           {[1, 2, 3].map((i) => (
//             <label
//               key={i}
//               className="h-36 flex flex-col items-center justify-center
//               rounded-2xl border border-white/20
//               hover:border-orange-400 cursor-pointer
//               bg-white/5 transition group"
//             >
//               <FaCloudUploadAlt className="text-3xl text-orange-400 mb-2" />
//               <span className="text-sm text-gray-300">
//                 Upload Image {i}
//               </span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) =>
//                   handleImage(
//                     e,
//                     i === 1 ? setBackEndImage1 : i === 2 ? setBackEndImage2 : setBackEndImage3,
//                     i === 1 ? setFrontEndImage1 : i === 2 ? setFrontEndImage2 : setFrontEndImage3
//                   )
//                 }
//               />
//             </label>
//           ))}
//         </div>

//         {/* Grid Inputs */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           <div className="relative">
//             <input
//               value={rent}
//               onChange={(e) => setRent(e.target.value)}
//               required
//               className="peer w-full bg-transparent border border-white/30
//                 rounded-xl px-4 pt-6 pb-2 outline-none focus:border-orange-400"
//             />
//             <label className="floating-label">Rent / day</label>
//           </div>

//           <div className="relative">
//             <input
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//               className="peer w-full bg-transparent border border-white/30
//                 rounded-xl px-4 pt-6 pb-2 outline-none focus:border-orange-400"
//             />
//             <label className="floating-label">City</label>
//           </div>
//         </div>

//         <div className="relative">
//           <input
//             value={landmark}
//             onChange={(e) => setLandmark(e.target.value)}
//             required
//             className="peer w-full bg-transparent border border-white/30
//               rounded-xl px-4 pt-6 pb-2 outline-none focus:border-orange-400"
//           />
//           <label className="floating-label">Landmark</label>
//         </div>

//         {/* CTA */}
//         <button
//           type="submit"
//           className="w-full py-3 rounded-2xl
//           bg-gradient-to-r from-orange-500 to-pink-500
//           text-white font-semibold text-lg
//           hover:scale-[1.02] transition shadow-xl"
//         >
//           Continue →
//         </button>
//       </form>

//       {/* Floating label style */}
//       <style>{`
//         .floating-label {
//           position: absolute;
//           left: 1rem;
//           top: 0.5rem;
//           font-size: 0.75rem;
//           color: #fb923c;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ListingPage1;











// import React, { useContext, useState } from "react";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";
// import { FaCloudUploadAlt } from "react-icons/fa";

// const ListingPage1 = () => {
//   const {
//     title,
//     setTitle,
//     description,
//     setDescription,
//     setFrontEndImage1,
//     setBackEndImage1,
//     setFrontEndImage2,
//     setBackEndImage2,
//     setFrontEndImage3,
//     setBackEndImage3,
//     rent,
//     setRent,
//     city,
//     setCity,
//     landmark,
//     setLandmark,
//   } = useContext(listingDataContext);

//   const navigate = useNavigate();

//   // ✅ ONLY ADDITION (upload status)
//   const [uploaded, setUploaded] = useState({
//     img1: false,
//     img2: false,
//     img3: false,
//   });

//   const handleImage = (e, setBackend, setFrontend, key) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setBackend(file);
//     setFrontend(URL.createObjectURL(file));

//     // ✅ mark uploaded
//     setUploaded((prev) => ({ ...prev, [key]: true }));
//   };

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-black
//       flex justify-center px-4 py-20"
//     >
//       {/* Glass Card */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           navigate("/listingpage2");
//         }}
//         className="w-full max-w-3xl
//         backdrop-blur-xl bg-white/10
//         border border-white/20
//         rounded-3xl shadow-2xl
//         p-8 sm:p-12 space-y-8 text-white"
//       >
//         {/* Header */}
//         <div>
//           <span className="text-sm uppercase tracking-widest text-orange-400">
//             Step 1 of 3
//           </span>
//           <h1 className="text-3xl font-semibold mt-2">
//             Create your listing
//           </h1>
//           <p className="text-gray-300 mt-1">
//             Let’s start with the basics of your place
//           </p>
//         </div>

//         {/* Title */}
//         <div className="relative">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="peer w-full bg-transparent border border-white/30
//               rounded-xl px-4 pt-6 pb-2 outline-none
//               focus:border-orange-400 transition"
//           />
//           <label className="absolute left-4 top-2 text-sm text-gray-400
//             peer-focus:text-orange-400 peer-focus:text-xs peer-focus:-top-2
//             transition-all">
//             Title
//           </label>
//         </div>

//         {/* Description */}
//         <div className="relative">
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="peer w-full bg-transparent border border-white/30
//               rounded-xl px-4 pt-6 pb-2 h-28 resize-none outline-none
//               focus:border-orange-400 transition"
//           />
//           <label className="absolute left-4 top-2 text-sm text-gray-400
//             peer-focus:text-orange-400 peer-focus:text-xs peer-focus:-top-2
//             transition-all">
//             Description
//           </label>
//         </div>

//         {/* Image Uploads */}
//         <div className="grid sm:grid-cols-3 gap-4">
//           {[1, 2, 3].map((i) => (
//             <label
//               key={i}
//               className={`h-36 flex flex-col items-center justify-center
//                 rounded-2xl cursor-pointer transition
//                 border
//                 ${
//                   uploaded[`img${i}`]
//                     ? "border-green-400"
//                     : "border-white/20 hover:border-orange-400"
//                 }
//                 bg-white/5`}
//             >
//               <FaCloudUploadAlt className="text-3xl text-orange-400 mb-2" />

//               <span className="text-sm text-gray-300">
//                 {uploaded[`img${i}`] ? "Uploaded ✓" : `Upload Image ${i}`}
//               </span>

//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) =>
//                   handleImage(
//                     e,
//                     i === 1
//                       ? setBackEndImage1
//                       : i === 2
//                       ? setBackEndImage2
//                       : setBackEndImage3,
//                     i === 1
//                       ? setFrontEndImage1
//                       : i === 2
//                       ? setFrontEndImage2
//                       : setFrontEndImage3,
//                     `img${i}`
//                   )
//                 }
//               />
//             </label>
//           ))}
//         </div>

//         {/* Rent & City */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           <div className="relative">
//             <input
//               value={rent}
//               onChange={(e) => setRent(e.target.value)}
//               required
//               className="peer w-full bg-transparent border border-white/30
//                 rounded-xl px-4 pt-6 pb-2 outline-none focus:border-orange-400"
//             />
//             <label className="floating-label">Rent / day</label>
//           </div>

//           <div className="relative">
//             <input
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//               className="peer w-full bg-transparent border border-white/30
//                 rounded-xl px-4 pt-6 pb-2 outline-none focus:border-orange-400"
//             />
//             <label className="floating-label">City</label>
//           </div>
//         </div>

//         {/* Landmark */}
//         <div className="relative">
//           <input
//             value={landmark}
//             onChange={(e) => setLandmark(e.target.value)}
//             required
//             className="peer w-full bg-transparent border border-white/30
//               rounded-xl px-4 pt-6 pb-2 outline-none focus:border-orange-400"
//           />
//           <label className="floating-label">Landmark</label>
//         </div>

//         {/* CTA */}
//         <button
//           type="submit"
//           className="w-full py-3 rounded-2xl
//           bg-gradient-to-r from-orange-500 to-pink-500
//           text-white font-semibold text-lg
//           hover:scale-[1.02] transition shadow-xl"
//         >
//           Continue →
//         </button>
//       </form>

//       {/* Floating label style */}
//       <style>{`
//         .floating-label {
//           position: absolute;
//           left: 1rem;
//           top: 0.5rem;
//           font-size: 0.75rem;
//           color: #fb923c;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ListingPage1;













import React, { useContext, useState } from "react";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const ListingPage1 = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    setFrontEndImage1,
    setBackEndImage1,
    setFrontEndImage2,
    setBackEndImage2,
    setFrontEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
  } = useContext(listingDataContext);

  const navigate = useNavigate();

  /* ✅ upload status only */
  const [uploaded, setUploaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const handleImage = (e, setBackend, setFrontend, key) => {
    const file = e.target.files[0];
    if (!file) return;

    setBackend(file);
    setFrontend(URL.createObjectURL(file));

    setUploaded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div
      className="min-h-screen flex justify-center px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Card */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpage2");
        }}
        className="w-full max-w-3xl rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8
        transition-colors duration-300"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Header */}
        <div>
          <span className="text-sm uppercase tracking-widest text-orange-500">
            Step 1 of 3
          </span>
          <h1 className="text-3xl font-semibold mt-2">
            Create your listing
          </h1>
          <p style={{ opacity: 0.7 }} className="mt-1">
            Let’s start with the basics of your place
          </p>
        </div>

        {/* Title */}
        <div className="relative">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none transition"
            style={{ border: "1px solid var(--border)" }}
          />
          <label className="absolute left-4 top-2 text-sm opacity-60
            peer-focus:text-orange-500 peer-focus:text-xs peer-focus:-top-2 transition-all">
            Title
          </label>
        </div>

        {/* Description */}
        <div className="relative">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 h-28 resize-none outline-none transition"
            style={{ border: "1px solid var(--border)" }}
          />
          <label className="absolute left-4 top-2 text-sm opacity-60
            peer-focus:text-orange-500 peer-focus:text-xs peer-focus:-top-2 transition-all">
            Description
          </label>
        </div>

        {/* Image Uploads */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <label
              key={i}
              className="h-36 flex flex-col items-center justify-center rounded-2xl cursor-pointer transition"
              style={{
                border: uploaded[`img${i}`]
                  ? "2px solid #22c55e"
                  : "1px dashed var(--border)",
                backgroundColor: "rgba(0,0,0,0.03)",
              }}
            >
              <FaCloudUploadAlt className="text-3xl text-orange-500 mb-2" />
              <span className="text-sm opacity-70">
                {uploaded[`img${i}`] ? "Uploaded ✓" : `Upload Image ${i}`}
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleImage(
                    e,
                    i === 1
                      ? setBackEndImage1
                      : i === 2
                      ? setBackEndImage2
                      : setBackEndImage3,
                    i === 1
                      ? setFrontEndImage1
                      : i === 2
                      ? setFrontEndImage2
                      : setFrontEndImage3,
                    `img${i}`
                  )
                }
              />
            </label>
          ))}
        </div>

        {/* Rent & City */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              required
              className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none"
              style={{ border: "1px solid var(--border)" }}
            />
            <label className="absolute left-4 top-2 text-xs text-orange-500">
              Rent / day
            </label>
          </div>

          <div className="relative">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none"
              style={{ border: "1px solid var(--border)" }}
            />
            <label className="absolute left-4 top-2 text-xs text-orange-500">
              City
            </label>
          </div>
        </div>

        {/* Landmark */}
        <div className="relative">
          <input
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required
            className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none"
            style={{ border: "1px solid var(--border)" }}
          />
          <label className="absolute left-4 top-2 text-xs text-orange-500">
            Landmark
          </label>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full py-3 rounded-2xl text-white font-semibold text-lg
          transition hover:scale-[1.02]"
          style={{
            background: "linear-gradient(to right, #f97316, #ec4899)",
          }}
        >
          Continue →
        </button>
      </form>
    </div>
  );
};

export default ListingPage1;
