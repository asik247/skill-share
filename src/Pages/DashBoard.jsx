import React from 'react';

const DashBoard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-sky-100 via-white to-indigo-200 p-6">

            {/* Header */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                📊 Dashboard Overview
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                    <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-500 mt-3">1,250</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                    <h3 className="text-xl font-semibold text-gray-700">Total Courses</h3>
                    <p className="text-3xl font-bold text-green-500 mt-3">320</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                    <h3 className="text-xl font-semibold text-gray-700">Revenue</h3>
                    <p className="text-3xl font-bold text-purple-500 mt-3">$12,500</p>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-700">
                    Recent Activity
                </h3>

                <ul className="space-y-3 text-gray-600">
                    <li>✔ New user registered</li>
                    <li>✔ New course added</li>
                    <li>✔ Payment received</li>
                    <li>✔ Course updated</li>
                </ul>
            </div>

        </div>
    );
};

export default DashBoard;