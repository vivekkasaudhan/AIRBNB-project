import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import Card from "../component/card";
import { bookingDataContext } from "../context/BookingContext";
const MyBooking = () => {
      let navigate = useNavigate();
      let {userData}=useContext(userDataContext);
      let {bookingData}=useContext(bookingDataContext);
  return (
     <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
      </div>

      <div className="w-[50%] h-[10%] border-[2px] border-[#908cc8] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[20px] md:w-[600px]">
        MY Booking
      </div>
      <div className="w-full h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]">
         {  userData.booking.map((list)=>(
                 <Card
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
    </div>
   
  )
}

export default MyBooking
