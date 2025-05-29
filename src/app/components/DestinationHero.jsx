import React from 'react'

function DestinationHero({ heroText }) {
  return (
    <section
      className="w-full h-[60vh] relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroText.heroImage})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="w-full h-full absolute top-0 left-0"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          {heroText.title}
        </h1>
      </div>
    </section>

  )
}

export default DestinationHero