import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   
   

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    const loginUSer=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
  
    const logOUt=()=>{
        return signOut(auth)
        setLoading(true)
    }
  const authInfo = {
    createNewUser,
    setUser,
    user,
    logOUt,
    loginUSer,
    loading

    
  };
  useEffect(()=>{
    const unscribe= onAuthStateChanged(auth,(currentUSer)=>{
        setUser(currentUSer)
        setLoading(false)
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
