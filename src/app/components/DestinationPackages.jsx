import Link from 'next/link'
import React from 'react'


export default function DestinationPackages({ pkgData }) {
    
    return (
        <div className="max-w-6xl mx-auto px-4 my-10 transform transition-all duration-75 hover:-translate-y-3">
            <div className="group flex flex-col md:flex-row bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">

                {/* Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                        src={pkgData.image}
                        alt={pkgData.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between w-full space-y-4">
                    {/* Title & Duration */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {pkgData.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {pkgData.duration} {pkgData.isCustomizable && " / Customizable"}
                        </p>

                        {/* Hotel Info */}
                        <p className="text-sm font-medium text-gray-800">
                            Hotel Included: {pkgData.hotelName} ({pkgData.hotelStars} Star)
                        </p>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between pt-4">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Starting From</p>
                                <div className="text-2xl font-bold text-green-600">₹{pkgData.actualPrice}/-</div>
                                <div className="text-lg font-semibold text-gray-800 line-through">
                                    ₹{pkgData.olderPrice}/-
                                </div>
                                <p className="text-sm text-gray-500">Per Adult</p>
                            </div>
                        </div>


                        <Link href={pkgData.link}>
                            <button className="px-5 py-2 cursor-pointer bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                                Customise & Get Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable icon feature component
const Feature = ({ icon, label }) => (
    <div className="flex items-center gap-2">
        <i className={`${icon} text-blue-600`}></i>
        <span>{label}</span>
    </div>
);
