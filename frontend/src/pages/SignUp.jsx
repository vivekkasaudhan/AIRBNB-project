import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login';
import { useContext } from 'react';
import { authDataContext } from '../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';
const SignUp = () => {

   const [name, setname] = useState("");
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");



    let navigate=useNavigate();
    let {serverUrl}=useContext(authDataContext)
    const handleSignUP=async(e)=>{
        try {
            e.preventDefault();
            let result= await axios.post(serverUrl+"/api/auth/signup",{
               name,email,password
            },{withCredentials:true})
            console.log(result);
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-screen h-screen flex  items-center justify-center border-2'>

      <form action=""
      onSubmit={handleSignUP}
      className='w-[50%] h-150 flex flex-col  justify-center  gap-y-2   '>
        <div>
            <h1 className='mb-8 text-xl'>Welcome To Airbnb</h1>
        </div>


        <div className='flex flex-col text-xl' >
            <label htmlFor="name">Username</label>
            <input value={name} type="text" id='name' className='border-2 border-gray-800 rounded-sm w-[60%] px-3 ' required
            onChange={(e)=>setname(e.target.value)}/>
        </div >
        <div className='flex flex-col text-xl'> 
            <label htmlFor="email">Email</label>
            <input value={email} type="text" id='email'  className='border-2 border-gray-800 rounded-sm w-[60%]  px-3  'required
            onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div className='flex flex-col text-xl'> 
            <label htmlFor="password">Password</label>
            <input value={password} type="password" id='password'  className='border-2 border-gray-800 rounded-sm w-[60%]  px-3  ' required
            onChange={(e)=>setpassword(e.target.value)}/>
        </div>
         <button className='px-3 py-2 rounded-xl bg-orange-400 text-white w-20 cursor-pointer hover:bg-amber-500'>
           SignUp
        </button>
         <p className='text-[18px]'>Already have a account? <span className='text-[red] text-[19px] cursor-pointer' onClick={()=>navigate("/login")}>click here</span></p>
      </form>
       
       
    </div>
  )
}

export default SignUp
