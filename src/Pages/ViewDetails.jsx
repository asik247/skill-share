import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
    const data = useLoaderData();

    const {
        skillName,
        providerName,
        providerEmail,
        price,
        rating,
        slotsAvailable,
        description,
        image,
        category
    } = data;

    return (
        <div className="max-w-5xl mx-auto p-6 mt-15">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

                {/* Image */}
                <div>
                    <img
                        src={image}
                        alt={skillName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">

                    <h2 className="text-3xl font-bold text-gray-800">
                        {skillName}
                    </h2>

                    <p className="text-sm text-gray-500">
                        Category: <span className="font-semibold">{category}</span>
                    </p>

                    <p className="text-gray-600">
                        {description}
                    </p>

                    <div className="border-t pt-3 space-y-1">
                        <p><span className="font-semibold">👤 Provider:</span> {providerName}</p>
                        <p><span className="font-semibold">📧 Email:</span> {providerEmail}</p>
                    </div>

                    <div className="flex justify-between items-center pt-3">
                        <p className="text-xl font-bold text-green-600">
                            ${price}
                        </p>

                        <p className="text-yellow-500 font-semibold">
                            ⭐ {rating}
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        Slots Available: {slotsAvailable}
                    </p>

                    <button className="btn btn-primary w-full mt-4">
                        Book Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;