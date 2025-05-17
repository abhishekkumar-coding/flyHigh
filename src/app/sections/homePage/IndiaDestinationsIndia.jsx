'use client';

import "@/app/globals.css";
import Image from 'next/image';
import { useRef } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

function IndiaDestinations() {
  const destinations = [
    { name: 'Ayodhya', image: '/ayodhya_card.jpeg', link: "/destinations/domestic/ayodhya" },
    { name: 'Goa', image: '/goa_1.jpeg', link: "/destinations/domestic/goa" },
    { name: 'Kerala', image: '/kerala_1.jpeg', link: "/destinations/domestic/Kerala" },
    { name: 'Manali', image: '/manali_1.jpeg', link: "/destinations/domestic/Manali" },
    { name: 'Jaipur', image: '/jaipur_1.jpeg', link: "/destinations/domestic/Jaipur" },
    { name: 'Kashmir', image: '/kashmire_1.jpeg', link: "/destinations/domestic/Kashmir" },
  ];



  const { ref: containerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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
        <div  className="flex items-center justify-between mb-0">
          <h2 className="text-2xl font-bold mb-8 text-left">
            India&#8217;s Best Travel Picks
          </h2>
          <div className="hidden sm:flex items-center gap-10">
            <button
              onClick={() => scroll("left")}
              className=" -left-4 sm:-left-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-white text-red-500 shadow-2xl shadow-gray-900  transition-transform rotate-90"
            >
              <RiArrowDropDownLine />
            </button>
            <button
              onClick={() => scroll("right")}
              className=" -right-5 sm:-right-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-white text-red-500 shadow-2xl shadow-gray-900 transition-transform -rotate-90"
            >
              <RiArrowDropDownLine />
            </button>
          </div>
        </div>

        <div
          className={`flex flex-nowrap relative mt-5 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Left Arrow */}


          {/* Scrollable Destinations */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-6 overflow-hidden"
          >
            {destinations.map((place, index) => (
              <Link key={place.id} href={place.link}>
                <div className="relative group w-[280px] h-[300px] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  {/* Image */}
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-125"
                  />

                  {/* Overlay Details */}
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center justify-center p-5 text-white h-28">
                    <h1 className="text-2xl md:text-3xl font-bold">{place.name}</h1>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}

        </div>
      </div>
    </div>
  );
}

export default IndiaDestinations;
