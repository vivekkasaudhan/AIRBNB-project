// import axios from 'axios';
// import React from 'react'
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { authDataContext } from '../context/AuthContext';
// import { useState } from 'react';
// import { userDataContext } from '../context/userContext';

// const Login = () => {
//     let navigate=useNavigate();
//    const [email, setemail] = useState("")
//    const [password, setpassword] = useState("")

//    let {userData,setuserData}=useContext(userDataContext);


//    let {serverUrl,loading, setLoading}=useContext(authDataContext)
//     const handleLogin=async(e)=>{
//       setLoading(true);
//      try {
//        e.preventDefault();
//       let result=await axios.post(serverUrl+"/api/auth/login",{
//         email,password
//       },{withCredentials:true})

//       setuserData(result.data);
//       navigate("/");
//        toast.success("Login Successfully");
//       console.log(result);
//       setLoading(false);
//      } catch (error) {
//       setLoading(false);
//       console.log(error);
//        toast.error(error.response.data.message);
//      }

//     }
//   return (
//     <div>
//        <div className='w-screen h-screen flex  items-center justify-center border-2'>

//       <form 
//       onSubmit={handleLogin}
//       action=""
//       className='w-[50%] h-150 flex flex-col  justify-center  gap-y-2   '>
//         <div>
//             <h1 className='mb-8 text-xl'>Welcome To Airbnb</h1>
//         </div>


        
//         <div className='flex flex-col text-xl'> 
//             <label htmlFor="email">Email</label>
//             <input type="text" id='email'  className='border-2 border-gray-800 rounded-sm w-[60%]  px-3  ' value={email} onChange={(e)=>setemail(e.target.value)} required/>
//         </div>
//         <div className='flex flex-col text-xl'> 
//             <label htmlFor="password">Password</label>
//             <input type="password" id='password'  className='border-2 border-gray-800 rounded-sm w-[60%]  px-3' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
//         </div>
        
//         <button className='px-3 py-2 rounded-xl bg-orange-400 text-white w-20 cursor-pointer hover:bg-amber-500' disabled={loading}>
//            { loading?"loading...":"Login"}
//         </button>
//          <p className='text-[18px]'>Don't have a account? <span className='text-[red] text-[19px] cursor-pointer' onClick={()=>navigate("/signup")}>click here</span></p>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Login


// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { authDataContext } from "../context/AuthContext";
// import { userDataContext } from "../context/userContext";
// import { MdEmail, MdLock } from "react-icons/md";
// import { toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   const { userData, setuserData } = useContext(userDataContext);
//   const { serverUrl, loading, setLoading } = useContext(authDataContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const result = await axios.post(
//         serverUrl + "/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       setuserData(result.data);
//       toast.success("Login Successfully");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen w-full flex items-center justify-center
//       bg-gradient-to-br from-gray-100 to-gray-200
//       dark:from-[#020617] dark:to-[#0f172a]"
//     >
//       {/* Card */}
//       <div
//         className="w-[90%] max-w-md rounded-3xl shadow-2xl
//         bg-white dark:bg-[#0b1120]
//         border border-gray-200 dark:border-slate-700
//         p-8 sm:p-10"
//       >
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
//             Welcome back
//           </h1>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//             Login to continue to Airbnb
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//               Email
//             </label>
//             <div
//               className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3
//               bg-gray-100 dark:bg-slate-800
//               border border-gray-300 dark:border-slate-700
//               focus-within:ring-2 focus-within:ring-orange-400"
//             >
//               <MdEmail className="text-gray-500 text-xl" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setemail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//               Password
//             </label>
//             <div
//               className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3
//               bg-gray-100 dark:bg-slate-800
//               border border-gray-300 dark:border-slate-700
//               focus-within:ring-2 focus-within:ring-orange-400"
//             >
//               <MdLock className="text-gray-500 text-xl" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
//                 required
//               />
//             </div>
//           </div>

//           {/* Button */}
//           <button
//             disabled={loading}
//             className={`w-full py-3 rounded-xl font-semibold text-white transition
//               ${
//                 loading
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02]"
//               }`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
//           Don’t have an account?{" "}
//           <span
//             className="text-orange-500 font-medium cursor-pointer hover:underline"
//             onClick={() => navigate("/signup")}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




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
