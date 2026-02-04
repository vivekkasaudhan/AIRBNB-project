



import { useState, useContext, useRef } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { listingDataContext } from "../context/ListingContext";
import { FaMicrophone, FaSearch } from "react-icons/fa";

const AISearch = () => {
  const { serverUrl } = useContext(authDataContext);
  const { setSearchData } = useContext(listingDataContext);

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  /* 🔍 Unified AI Search */
  const handleSearch = async (text) => {
    const searchText = text ?? query;

    if (!searchText.trim()) {
      setSearchData([]);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${serverUrl}/api/ai/search`,
        { query: searchText },
        { withCredentials: true }
      );

      setSearchData(res.data.data);
    } catch (err) {
      console.error(err);
      alert("AI search failed");
    } finally {
      setLoading(false);
    }
  };

  /* 🎤 Voice Recognition */
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search not supported");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();

      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.continuous = true;

      recognition.onstart = () => setListening(true);

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          }
        }
        if (!transcript) return;

        transcript = transcript.toLowerCase().trim();
        recognition.stop();
        setListening(false);
        setQuery(transcript);
        handleSearch(transcript);
      };

      recognition.onerror = (e) => {
        if (e.error !== "no-speech") console.warn(e.error);
        setListening(false);
      };

      recognition.onend = () => setListening(false);

      recognitionRef.current = recognition;
    }

    try {
      recognitionRef.current.stop();
    } catch {}
    recognitionRef.current.start();
  };


  return (
  <div className="  w-full flex justify-center my-6 px-3">
    <div
      className="
        w-full max-w-3xl
        flex items-center gap-3
        px-4 py-2
        rounded-2xl
        border
        shadow-sm hover:shadow-lg
        transition-all duration-300
      "
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* 🔍 INPUT */}
      <input
        type="text"
        placeholder="Ask or speak: hotels under 3000 in delhi"
        className="
          flex-1 bg-transparent
          outline-none text-base
        "
        style={{
          color: "var(--text)",
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      {/* 🎤 MIC */}
      <button
        onClick={startListening}
        title="Voice search"
        className={`
          p-2 rounded-full
          border
          transition-all duration-300
          active:scale-95
          ${
            listening
              ? "bg-red-500 text-white animate-pulse"
              : "hover:opacity-80"
          }
        `}
        style={{
          borderColor: "var(--border)",
          backgroundColor: listening ? undefined : "var(--bg)",
          color: listening ? "#fff" : "var(--text)",
        }}
      >
        <FaMicrophone className="text-lg" 
        
        />
      </button>

      {/* 🔎 SEARCH */}
      <button
        onClick={() => handleSearch()}
        disabled={loading}
        className="
          px-4 py-2
          rounded-xl
          font-medium
          transition-all
          hover:scale-105
          disabled:opacity-60
        "
        
         style={{
          borderColor: "var(--border)",
          
          color: listening ? "#fff" : "var(--text)",
        }}
      >
        {loading ? "Searching..." : <FaSearch />}
      </button>
    </div>
  </div>
);

};

export default AISearch;
