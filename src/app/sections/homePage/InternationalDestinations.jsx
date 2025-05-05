"use client";

import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

function InternationalDestinations() {
  const { ref: containerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% visible
  });

  const destinations = [
    {
      id: 1,
      name: "Dubai",
      duration: "3N 2D",
      price: "₹20,000",
      image: "/dubai_1.jpeg",
      link: "/destinations/international/dubai",
    },
    {
      id: 2,
      name: "Bali",
      duration: "4N 3D",
      price: "₹35,000",
      image: "/bali_1.jpeg",
      link: "/destinations/international/bali",
    },
    {
      id: 3,
      name: "Maldives",
      duration: "5N 4D",
      price: "₹25,000",
      image: "/maldives_1.jpeg",
      link: "/destinations/international/maldive",
    },
    {
      id: 4,
      name: "Singapore",
      duration: "4N 3D",
      price: "₹18,000",
      image: "/singapore_1.jpeg",
      link: "/destinations/international/Singapore",
    },

    {
      id: 5,
      name: "Thailand",
      duration: "2N 3D",
      price: "₹12,000",
      image: "/thailand_1.jpeg",
      link: "/destinations/international/Thailand",
    },
    {
      id: 6,
      name: "Vietnam",
      duration: "5N 6D",
      price: "₹30,000",
      image: "/vietnam_1.jpeg",
      link: "/destinations/international/Vietnam",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const current = scrollRef.current;
    if (current) {
      const scrollAmount = 360;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-10 overflow-hidden px-4 mt-1" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">
          Top International Destinations
        </h2>

        <div
          className={`flex flex-nowrap relative mt-14 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 sm:-left-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-red-500 text-white border border-red-600 transition-transform rotate-90"
          >
            <RiArrowDropDownLine />
          </button>

          {/* Scrollable Destinations */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-6 overflow-hidden"
          >
            {destinations.map((place, index) => (
              <Link key={place.id} href={place.link}>
                <div className="relative group w-[340px] h-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  {/* Image */}
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-125"
                  />

                  {/* Overlay Details */}
                  <div className="absolute bottom-0 left-0 w-full flex flex-col items-start justify-center p-5 text-white bg-black/60 backdrop-blur-sm h-28 opacity-0 group-hover:opacity-100 transition duration-300">
                    <h3 className="text-2xl font-bold">{place.name}</h3>
                    <p className="text-sm">{place.duration}</p>
                    <p className="text-lg font-semibold">{place.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 sm:-right-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-red-500 text-white border border-red-600 transition-transform -rotate-90"
          >
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InternationalDestinations;
