'use client';
import "@/app/globals.css"
import Image from 'next/image';
import { useRef } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

function IndiaDestinations() {
  const destinations = [
    { id: 1, name: 'Goa', duration: '3N 2D', price: '₹20,000', image: '/goa_1.jpeg' },
    { id: 2, name: 'Maldives', duration: '4N 3D', price: '₹35,000', image: '/maldives_1.jpeg' },
    { id: 3, name: 'Kerala', duration: '5N 4D', price: '₹25,000', image: '/kerala_1.jpeg' },
    { id: 4, name: 'Manali', duration: '4N 3D', price: '₹18,000', image: '/northeast_1.jpeg' },
    { id: 5, name: 'Jaipur', duration: '2N 3D', price: '₹12,000', image: '/ladakh_1.jpeg' },
    { id: 6, name: 'Kashmir', duration: '5N 6D', price: '₹30,000', image: '/kashmire_1.jpeg' },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 360; // You can adjust this
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">
          Top-Rated Destinations in India
        </h2>

        <div className="relative scrollbar-hide">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 text-5xl rounded-full bg-red-500 text-white border border-red-600 transition-transform rotate-90"
          >
            <RiArrowDropDownLine />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="min-w-[340px] w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg relative group cursor-pointer"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 w-full flex flex-col items-start justify-center pl-5 text-white bg-black/60 backdrop-blur-xs h-28 text-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-3xl font-bold">{destination.name}</h3>
                  <p className="text-lg">{destination.duration}</p>
                  <p className="text-xl font-semibold">{destination.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
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

export default IndiaDestinations;
