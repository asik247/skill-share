import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext.";
import { updateProfile } from "firebase/auth";

const Profile = () => {
    const { user, logOutUser, loading } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [editMode, setEditMode] = useState(false);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    // Logout
    const handlerLogOut = () => {
        logOutUser()
            .then(() => {
                alert("Logout done");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Update Profile
    const updateProfileHandler = async () => {
        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });

            alert("Profile updated successfully!");
            setEditMode(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
                        alt="User"
                        className="w-24 h-24 rounded-full border-4 border-primary"
                    />
                </div>

                {/* User Info */}
                {!editMode ? (
                    <>
                        <h2 className="text-2xl font-bold mt-4">
                            {user?.displayName}
                        </h2>
                        <p className="text-gray-500">Frontend Developer</p>
                    </>
                ) : (
                    <div className="mt-4 space-y-2">
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                        />

                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Photo URL"
                        />
                    </div>
                )}

                {/* Info Section */}
                <div className="mt-6 space-y-2 text-left">
                    <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {user?.email}
                    </p>
                    <p>
                        <span className="font-semibold">Location:</span>{" "}
                        Bangladesh
                    </p>
                    <p>
                        <span className="font-semibold">Member Since:</span>{" "}
                        2026
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3 justify-center">

                    {!editMode ? (
                        <button
                            onClick={() => setEditMode(true)}
                            className="btn btn-primary px-4"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={updateProfileHandler}
                            className="btn btn-success px-4"
                        >
                            Save Changes
                        </button>
                    )}

                    <button
                        onClick={handlerLogOut}
                        className="btn btn-outline px-4"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;