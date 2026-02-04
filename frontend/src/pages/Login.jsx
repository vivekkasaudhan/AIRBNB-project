



import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/userContext";
import { MdEmail, MdLock } from "react-icons/md";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { setuserData } = useContext(userDataContext);
  const { serverUrl, loading, setLoading } = useContext(authDataContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      setuserData(result.data);
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
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
            Welcome back
          </h1>
          <p className="text-sm opacity-70 mt-1">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm opacity-70 mt-6">
          Don’t have an account?{" "}
          <span
            className="text-orange-500 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
