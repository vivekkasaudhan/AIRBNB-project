// // import React from 'react'
// // import ai from "../assets/aip.jpeg"
// // import { useContext } from 'react'
// // import { listingDataContext } from '../context/ListingContext'
// // import { useNavigate } from 'react-router-dom'
// // import { toast } from 'react-toastify'
// // const AI = () => {
      
// //     let {handleSearch,searchData,setSearchData} =useContext(listingDataContext)
// //     let navigate=useNavigate();
    

// //     function speak(message){
// //         let utterence=new SpeechSynthesisUtterance(message)
// //         window.speechSynthesis.speak(utterence)
// //     }

// //     const speechRecognition=window.speechRecognition||window.webkitSpeechRecognition
// //     const recognition=new speechRecognition();
// //     if(!recognition){
// //         console.log("not supported");
        
// //     }
// //     recognition.onresult=(e)=>{
// //         const transcript=e.results[0][0].transcript.trim();
// //         if(transcript.toLowerCase().includes("my")&&transcript.toLowerCase().includes("open")
// //         &&transcript.toLowerCase().includes("listing"))
// //         {
// //            speak("opening my Listing")
// //            navigate("/mylisting");
// //         }
// //         else if(transcript.toLowerCase().includes("my")&&transcript.toLowerCase().includes("open")
// //         &&transcript.toLowerCase().includes("booking"))
// //         {
// //            speak("opening my booking")
// //            navigate("/mybooking");
// //         }
// //         else{
// //             toast.error("Try Again");
// //         }

        
// //     }
// //   return (
// //     <div className='fixed lg:bottom-[20px] md:bottom-[40px] left-[2%]'
// //     onClick={()=>recognition.start()}>
// //       <img src={ai} alt=""  className='w-[60px] cursor-pointer rounded-full '/>
// //     </div>
// //   )
// // }

// // export default AI



// import React, { useContext, useRef } from "react";
// import ai from "../assets/aip.jpeg";
// import { listingDataContext } from "../context/ListingContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AI = () => {
//   const { handleSearch } = useContext(listingDataContext);
//   const navigate = useNavigate();

//   /* 🔊 Speak helper */
//   const speak = (message) => {
//     window.speechSynthesis.cancel(); // stop previous speech
//     const utterance = new SpeechSynthesisUtterance(message);
//     utterance.rate = 1;
//     utterance.pitch = 1;
//     window.speechSynthesis.speak(utterance);
//   };

//   /* 🎤 Speech Recognition */
//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   if (!SpeechRecognition) {
//     console.log("Speech Recognition not supported");
//     return null;
//   }

//   const recognitionRef = useRef(null);

//   if (!recognitionRef.current) {
//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => {
//       speak("Listening");
//     };

//     recognition.onerror = () => {
//       speak("Sorry, I did not understand");
//     };

//     recognition.onresult = (e) => {
//       const transcript = e.results[0][0].transcript.toLowerCase().trim();
//       console.log("🎤 Voice:", transcript);

//       if (
//         transcript.includes("open") &&
//         transcript.includes("my") &&
//         transcript.includes("listing")
//       ) {
//         speak("Opening my listings");
//         navigate("/mylisting");
//         return;
//       }

//       if (
//         transcript.includes("open") &&
//         transcript.includes("my") &&
//         transcript.includes("booking")
//       ) {
//         speak("Opening my bookings");
//         navigate("/mybooking");
//         return;
//       }

//       if (
//         transcript.includes("open") &&
//         transcript.includes("Home") &&
//         transcript.includes("page")
//       ) {
//         speak("Opening Home Page");
//         navigate("/");
//         return;
//       }
//       if (
//         transcript.includes("logout") &&
//         transcript.includes("seesion") &&
//         transcript.includes("laagout")
//       ) {
//         speak("Logout Session");
//         navigate("/logout");
//         return;
//       }

//       speak("Command not recognized. Please try again.");
//     };

//     recognitionRef.current = recognition;
//   }

//   return (
//     <div
//       className="fixed bottom-6 left-4 z-[1000] cursor-pointer"
//       onClick={() => recognitionRef.current.start()}
//     >
//       <img
//         src={ai}
//         alt="AI Assistant"
//         className="
//           w-[60px] h-[60px]
//           rounded-full
//           shadow-xl
//           hover:scale-110
//           transition
//           border-2 border-orange-400
//         "
//       />
//     </div>
//   );
// };

// export default AI;


import React, { useContext, useRef } from "react";
import ai from "../assets/aip.jpeg";
import { listingDataContext } from "../context/ListingContext";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AI = () => {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const { setuserData } = useContext(userDataContext);

  /* 🔊 Speak helper */
  const speak = (message) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  /* 🎤 Speech Recognition */
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Speech Recognition not supported");
    return null;
  }

  const recognitionRef = useRef(null);

  if (!recognitionRef.current) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.onstart = () => {
      speak("Listening");
    };

    recognition.onerror = () => {
      speak("Sorry, I did not understand");
    };

    recognition.onresult = async (e) => {
      const transcript = e.results[0][0].transcript
        .toLowerCase()
        .trim();

      console.log("🎤 Voice:", transcript);

      /* 🏠 HOME */
      if (
        transcript.includes("home") ||
        transcript.includes("go home") ||
        transcript.includes("open home")
      ) {
        speak("Opening home page");
        navigate("/");
        return;
      }

      /* 📋 MY LISTING */
      if (
        transcript.includes("open") &&
        transcript.includes("my") &&
        transcript.includes("listing")
      ) {
        speak("Opening my listings");
        navigate("/mylisting");
        return;
      }

      /* 📖 MY BOOKING */
      if (
        transcript.includes("open") &&
        transcript.includes("my") &&
        transcript.includes("booking")
      ) {
        speak("Opening my bookings");
        navigate("/mybooking");
        return;
      }

      /* 🚪 LOGOUT */
      if (
        transcript.includes("logout") ||
        transcript.includes("log out") ||
        transcript.includes("sign out")
      ) {
        speak("your session is logout");
        await axios.post(
          serverUrl + "/api/auth/logout",
          {},
          { withCredentials: true }
        );
        setuserData(null);
        navigate("/login");
        return;
      }

      /* 🔍 VOICE SEARCH */
/* 🔍 SEARCH */
if (transcript.includes("search")) {
  // remove common filler words
  let query = transcript
    .replace("search", "")
    .replace("for", "")
    .replace("hotel", "hotel") // keeps word but cleans spacing
    .trim();

  if (query.length === 0) {
    speak("Please say what you want to search");
    return;
  }

  speak(`Searching for ${query}`);
  await handleSearch(query);
  navigate("/");
  return;
}



      speak("Command not recognized. Please try again.");
    };

    recognitionRef.current = recognition;
  }

  return (
    <div
      className="fixed bottom-6 left-4 z-[1000] cursor-pointer"
      onClick={() => recognitionRef.current.start()}
    >
      <img
        src={ai}
        alt="AI Assistant"
        className="
          w-[60px] h-[60px]
          rounded-full
          shadow-xl
          hover:scale-110
          transition
          border-2 border-orange-400
        "
      />
    </div>
  );
};

export default AI;
