import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayouts;