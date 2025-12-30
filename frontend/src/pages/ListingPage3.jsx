import React, { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";

const ListingPage3 = () => {
  let {
    title,
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
    setCategory,
    handleAddListing,
    adding,setAdding
  } = useContext(listingDataContext);
  let navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate(`/listingpage2`)}
      >
        {/* <FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /> */}B
      </div>
     
      {/* <div
          className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px]"
        >{`${city.toUpperCase()} `}</div> */}

      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row">
        <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
          <img src={frontEndImage1} alt="" className="w-[100%] object-cover" />
        </div>

        <div className="w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col overflow-hidden ">
          <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
            <img src={frontEndImage2} alt="" className="w-[100%]" />
          </div>
          <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
            <img src={frontEndImage3} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>
      <div
          className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px]"
        >{`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()}`}</div>


        <div
          className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px] text-gray-800"
        >{`${description.toUpperCase()}`}</div>


        <div
          className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px]"
        >{`Rs.${rent}/day `}</div>
        <div className="flex items-start justify-center ">
        <button type="button" className="bg-amber-500 px-10 py-3 rounded-2xl cursor-pointer hover:bg-amber-400 text-white text-2xl" onClick={handleAddListing} disabled={adding}>{adding? "Adding...":"Add Listing"}</button>
        </div>
    </div>
  );
};

export default ListingPage3;
