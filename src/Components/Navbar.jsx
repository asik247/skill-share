import React, { useContext } from 'react';
import logoImg from "/logo.png"
import { NavLink } from 'react-router';

import { AuthContext } from '../Context/AuthContext.';
import { FaUser } from 'react-icons/fa';
const Navbar = () => {
    // Current User receive provider;
    const { user, loading, logOutUser } = useContext(AuthContext);
    console.log('current User', user);
    if (loading) {
        return <p>Loadding...</p>
    }
    // sign out code here;
    const signOutHandler = () => {
        logOutUser()
            .then(() => {
                alert("signOut done");
            }).catch(error => {
                console.log(error);
            })
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/dashboard'}>DashBoard</NavLink></li>
        {user && <>
            <li><NavLink to={'/orders'}>Orders</NavLink></li>
            <li><NavLink to={'/profile'}>Profile</NavLink></li>
        </>
        }
    </>


    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='scale-200 w-[120px] ml-5' src={logoImg} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end">
                {/* User Profile Image */}
                <div className="mr-10">
                    {user?.photoURL ? (
                        <div className="relative group">
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md 
                   hover:scale-110 transition-transform duration-300 cursor-pointer"
                            />
                            {/* Optional subtle ring effect on hover */}
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 
                      group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                    ) : (
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 
                    border-2 border-gray-300 shadow-sm">
                            <FaUser className="text-2xl text-gray-500" />
                        </div>
                    )}
                </div>
                {user ? (
                    <button
                        onClick={signOutHandler}
                        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink
                        to="/auth"
                        className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;