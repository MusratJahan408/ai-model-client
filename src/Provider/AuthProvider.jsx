import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';



const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] =useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    
    const updateProfileFunc =(displayName,photoURL)=>{
        return  updateProfile(auth.currentUser,{
                  displayName,
                  photoURL
                })
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])
    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        googleLogin,
        updateProfileFunc,
        loading,
        setLoading
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;