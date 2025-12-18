import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { authDataContext } from '../context/AuthContext';
import { useState } from 'react';

const Login = () => {
    let navigate=useNavigate();
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")

   let {serverUrl}=useContext(authDataContext)
    const handleLogin=async(e)=>{
     try {
       e.preventDefault();
      let result=await axios.post(serverUrl+"/api/auth/login",{
        email,password
      },{withCredentials:true})
      console.log(result);
      
     } catch (error) {
      console.log(error);
     }

    }
  return (
    <div>
       <div className='w-screen h-screen flex  items-center justify-center border-2'>

      <form 
      onSubmit={handleLogin}
      action=""
      className='w-[50%] h-150 flex flex-col  justify-center  gap-y-2   '>
        <div>
            <h1 className='mb-8 text-xl'>Welcome To Airbnb</h1>
        </div>


        
        <div className='flex flex-col text-xl'> 
            <label htmlFor="email">Email</label>
            <input type="text" id='email'  className='border-2 border-gray-800 rounded-sm w-[60%]  px-3  ' value={email} onChange={(e)=>setemail(e.target.value)} required/>
        </div>
        <div className='flex flex-col text-xl'> 
            <label htmlFor="password">Password</label>
            <input type="password" id='password'  className='border-2 border-gray-800 rounded-sm w-[60%]  px-3' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
        </div>
        
        <button className='px-3 py-2 rounded-xl bg-orange-400 text-white w-20 cursor-pointer hover:bg-amber-500'>
           Login
        </button>
         <p className='text-[18px]'>Don't have a account? <span className='text-[red] text-[19px] cursor-pointer' onClick={()=>navigate("/signup")}>click here</span></p>
      </form>
    </div>
    </div>
  )
}

export default Login
