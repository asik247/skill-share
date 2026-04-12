import React, { useContext } from 'react';
import logoImg from "/logo.png";
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext.';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, loading, logOutUser } = useContext(AuthContext);

    if (loading) {
        return <p className="text-center p-3">Loading...</p>;
    }

    const signOutHandler = () => {
        logOutUser()
            .then(() => alert("Signed out"))
            .catch(err => console.log(err));
    };

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-500 transition";

    return (
        <div className="
            navbar 
            min-h-[60px]
            bg-white/70 
            backdrop-blur-xl 
            shadow-md 
            sticky top-0 z-50
            px-4
        ">

            {/* LEFT */}
            <div className="navbar-start">

                {/* MOBILE MENU */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        ☰
                    </div>

                    <ul className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-lg rounded-xl mt-3 w-52 p-3 shadow-lg">
                        <li><NavLink className={linkClass} to="/">Home</NavLink></li>
                        <li><NavLink className={linkClass} to="/contact">Contact</NavLink></li>
                        <li><NavLink className={linkClass} to="/dashboard">Dashboard</NavLink></li>

                        {user && (
                            <>
                                <li><NavLink className={linkClass} to="/orders">Orders</NavLink></li>
                                <li><NavLink className={linkClass} to="/profile">Profile</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* LOGO (SMALL + CLEAN) */}
                <img
                    src={logoImg}
                    alt="logo"
                    className="w-30 scale-120 hover:scale-125 transition duration-300 ml-2"
                />
            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 text-sm">
                    <li><NavLink className={linkClass} to="/">Home</NavLink></li>
                    <li><NavLink className={linkClass} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={linkClass} to="/dashboard">Dashboard</NavLink></li>

                    {user && (
                        <>
                            <li><NavLink className={linkClass} to="/orders">Orders</NavLink></li>
                            <li><NavLink className={linkClass} to="/profile">Profile</NavLink></li>
                        </>
                    )}
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end flex items-center gap-3">

                {/* USER */}
                {user?.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="user"
                        className="w-9 h-9 rounded-full border object-cover hover:scale-110 transition"
                    />
                ) : (
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 border">
                        <FaUser className="text-gray-500 text-lg" />
                    </div>
                )}

                {/* BUTTON */}
                {user ? (
                    <button
                        onClick={signOutHandler}
                        className="px-3 py-1.5 text-sm rounded-full bg-red-500 hover:bg-red-600 text-white transition"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink
                        to="/auth"
                        className="px-3 py-1.5 text-sm rounded-full bg-blue-500 hover:bg-blue-600 text-white transition"
                    >
                        Login
                    </NavLink>
                )}

            </div>
        </div>
    );
};

export default Navbar;