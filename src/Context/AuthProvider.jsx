import React from 'react';
import { AuthContext } from './AuthContext.';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const AuthProvider = ({ children }) => {



// create user/registation user code here;
const registationUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

    const userInfo = {
       registationUser,
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;