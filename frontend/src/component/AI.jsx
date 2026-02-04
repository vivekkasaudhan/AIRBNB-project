


import React, { useContext, useRef } from "react";
import ai from "../assets/aim.webp";
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
        transcript.includes("open home")||
         transcript.includes("open main page")
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

         /* 📖 add my hotel */
      if (
        transcript.includes("add hotel") ||
        transcript.includes("add hotal") ||
        transcript.includes("add my hotel")||
        transcript.includes("add listing") ||
        transcript.includes("add my listing") ||
        transcript.includes("upload hotel") ||
        transcript.includes("upload my hotal") 
      ) {
        speak("openning the page now you can upload your hotel");
        navigate("/listingpage1");
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


