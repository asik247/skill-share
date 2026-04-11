
import { NavLink } from 'react-router';
import useMyHook from '../Hooks/useMyHook';
import { AuthContext } from '../Context/AuthContext.';
import { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const LogIn = () => {
    // AuthContext receive loginUser;
    const { loginUser } = useContext(AuthContext);
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // Error and success message;
    const [success, setSuccess] = useState('');
    const [error, setError] = useState(null);
    const [eye, setEye] = useState(false);
    // handler login;
    const loginHandler = (e) => {
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
        // console.log(emailValue, passwordValue);
        loginUser(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user)
                if(!res.user.emailVerified){
                    alert('tomer email verify kora nai')
                }
            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    // Eye showing handler here;
    const eyeShowHandler = (e) => {
        e.preventDefault();
        setEye(!eye)

    }
    // forgotPasswordHandler code
    const forgotPasswordHandler = ()=>{
        console.log('forgotPassword clicked');
    }
    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login to Your Account
                </h1>

                {/* FORM */}
                <form onSubmit={loginHandler} className="space-y-5">

                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={emailValue}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
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

                    {/* FORGOT */}
                    <div onClick={forgotPasswordHandler} className="text-right">
                        <a className="text-sm text-blue-500 hover:underline cursor-pointer">
                            Forgot password?
                        </a>
                    </div>
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

                    {/* BUTTON */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
                        Login
                    </button>

                    {/* REGISTER */}
                    <p className="text-center text-sm">
                        New here?{" "}
                        <NavLink
                            to="/auth/registation"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Create an account
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default LogIn;