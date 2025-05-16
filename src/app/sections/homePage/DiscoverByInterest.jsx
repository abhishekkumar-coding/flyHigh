"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const interests = [
    {
        name: "Honeymoon Retreats",
        image: "/homepage/discover/discover_6.jpeg",
        link: "/interests/honeymoon",
    },
    {
        name: "Family Holidays",
        image: "/homepage/discover/discover_4.jpeg",
        link: "/interests/family",
    },
    {
        name: "Adventure Trips",
        image: "/homepage/discover/discover_3.jpeg",
        link: "/interests/adventure",
    },
    {
        name: "Beach Escapes",
        image: "/homepage/discover/discover_2.jpeg",
        link: "/interests/beach",
    },
    {
        name: "Mountain Getaways",
        image: "/homepage/discover/discover_5.jpeg",
        link: "/interests/mountains",
    },
    {
        name: "Luxury Holidays",
        image: "/homepage/discover/discover_1.jpeg",
        link: "/interests/luxury",
    },
];

function DiscoverByInterest() {
    return (
        <section className="w-full py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Discover by Interest
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    {interests.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className="flex flex-col items-center group transition hover:scale-105"
                        >
                            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                                {item.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default DiscoverByInterest;
