import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { sendEmailVerification, updateProfile } from "firebase/auth";
import useMyHook from '../Hooks/useMyHook';
import { AuthContext } from '../Context/AuthContext.';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';


const Registation = () => {
    // AuthContext receive registation;
    const { registationUser } = useContext(AuthContext)
    // All Current values;
    const [nameValue, handleNameChange] = useMyHook('');
    const [photoValue, handlePhotoChange] = useMyHook('');
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // Error and success message;
    const [success, setSuccess] = useState('');
    const [error, setError] = useState(null);
    const [eye, setEye] = useState(false);
    // submit registation;
    const handleRegistation = (e) => {
        e.preventDefault();
        // Reset code;
        setSuccess('');
        setError(null);
        // Validation code;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        // condition;
        if (!emailRegex.test(emailValue)) {
            alert("Invalid Email ❌");
            return;
        }
        if (!passwordRegex.test(passwordValue)) {
            alert("Password must be strong ❌");
            return;
        }
        // Terms code;
        const terms = e.target.terms.checked;
        if (!terms) {
            return alert("please accept terms")
        }
        // main registation;
        registationUser(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user)
                // verification send your email address;
                sendEmailVerification(res.user)
                    .then(() => {
                        alert("Checked your email then login")
                    }).catch(error => {
                        console.log(error);
                    })
                // update display name and photourl;
                const updateUser = {
                    displayName: nameValue,
                    photoURL: photoValue

                }
                updateProfile(res.user, updateUser)
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }
    // Eye showing handler here;
    const eyeShowHandler = (e) => {
        e.preventDefault();
        setEye(!eye)

    }
    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-center mb-6">
                    Create an Account
                </h1>

                {/* FORM */}
                <form className="space-y-5" onSubmit={handleRegistation}>

                    {/* NAME */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={nameValue}
                            onChange={handleNameChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* PHOTO URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            value={photoValue}
                            onChange={handlePhotoChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={emailValue}
                            onChange={handleEmailChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>

                        <input
                            type={eye ? "text" : "password"}
                            placeholder="Enter your password"
                            value={passwordValue}
                            onChange={handlePasswordChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Eye Button */}
                        <button
                            type="button"
                            onClick={eyeShowHandler}
                            className="absolute top-[38px] right-3 text-gray-500 hover:text-blue-500 transition text-xl"
                        >
                            {eye ? <FaEye /> : <IoEyeOff />}
                        </button>
                    </div>
                    {/* Terms code */}
                    <div>
                        <label className="label">
                            <input type="checkbox" name='terms' className="checkbox" />
                            Accept Terms!
                        </label>
                    </div>

                    {/* BUTTON */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
                        Register
                    </button>
                    {/* Show message */}
                    <div className="flex flex-col items-center justify-center mt-4 space-y-2">
                        {success && (
                            <p className="text-green-600 bg-green-100 px-4 py-2 rounded-lg font-semibold text-center shadow-sm">
                                ✅ Successfully account created
                            </p>
                        )}

                        {error && (
                            <p className="text-red-600 bg-red-100 px-4 py-2 rounded-lg font-semibold text-center shadow-sm">
                                ❌ {error}
                            </p>
                        )}
                    </div>

                    {/* LOGIN LINK */}
                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <NavLink
                            to="/auth"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Login
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Registation;