import React, { useState } from 'react' //unnecessary
import { children } from 'react';// unnecessary
import { createContext } from 'react'  
export const authDataContext=createContext();
const AuthContext = ({children}) => {
  let serverUrl="https://airbnb-project-backend-vd6r.onrender.com"
  const [loading, setLoading] = useState(false)
  let value={
    serverUrl,loading, setLoading
  }

  return (
    <div>
       <authDataContext.Provider value={value}>
        {children}
       </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
