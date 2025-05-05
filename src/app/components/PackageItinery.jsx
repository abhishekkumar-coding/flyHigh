"use client"
import React, { useState } from 'react'

function PackageItinery({itinerary, days}) {
    const [open, setOpen] = useState(null);


    const toggleDropdown = (index) => {
        setOpen(open === index ? null : index);
    };

    


    return (

        <section className="w-full py-12 px-4">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{days}</h2>
                <div className="space-y-10 text-lg text-gray-700">
                    {itinerary.map((item, index) => (
                        <div key={index} className="cursor-pointer border-b pb-3">
                            <div
                                className="flex items-center justify-between"
                                onClick={() => toggleDropdown(index)}
                            >
                                <h3 className="font-semibold text-xl">{item.day}</h3>
                                <span className={`transform ${open === index ? 'rotate-180' : ''} transition-all`}>
                                    &#9660;
                                </span>
                            </div>
                            {open === index && (
                                <div className="mt-4 space-y-4">
                                    {item.details.map((point, i) => (
                                        <p key={i}>{point}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PackageItinery