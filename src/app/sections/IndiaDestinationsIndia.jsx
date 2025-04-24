import Image from 'next/image';
import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";


function IndiaDestinations() {
  const destinations = [
    {
      name: 'Goa',
      duration: '3N 2D',
      price: '₹20,000',
      image: '/goa_1.jpeg',
    },
    {
      name: 'Maldives',
      duration: '4N 3D',
      price: '₹35,000',
      image: '/maldives_1.jpeg',
    },
    {
      name: 'Kerala',
      duration: '5N 4D',
      price: '₹25,000',
      image: '/kerala_1.jpeg',
    },
    {
      name: 'Manali',
      duration: '4N 3D',
      price: '₹18,000',
      image: '/northeast_1.jpeg',
    },
    {
      name: 'Jaipur',
      duration: '2N 3D',
      price: '₹12,000',
      image: '/ladakh_1.jpeg',
    },
    {
      name: 'Kashmir',
      duration: '5N 6D',
      price: '₹30,000',
      image: '/kashmire_1.jpeg',
    },
  ];

  return (
    <div className="w-full py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">
          Top-Rated Destinations in India
        </h2>

        <div className="flex flex-nowrap relative mt-14">
          <RiArrowDropDownLine className="text-6xl absolute rounded-full top-[40%] -left-16 transform text-white bg-red-500 border border-red-600 z-20 transition-transform duration-300 rotate-90" />
          <div className='flex flex-nowrap relative gap-6 overflow-hidden'>{destinations.map((place, index) => (
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
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-start justify-center pl-5 text-white bg-black/60 h-28 text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-3xl font-bold">{place.name}</h3>
                <p className="text-lg">{place.duration}</p>
                <p className="text-xl font-semibold">{place.price}</p>
              </div>
            </div>
          ))}
          </div>
          <RiArrowDropDownLine className="text-6xl absolute rounded-full top-[40%] -right-16 transform text-white bg-red-500 border border-red-600 z-10 transition-transform duration-300 -rotate-90" />
        </div>
      </div>
    </div>
  );
}

export default IndiaDestinations;
