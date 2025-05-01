import React from 'react'

function Dubai_hero() {
  return (
    <section
    className="w-full h-[60vh] relative bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url("/dubai_imgs/dubai_bg_1.jpeg")` }}
  >
    {/* Dark Gradient Overlay */}
    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
  
    {/* Text Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        Discover the Magic of Dubai
      </h1>
      <p className="mt-4 text-lg md:text-xl font-medium max-w-3xl drop-shadow-md">
        Experience the perfect blend of tradition and modern marvels in the heart of the UAE.
        From towering skyscrapers to golden deserts, Dubai offers an unforgettable adventure.
      </p>
      {/* Optional CTA Button */}
      <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition shadow-md">
        Start Your Journey
      </button>
    </div>
  </section>
  
  )
}

export default Dubai_hero