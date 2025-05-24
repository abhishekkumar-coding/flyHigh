import React from 'react'

function DestinationHero({ heroText }) {
  return (
    <section
      className="w-full h-[60vh] relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroText.image})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="w-full h-full absolute top-0 left-0"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {heroText.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium max-w-3xl drop-shadow-md">
          {heroText.description}
        </p>
        {/* Optional CTA Button */}
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition shadow-md">
          Start Your Journey
        </button>
      </div>
    </section>

  )
}

export default DestinationHero