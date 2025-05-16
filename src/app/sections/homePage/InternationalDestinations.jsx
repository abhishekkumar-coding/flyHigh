"use client";

import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

const dubaiPackages = [
  {
    name: "Dubai Delight Package",
    image: "/homepage/dubai/dubai_package_1.jpeg",
    link: "/destinations/international/dubai",
    duration: "5 Days / 4 Nights",
    price: "₹35,000",
    originalPrice: "₹45,000",
    hotel: "4 Star Hotel",
  },
  {
    name: "Dubai Luxury Escape",
    image: "/homepage/dubai/dubai_package_2.jpeg",
    link: "/destinations/international/dubai",
    duration: "6 Days / 5 Nights",
    price: "₹52,000",
    originalPrice: "₹65,000",
    hotel: "5 Star Hotel",
  },
  {
    name: "Budget Dubai Getaway",
    image: "/homepage/dubai/dubai_package_3.jpeg",
    link: "/destinations/international/dubai",
    duration: "4 Days / 3 Nights",
    price: "₹25,000",
    originalPrice: "₹32,000",
    hotel: "3 Star Hotel",
  },
  {
    name: "Budget Dubai Getaway",
    image: "/homepage/dubai/dubai_package_4.jpeg",
    link: "/destinations/international/dubai",
    duration: "4 Days / 3 Nights",
    price: "₹25,000",
    originalPrice: "₹32,000",
    hotel: "3 Star Hotel",
  },
  {
    name: "Budget Dubai Getaway",
    image: "/homepage/dubai/dubai_package_5.jpeg",
    link: "/destinations/international/dubai",
    duration: "4 Days / 3 Nights",
    price: "₹25,000",
    originalPrice: "₹32,000",
    hotel: "3 Star Hotel",
  }
];

function TopDubaipackages() {
  const { ref: containerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const current = scrollRef.current;
    if (current) {
      const scrollAmount = 280;
      (current).scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-10 px-4 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-left">
          Unforgettable Dubai Escapes
        </h2>

        <div
          className={`relative flex items-center transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl bg-white shadow-md rounded-full p-1 hover:scale-105 transition hidden sm:block"
          >
            <RiArrowDropDownLine className="rotate-90 text-red-600" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto scrollbar-hide scroll-smooth pr-4 py-5 sm:pr-0"
          >
            {dubaiPackages.map((pkg, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-800">{pkg.name}</h3>
                  <p className="text-sm text-gray-600">{pkg.duration}</p>

                  <p className="text-sm text-gray-600">{pkg.hotel}</p>
                  <div className="flex items-center justify-between gap-2 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-green-600">{pkg.price}</span>
                      <span className="line-through text-gray-400 text-sm">{pkg.originalPrice}</span>
                    </div>
                    <Link href={pkg.link}>
                      <button className="px-3 py-1 text-sm font-medium text-white border bg-green-600 border-gray-300 rounded hover:bg-green-500 cursor-pointer transition">
                        Design My Trip
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl bg-white shadow-md rounded-full p-1 hover:scale-105 transition hidden sm:block"
          >
            <RiArrowDropDownLine className="-rotate-90 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopDubaipackages;
