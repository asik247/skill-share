import React from 'react';
import { AuthContext } from './AuthContext.';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const AuthProvider = ({ children }) => {



// create user/registation user code here;
const registationUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
// login user / sing in user code here;
const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

    const userInfo = {
       registationUser,
       loginUser
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;