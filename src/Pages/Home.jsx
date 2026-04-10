import React from 'react';
import bgImage from "../assets/bg.jpg";
import dashboardImage from "../assets/dashboard.jpg";

const Home = () => {
    return (
        <div
            className="w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="max-w-7xl mx-auto flex  flex-col-reverse md:flex-row items-center justify-between gap-30 px-6">

                {/* LEFT SIDE */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        Learn Without Limits,
                        <span className="text-blue-400"> Share Your Skills</span>
                    </h1>

                    <p className="mt-4 text-gray-200 text-lg">
                        Discover courses, teach what you love, and grow your skills with a global learning community.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            Get Started
                        </button>

                        <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                            Browse Courses
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE (IMAGE) */}
                <div className="relative">
                    <img
                        className="w-[320px] md:w-[450px] rounded-xl shadow-2xl"
                        src={dashboardImage}
                        alt="Dashboard"
                    />

                    {/* Optional floating card */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                        <p className="text-sm font-semibold">🔥 120+ Courses</p>
                        <p className="text-xs text-gray-500">Updated Daily</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;