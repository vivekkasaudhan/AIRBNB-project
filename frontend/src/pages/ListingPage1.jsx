
import React, { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";

const ListingPage1 = () => {

let {   title,
      setTitle,
      description,
      setDescription,
      frontEndImage1,
      setFrontEndImage1,
      frontEndImage2,
      setFrontEndImage2,
      frontEndImage3,
      setFrontEndImage3,
      backEndImage1,
      setBackEndImage1,
      backEndImage2,
      setBackEndImage2,
      backEndImage3,
      setBackEndImage3,
      rent,
      setRent,
      city,
      setCity,
      landmark,
      setLandmark,
      category,
      setCategory,}=useContext(listingDataContext);

      
     const handleimage1=(e)=>{
      let file=e.target.files[0];
      setBackEndImage1(file);
      setFrontEndImage1(URL.createObjectURL(file));
     }

     const handleimage2=(e)=>{
      let file=e.target.files[0];
      setBackEndImage2(file);
      setFrontEndImage2(URL.createObjectURL(file));
     }

     const handleimage3=(e)=>{
      let file=e.target.files[0];
      setBackEndImage3(file);
      setFrontEndImage3(URL.createObjectURL(file));
     }
     let navigate=useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center border-2 overflow-auto relative px-4 ">
      
      {/* Top Button */}
      <div className="w-[180px] h-[45px] text-[18px] bg-amber-500 text-white flex items-center justify-center rounded-full absolute top-4 right-4 shadow-lg">
        SetUp Your Home
      </div>

      <form className="mt-32 sm:p-10 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-screen flex flex-col gap-y-4 overflow-auto bg-white"
      onSubmit={(e)=>{e.preventDefault(); navigate("/listingpage2") }}>

        {/* Title */}
        <div className="flex flex-col text-base sm:text-xl">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
            required onChange={(e)=>setTitle(e.target.value)} value={title}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col text-base sm:text-xl">
          <label>Description</label>
          <textarea
            className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 resize-none h-24"
            required onChange={(e)=>setDescription(e.target.value)} value={description}
          ></textarea>
        </div>

        {/* Image 1 */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Add Image 1
          </label>
          <input
            type="file"
            className="block w-full sm:w-[80%] text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-amber-500
              hover:file:bg-blue-100"
          onChange={handleimage1}/>
        </div>

        {/* Image 2 */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Add Image 2
          </label>
          <input
            type="file"
            className="block w-full sm:w-[80%] text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-amber-500
              hover:file:bg-blue-100"
         onChange={handleimage2} />
        </div>

        {/* Image 3 */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Add Image 3
          </label>
          <input
            type="file"
            className="block w-full sm:w-[80%] text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-amber-500
              hover:file:bg-blue-100"
         onChange={handleimage3} />
        </div>

        {/* Rent */}
        <div className="flex flex-col text-base sm:text-xl">
          <label>Rent</label>
          <input
            type="text"
            className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
            required onChange={(e)=>setRent(e.target.value)} value={rent}
          />
        </div>

        {/* City */}
        <div className="flex flex-col text-base sm:text-xl">
          <label>City</label>
          <input
            type="text"
            className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
            required onChange={(e)=>setCity(e.target.value)} value={city}
          />
        </div>

        {/* Landmark */}
        <div className="flex flex-col text-base sm:text-xl">
          <label>Landmark</label>
          <input
            type="text"
            className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
            required onChange={(e)=>setLandmark(e.target.value)} value={landmark}
          />
        </div>

        {/* Button */}
        <button className="mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-24 hover:bg-amber-500">
          Next
        </button>

      </form>
    </div>
  );
};

export default ListingPage1;

