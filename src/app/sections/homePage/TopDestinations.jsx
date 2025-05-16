
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


function TopDestinations() {
    return (
        <div className="w-full md:max-w-7xl mx-auto py-10 px-4">
            <h2 className="relative text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-20">
                Top Destinations
                <span className="absolute left-1/2 -bottom-2 w-56 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full transform -translate-x-1/2 animate-pulse"></span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {[
                    { src: "/homepage/top_destinations/bali.jpeg", title: "Bali", href: "/destinations/international/bali", span: "md:col-span-2" },
                    { src: "/homepage/top_destinations/burj.jpeg", title: "Dubai", href: "/destinations/international/dubai", span: "md:row-span-2" },
                    { src: "/homepage/top_destinations/vietnam.jpeg", title: "Vietnam", href: "/destinations/international/vietnam" },
                    { src: "/homepage/top_destinations/singapore.jpeg", title: "Singapore", href: "/destinations/international/singapore" },
                    { src: "/homepage/top_destinations/thailand.jpeg", title: "Thailand", href: "/destinations/international/thailand" },
                    { src: "/homepage/top_destinations/maldiv.jpeg", title: "Maldives", href: "/destinations/international/maldives" },
                ].map((item, index) => (
                    <div key={index} className={`relative group overflow-hidden rounded-[15%] md:rounded-xl ${item.span || ""}`}>
                        <Link href={item.href}>
                            <div className="relative w-full h-full min-h-[200px] sm:min-h-[250px] md:min-h-[200px]">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition duration-300" />
                                <h3 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.9)]">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default TopDestinations;

