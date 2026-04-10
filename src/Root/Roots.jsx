import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Roots = () => {
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

export default Roots;