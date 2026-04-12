import React from 'react';

const Orders = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-blue-100 p-6">

            {/* Header */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                🧾 All Orders
            </h2>

            {/* Table Container */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">

                {/* Table */}
                <table className="w-full text-left">

                    {/* Head */}
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Customer</th>
                            <th className="p-4">Course</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>

                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-4">#101</td>
                            <td className="p-4">Md Asik</td>
                            <td className="p-4">React Course</td>
                            <td className="p-4">$50</td>
                            <td className="p-4 text-green-500 font-semibold">Completed</td>
                        </tr>

                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-4">#102</td>
                            <td className="p-4">Rahim</td>
                            <td className="p-4">Node JS</td>
                            <td className="p-4">$40</td>
                            <td className="p-4 text-yellow-500 font-semibold">Pending</td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                            <td className="p-4">#103</td>
                            <td className="p-4">Karim</td>
                            <td className="p-4">UI Design</td>
                            <td className="p-4">$30</td>
                            <td className="p-4 text-red-500 font-semibold">Cancelled</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default Orders;