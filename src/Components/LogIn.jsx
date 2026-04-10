import React from 'react';
import { NavLink } from 'react-router';

const LogIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login to Your Account
                </h1>

                {/* FORM */}
                <form className="space-y-5">

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

                    {/* FORGOT */}
                    <div className="text-right">
                        <a className="text-sm text-blue-500 hover:underline cursor-pointer">
                            Forgot password?
                        </a>
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