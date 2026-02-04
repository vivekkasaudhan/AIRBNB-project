





import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";

import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/userContext";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { setuserData } = useContext(userDataContext);
  const { serverUrl, loading, setLoading } = useContext(authDataContext);

  const handleSignUP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );

      setuserData(result.data);
      toast.success("Signup Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Card */}
      <div
        className="w-[90%] max-w-md rounded-3xl shadow-2xl p-8 sm:p-10 border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">
            Create your account
          </h1>
          <p className="text-sm opacity-70 mt-1">
            Join Airbnb to start booking homes
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUP} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm font-medium opacity-80">
              Username
            </label>
            <div
              className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 border"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <MdPerson className="opacity-60 text-xl" />
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium opacity-80">
              Email
            </label>
            <div
              className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 border"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <MdEmail className="opacity-60 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium opacity-80">
              Password
            </label>
            <div
              className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 border"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <MdLock className="opacity-60 text-xl" />
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white transition"
            style={{
              background: loading
                ? "var(--border)"
                : "linear-gradient(to right, #f97316, #ec4899)",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm opacity-70 mt-6">
          Already have an account?{" "}
          <span
            className="text-orange-500 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
