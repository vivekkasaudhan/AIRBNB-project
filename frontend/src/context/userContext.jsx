import React, { createContext, useContext, useEffect, useState } from 'react'
import { children } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'
export const userDataContext=createContext()
const UserContext = ({children}) => {
    let {serverUrl}=useContext(authDataContext); 
    const [userData, setuserData] = useState(null)
    const getCurrentUser=async()=>{
        try {
            let result=await axios.get(serverUrl+"/api/user/currentuser",{withCredentials:true})
            setuserData(result.data);
        } catch (error) {
            setuserData(null)
            console.log(error);
            
        }
    }  
     useEffect(()=>{
       getCurrentUser()
    },[])
    let value={
             userData,setuserData,getCurrentUser
    }
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
