import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.";

const Profile = () => {
    // AuthProvider receive user and loading and logIn;
    const {user} = useContext(AuthContext);
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={user && user.photoURL}
                        alt="User"
                        className="w-24 h-24 rounded-full border-4 border-primary"
                    />
                </div>

                {/* User Info */}
                <h2 className="text-2xl font-bold mt-4">{user && user.displayName}</h2>
                <p className="text-gray-500">Frontend Developer</p>

                {/* Info Section */}
                <div className="mt-6 space-y-2 text-left">
                    <p><span className="font-semibold">Email:</span>{user && user.email}</p>
                    <p><span className="font-semibold">Location:</span> Bangladesh</p>
                    <p><span className="font-semibold">Member Since:</span> 2026</p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3 justify-center">
                    <button className="btn btn-primary px-4">Edit Profile</button>
                    <button className="btn btn-outline px-4">Logout</button>
                    <button className="btn btn-outline px-4">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;