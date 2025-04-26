"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


function InternationalDestinations() {
  const destinations = [
    {
      id: 1,
      name: 'Dubai',
      duration: '3N 2D',
      price: '₹20,000',
      image: '/dubai_1.jpeg',
    },
    {
      id: 2,
      name: 'Bali',
      duration: '4N 3D',
      price: '₹35,000',
      image: '/bali_1.jpeg',
    },
    {
      id: 3,
      name: 'Maldives',
      duration: '5N 4D',
      price: '₹25,000',
      image: '/maldives_1.jpeg',
    },
    {
      id: 4,
      name: 'Singapore',
      duration: '4N 3D',
      price: '₹18,000',
      image: '/singapore_1.jpeg',
    },
    {
      id: 5,
      name: 'Thailand',
      duration: '2N 3D',
      price: '₹12,000',
      image: '/thailand_1.jpeg',
    },
    {
      id: 6,
      name: 'Vietnam',
      duration: '5N 6D',
      price: '₹30,000',
      image: '/vietnam_1.jpeg',
    },
  ];

  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const current = scrollRef.current;
    if (current) {
      const scrollAmount = 360;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div className="w-full py-10 px-4 mt-1">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">
          Top International Destinations
        </h2>

        <div className="flex flex-nowrap relative mt-14">
          <button
            onClick={() => scroll('right')}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-red-500 text-white border border-red-600 transition-transform rotate-90"
          >
            <RiArrowDropDownLine />
          </button>
          <div ref={scrollRef} className='flex flex-nowrap relative gap-6 overflow-hidden'>{destinations.map((place, index) => (
            <div
              key={index}
              className="relative group w-[340px] shrink-0 h-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-125"
              />

              {/* Overlay Details */}
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-start justify-center pl-5 text-white bg-black/60 backdrop-blur-xs h-28 text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-3xl font-bold">{place.name}</h3>
                <p className="text-lg">{place.duration}</p>
                <p className="text-xl font-semibold">{place.price}</p>
              </div>
            </div>
          ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-red-500 text-white border border-red-600 transition-transform -rotate-90"
          >
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InternationalDestinations