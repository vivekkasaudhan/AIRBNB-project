import { useContext, useState } from "react";
import { listingDataContext } from "../context/ListingContext";
import { bookingDataContext } from "../context/BookingContext";

const PaymentMethod = () => {
  const [paymentType, setPaymentType] = useState("");
 const{cardDetails} =useContext(listingDataContext)
 const{ handleBooking,booking}=useContext(bookingDataContext);

  return (
    <div
      className="p-5 rounded-3xl border mt-6"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      <h2 className="text-lg font-semibold mb-4">
        Choose payment method
      </h2>

      <div className="space-y-4">

        {/* PAY NOW */}
        <div
          onClick={() => {setPaymentType("paynow")}}
          className={`cursor-pointer flex items-center justify-between
            px-5 py-4 rounded-2xl border transition
            ${
              paymentType === "paynow"
                ? "shadow-md"
                : ""
            }`}
          style={{
            background:
              paymentType === "paynow"
                ? "var(--bg)"
                : "var(--card)",
            borderColor:
              paymentType === "paynow"
                ? "orange"
                : "var(--border)",
          }}
        >
          <span className="font-medium">Pay now</span>

          {paymentType === "paynow" && (
            <span className="text-sm px-3 py-1 rounded-full
              bg-green-500 text-white">
              Recommended
            </span>
          )}
        </div>

        {/* PAY AT HOTEL */}
        <div
          onClick={() => setPaymentType("hotel")}
          className={`cursor-pointer flex items-center justify-between
            px-5 py-4 rounded-2xl border transition
            ${
              paymentType === "hotel"
                ? "shadow-md"
                : ""
            }`}
          style={{
            background:
              paymentType === "hotel"
                ? "var(--bg)"
                : "var(--card)",
            borderColor:
              paymentType === "hotel"
                ? "orange"
                : "var(--border)",
          }}
        >
          <span className="font-medium">Pay at hotel</span>

         
        </div>
          {paymentType === "hotel" && (
             <button
            onClick={() =>handleBooking(cardDetails._id) }
            disabled={booking}
            className={`w-full mt-4 py-3 rounded-xl text-white font-semibold transition
              ${
                booking
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
              }`}
          >
            {booking ? "Booking..." : "Book Now"}
          </button>
          )}

          {paymentType === "1" && (
             <button
            // onClick={() =>handleBooking(cardDetails._id) }
            disabled={booking}
            className={`w-full mt-4 py-3 rounded-xl text-white font-semibold transition
              ${
                booking
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
              }`}
          >
            {booking ? "Booking..." : "Book Now"}
          </button>
          )}
      </div>
    </div>
  );
};

export default PaymentMethod;
