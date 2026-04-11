
import { NavLink, useLocation, useNavigate } from 'react-router';
import useMyHook from '../Hooks/useMyHook';
import { AuthContext } from '../Context/AuthContext.';
import { useContext, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const LogIn = () => {
    // AuthContext receive loginUser;
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    const emailRef = useRef(null);
    // navgate and location code here;
    const navgate = useNavigate();
    const location = useLocation();
    // console.log(location);
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
                // pathName match code;
                navgate(location.state || '/')
                if (!res.user.emailVerified) {
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
    const forgotPasswordHandler = (e) => {
        e.preventDefault();
        const emailValue = emailRef.current.value
        console.log('forgotPassword clicked', emailValue);
        sendPasswordResetEmail(auth, emailValue)
            .then(() => {
                alert('Email Checked and password reset')
            }).catch(error => {
                console.log(error);
            })
    }
    // Google SingIn
    const googleSignInHandler = (e) => {
        e.preventDefault();
        googleSignIn()
            .then(res => {
                console.log(res.user);
                setSuccess(res.user)
                navgate(location.state || '/')
            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })
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
                            ref={emailRef}
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
                                ✅ Successfully LogIn!
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
                    {/* Google SignIn */}
                    <button onClick={googleSignInHandler} className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 py-3 rounded-lg font-medium shadow-sm transition">

                        {/* Google Icon */}
                        <svg
                            aria-label="Google logo"
                            width="20"
                            height="20"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>

                        <span>Continue with Google</span>
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