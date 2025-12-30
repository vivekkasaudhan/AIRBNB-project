import React, { useState } from 'react'
import { useContext } from 'react'
import { userDataContext } from '../context/userContext'
import { listingDataContext } from '../context/ListingContext';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { bookingDataContext } from '../context/BookingContext';
const Card = ({ title, landmark, image1, image2, image3, rent, city, id ,ratings,isBooked,host}) => {
  let navigate=useNavigate();
  let {userData}=useContext(userDataContext);
  let {handleViewCard}=useContext(listingDataContext);
  let [popUp,setPopup]=useState(false);
  let {cancelBooking}=useContext(bookingDataContext)

  const handleClick=()=>{
    if(userData)
    {
      handleViewCard(id); 
    }
    else navigate("/login");

  }
  return (
    <div className="w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer z-10 relative
     "
    onClick={()=>!isBooked?handleClick():null}>

     {isBooked&&<div className='absolute right-1 text-green-400 bg-gray-200 top-2 rounded-lg p-1 font-bold'><GiConfirmed className='inline-flex' />Booked</div>}
     {isBooked&&userData&& host==userData._id&&<div className='absolute right-1 text-red-400 bg-gray-200 top-15 rounded-lg p-1 font-bold' onClick={()=>setPopup(prev=>!prev)}><FcCancel className='inline-flex' />Cancel Booking</div>}

{popUp&&<div className="w-[300px] h-[100px] bg-[#ffffffdf] absolute top-[110px] left-[13px] rounded-lg">
  <div className="w-[100%] h-[50%] text-[#e2d2d] flex items-start justify-center rounded-lg overflow-auto text-[20px] p-[10px]">
    Booking Cancel
  </div>

  <div className="w-[100%] h-[50%] text-[18px] font-semibold flex items-start justify-center gap-[10px] text-[#986b6b]">
    Are you sure?
    <button className="px-[20px] bg-[red] text-[white] rounded-lg hover:bg-slate-600"
   onClick={()=>{setPopup(false),cancelBooking(id)}} >
      Yes
    </button>
    <button className="px-[10px] bg-[red] text-[white] rounded-lg hover:bg-slate-600"
    onClick={()=>setPopup(false)}>
      No
    </button>
  </div>
</div>}




      <div className="w-[100%] h-[67%] rounded-lg overflow-auto flex">
        <img src={image1} alt="" className="w-[100%] shrink-0" />
        <img src={image2} alt="" className="w-[100%] shrink-0" />
        <img src={image3} alt="" className="w-[100%] shrink-0" />
      </div>

      <div className='w-full h-[33%] py-[20px] flex flex-col gap-1 '>
           <div className='flex items-center justify-between text-[18px]'><span className='w-[80%] text-ellipsis overflow-hidden text-nowrap font-semibold text-amber-950'>{`In ${landmark.toUpperCase()},${city.toUpperCase()}`}</span>
           <span className='flex items-center justify-center gap-x-1'><FaStar className='text-amber-600'/>{ratings}/5</span>
           </div>
           <span className='w-[80%] text-ellipsis text-[15px] overflow-hidden text-nowrap '>{title.toUpperCase()}</span>
           <span className='w-[80%] text-ellipsis text-[15px] overflow-hidden text-nowrap text-amber-950 '>₹{rent}/day</span>
      </div>


    </div>
  )
}

export default Card
