import Link from 'next/link'
import React from 'react'

function DubaiPackagesSection({ pkgData }) {
    return (
        <div className="max-w-6xl mx-auto px-4 my-10">
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
                    {/* Title & Description */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                            {pkgData.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                            {pkgData.description}
                        </p>

                        {/* Icons */}
                        <div className="flex flex-wrap gap-5 mt-5 text-sm text-gray-700">
                            <Feature icon="fas fa-hotel" label="Hotel" />
                            <Feature icon="fas fa-utensils" label="Meal" />
                            <Feature icon="fas fa-wifi" label="Wi-Fi" />
                            <Feature icon="fas fa-car-side" label="Cab" />
                        </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <p className="text-xl font-semibold text-gray-800">
                            ₹{pkgData.price} <span className="text-sm font-medium text-gray-500">/ person</span>
                        </p>
                        <Link href={pkgData.link}>
                            <button className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                                View & Book
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
// Reusable icon feature component
const Feature = ({ icon, label }) => (
    <div className="flex items-center gap-2">
        <i className={`${icon} text-blue-600`}></i>
        <span>{label}</span>
    </div>
);

export default DubaiPackagesSection