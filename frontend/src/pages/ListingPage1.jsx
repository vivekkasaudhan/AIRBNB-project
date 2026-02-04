
import React, { useContext, useState } from "react";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const ListingPage1 = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    setFrontEndImage1,
    setBackEndImage1,
    setFrontEndImage2,
    setBackEndImage2,
    setFrontEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
  } = useContext(listingDataContext);

  const navigate = useNavigate();

  /* ✅ upload status only */
  const [uploaded, setUploaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const handleImage = (e, setBackend, setFrontend, key) => {
    const file = e.target.files[0];
    if (!file) return;

    setBackend(file);
    setFrontend(URL.createObjectURL(file));

    setUploaded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div
      className="min-h-screen flex justify-center px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Card */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpage2");
        }}
        className="w-full max-w-3xl rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8
        transition-colors duration-300"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Header */}
        <div>
          <span className="text-sm uppercase tracking-widest text-orange-500">
            Step 1 of 3
          </span>
          <h1 className="text-3xl font-semibold mt-2">
            Create your listing
          </h1>
          <p style={{ opacity: 0.7 }} className="mt-1">
            Let’s start with the basics of your place
          </p>
        </div>

        {/* Title */}
        <div className="relative">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none transition"
            style={{ border: "1px solid var(--border)" }}
          />
          <label className="absolute left-4 top-2 text-sm opacity-60
            peer-focus:text-orange-500 peer-focus:text-xs peer-focus:-top-2 transition-all">
            Title
          </label>
        </div>

        {/* Description */}
        <div className="relative">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 h-28 resize-none outline-none transition"
            style={{ border: "1px solid var(--border)" }}
          />
          <label className="absolute left-4 top-2 text-sm opacity-60
            peer-focus:text-orange-500 peer-focus:text-xs peer-focus:-top-2 transition-all">
            Description
          </label>
        </div>

        {/* Image Uploads */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <label
              key={i}
              className="h-36 flex flex-col items-center justify-center rounded-2xl cursor-pointer transition"
              style={{
                border: uploaded[`img${i}`]
                  ? "2px solid #22c55e"
                  : "1px dashed var(--border)",
                backgroundColor: "rgba(0,0,0,0.03)",
              }}
            >
              <FaCloudUploadAlt className="text-3xl text-orange-500 mb-2" />
              <span className="text-sm opacity-70">
                {uploaded[`img${i}`] ? "Uploaded ✓" : `Upload Image ${i}`}
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleImage(
                    e,
                    i === 1
                      ? setBackEndImage1
                      : i === 2
                      ? setBackEndImage2
                      : setBackEndImage3,
                    i === 1
                      ? setFrontEndImage1
                      : i === 2
                      ? setFrontEndImage2
                      : setFrontEndImage3,
                    `img${i}`
                  )
                }
              />
            </label>
          ))}
        </div>

        {/* Rent & City */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              required
              className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none"
              style={{ border: "1px solid var(--border)" }}
            />
            <label className="absolute left-4 top-2 text-xs text-orange-500">
              Rent / day
            </label>
          </div>

          <div className="relative">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none"
              style={{ border: "1px solid var(--border)" }}
            />
            <label className="absolute left-4 top-2 text-xs text-orange-500">
              City
            </label>
          </div>
        </div>

        {/* Landmark */}
        <div className="relative">
          <input
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required
            className="peer w-full bg-transparent rounded-xl px-4 pt-6 pb-2 outline-none"
            style={{ border: "1px solid var(--border)" }}
          />
          <label className="absolute left-4 top-2 text-xs text-orange-500">
            Landmark
          </label>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full py-3 rounded-2xl text-white font-semibold text-lg
          transition hover:scale-[1.02]"
          style={{
            background: "linear-gradient(to right, #f97316, #ec4899)",
          }}
        >
          Continue →
        </button>
      </form>
    </div>
  );
};

export default ListingPage1;
