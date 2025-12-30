import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { authDataContext } from "./AuthContext";
import { userDataContext } from "./userContext";
import { listingDataContext } from "./ListingContext";
import { useNavigate } from "react-router-dom";
export const bookingDataContext = createContext();
const BookingContext = ({ children }) => {
  let [checkIn, setCheckIn] = useState("");
  let [checkOut, setCheckOut] = useState("");
  let [total, setTotal] = useState(0);
  let [night, setNight] = useState(0);
  let {serverUrl}=useContext(authDataContext);
  let {getCurrentUser}=useContext(userDataContext);
  let { getListing}=useContext(listingDataContext);
  let [bookingData,setBookingData]=useState([])
  let [booking,setBooking]=useState(false);
  let navigate=useNavigate();
   const handleBooking=async(id)=>{
    setBooking(true);
          try {
            let result=await axios.post(serverUrl+`/api/booking/create/${id}`,{
            checkIn,checkOut,totalRent:total,
          },{withCredentials:true})
           await getCurrentUser();
           await getListing();
           setBookingData(result.data)
           console.log(result.data);
           setBooking(false);
           navigate("/booked");
           
          } catch (error) {
            console.log(error);
            setBookingData(null)
            setBooking(false);
            
          }
    }
    const cancelBooking=async(id)=>{
       try {
            let result=await axios.delete(serverUrl+`/api/booking/cancel/${id}`,{withCredentials:true})
           await getCurrentUser();
           await getListing();
          
           console.log(result.data);
           
          } catch (error) {
            console.log(error);
           
            
          }
    }
  let value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    handleBooking,
    bookingData,setBookingData,cancelBooking,booking
  };

  
  return (
    <div>
      <bookingDataContext.Provider value={value}>
        {children}
      </bookingDataContext.Provider>
    </div>
  );
};

export default BookingContext;
