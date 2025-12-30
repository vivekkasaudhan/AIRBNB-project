import React, { useEffect } from "react";
import { useContext } from "react";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { bookingDataContext } from "../context/BookingContext";

const ViewCard = () => {
  let navigate = useNavigate();
  let { cardDetails } = useContext(listingDataContext);
  let { userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let { updating, setUpdating, deleting, setDeleting } =
    useContext(listingDataContext);

  let {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    handleBooking,booking
  } = useContext(bookingDataContext);

  let [updatepopup, setUpdatepopup] = useState(false);
  let [bookingpopup, setBookingpopup] = useState(false);
  let [title, setTitle] = useState(cardDetails.title);
  let [description, setDescription] = useState(cardDetails.description);
  let [backEndImage1, setBackEndImage1] = useState(cardDetails.backEndImage1);
  let [backEndImage2, setBackEndImage2] = useState(cardDetails.backEndImage2);
  let [backEndImage3, setBackEndImage3] = useState(cardDetails.backEndImage3);
  let [rent, setRent] = useState(cardDetails.rent);
  let [city, setCity] = useState(cardDetails.city);
  let [landmark, setLandmark] = useState(cardDetails.landmark);
  let [minDate, setMinDate] = useState();

  
  const handleUpdateListing = async () => {
    setUpdating(true);
    try {
      let formData = new FormData();

      formData.append("title", title);
      if (backEndImage1) {
        formData.append("image1", backEndImage1);
      }
      if (backEndImage2) {
        formData.append("image2", backEndImage2);
      }
      if (backEndImage3) {
        formData.append("image3", backEndImage3);
      }
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);

      let result = await axios.post(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        {
          withCredentials: true,
        }
      );
      setUpdating(false);
      console.log(result);
    toast.success("update Listing Successfully");
      navigate("/");
      setTitle("");
      setDescription("");

      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      setRent("");
      setCity("");
      setLandmark("");
    } catch (error) {
      setUpdating(false);
      console.log(error);
       toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  useEffect(() => {
    if (checkIn && checkOut) {
      let inDate = new Date(checkIn);
      let OutDate = new Date(checkOut);
      let n = (OutDate - inDate) / (24 * 60 * 60 * 1000);
      setNight(n);
      let airBnbCharge = cardDetails.rent * (7 / 100);
      let tax = cardDetails.rent * (7 / 100);
      if (n > 0) {
        setTotal(cardDetails.rent * n + airBnbCharge + tax);
      } else {
        setTotal(0);
      }
    }
  }, [checkIn, checkOut, cardDetails.rent, total]);


   
  const handleDeleteListing = async () => {
    setDeleting(true);
    try {
      let result = await axios.delete(
        serverUrl + `/api/listing/delete/${cardDetails._id}`,
        { withCredentials: true }
      );
      setDeleting(false);
      console.log(result.data);
      navigate("/");
    } catch (error) {
      setDeleting(false);
      console.log(error);
    }
  };

  const handleimage1 = (e) => {
    let file = e.target.files[0];
    setBackEndImage1(file);
  };

  const handleimage2 = (e) => {
    let file = e.target.files[0];
    setBackEndImage2(file);
  };

  const handleimage3 = (e) => {
    let file = e.target.files[0];
    setBackEndImage3(file);
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[2%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate(`/`)}
      >
        <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
      </div>

      <div
        className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px]"
      >{`${cardDetails.city.toUpperCase()} `}</div>

      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row">
        <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
          <img
            src={cardDetails.image1}
            alt=""
            className="w-[100%] object-cover"
          />
        </div>

        <div className="w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col overflow-hidden ">
          <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
            <img src={cardDetails.image2} alt="" className="w-[100%]" />
          </div>
          <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[black]">
            <img src={cardDetails.image3} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>
      <div
        className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px]"
      >{`${cardDetails.title.toUpperCase()} ${cardDetails.category.toUpperCase()}, ${cardDetails.landmark.toUpperCase()}`}</div>

      <div
        className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px] text-gray-800"
      >{`${cardDetails.description.toUpperCase()}`}</div>

      <div
        className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%]
  md:text-[25px]"
      >{`Rs.${cardDetails.rent}/day `}</div>
      <div className="flex items-start justify-center ">
        {cardDetails.host == userData._id && (
          <button
            type="button"
            className="bg-amber-500 px-10 py-3 rounded-2xl cursor-pointer hover:bg-amber-400 text-white text-2xl text-nowrap"
            onClick={() => setUpdatepopup((prev) => !prev)}
          >
            Edit listing
          </button>
        )}
        {cardDetails.host != userData._id && (
          <button
            type="button"
            className="bg-amber-500 px-10 py-3 rounded-2xl cursor-pointer hover:bg-amber-400 text-white text-2xl text-nowrap"
            onClick={() => setBookingpopup((prev) => !prev)}
          >
            Reserve
          </button>
        )}
      </div>

      {/* updatelistingpage */}
      {updatepopup && (
        <div className="w-[100%] h-[100%] flex items-center justify-center bg-[#000000a9] absolute top-[0px] z-[100] backdrop-blur-sm">
          <RxCross2
            className="w-[40px] h-[40px] text-white  cursor-pointer absolute top-[2%] left-[20px] rounded-[50%] flex items-center justify-center"
            onClick={() => {
              setUpdatepopup(false);
            }}
          />

          <form
            className="mt-32 sm:p-10 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-screen flex flex-col gap-y-4 overflow-auto bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            {/* Title */}
            <div className="flex flex-col text-base sm:text-xl">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col text-base sm:text-xl">
              <label>Description</label>
              <textarea
                className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 resize-none h-24"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
                onChange={handleimage1}
              />
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
                onChange={handleimage2}
              />
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
                onChange={handleimage3}
              />
            </div>

            {/* Rent */}
            <div className="flex flex-col text-base sm:text-xl">
              <label>Rent</label>
              <input
                type="text"
                className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
                required
                onChange={(e) => setRent(e.target.value)}
                value={rent}
              />
            </div>

            {/* City */}
            <div className="flex flex-col text-base sm:text-xl">
              <label>City</label>
              <input
                type="text"
                className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
                required
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            {/* Landmark */}
            <div className="flex flex-col text-base sm:text-xl">
              <label>Landmark</label>
              <input
                type="text"
                className="border-2 border-gray-800 rounded-sm w-full sm:w-[80%] px-3 py-1"
                required
                onChange={(e) => setLandmark(e.target.value)}
                value={landmark}
              />
            </div>

            {/* Button */}

            <div className="flex justify-around ">
              <button
                className="mt-4   px-4 py-2 rounded-xl bg-orange-400 text-white  sm:w-36 hover:bg-amber-500 text-nowrap cursor-pointer"
                onClick={handleUpdateListing}
                disabled={updating}
              >
                {updating ? "updating..." : "Update Listing"}
              </button>
              <button
                className="mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white w-full sm:w-36 hover:bg-amber-500 text-nowrap cursor-pointer"
                disabled={deleting}
                onClick={handleDeleteListing}
              >
                {deleting ? "deleting..." : "Delete Listing"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* BOOking popup */}

      {bookingpopup && (
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
      )}
    </div>
  );
};

export default ViewCard;
