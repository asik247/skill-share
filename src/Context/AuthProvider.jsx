import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const AuthProvider = ({ children }) => {
    // user and loading state code here;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user/registation user code here;
    const registationUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user / sing in user code here;
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Google SignIn code here;
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    // logOut user code here;
    const logOutUser = () => {
        return signOut(auth)
    }
    // OnAuthStateChange/current user manage code here;
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubsCribe();
    }, [])

    const userInfo = {
        registationUser,
        loginUser,
        googleSignIn,
        user,
        loading,
        logOutUser
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;