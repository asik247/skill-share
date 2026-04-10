import React from 'react';
import { NavLink } from 'react-router';
import useMyHook from '../Hooks/useMyHook';

const Registation = () => {
    // handler Registation;
    const [nameValue,handleNameChange] = useMyHook('');
    const handleRegistation = (e)=>{
        e.preventDefault();
        console.log(nameValue);
       
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* BUTTON */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
                        Register
                    </button>

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