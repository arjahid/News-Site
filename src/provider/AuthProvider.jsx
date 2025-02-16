import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    console.log('user',user)
   

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
  
  const authInfo = {
    createNewUser,
    setUser

    
  };
  useEffect(()=>{
    const unscribe= onAuthStateChanged(auth,(currentUSer)=>{
        setUser(currentUSer)
    })
    return ()=>{
        unscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
