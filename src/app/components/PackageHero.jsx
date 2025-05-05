import Link from 'next/link'
import React from 'react'

function PackageHero({ btnClick, heroText }) {
    const { title, image, description, title2, description2 } = heroText
    return (
        <>
            <section
                className="w-full h-[65vh] relative bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white max-w-3xl px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-lg mb-6">{description}</p>
                    <button onClick={btnClick} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold">
                        Send Enquiry
                    </button>
                </div>
            </section>
            {/* Short Description */}
            <section className="w-full  py-12 px-4 ">
                <div className="max-w-5xl bg-gradient-to-l from-yellow-600 to-white p-4 mx-auto text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-yellow-800 mb-6">{title2}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {description2}
                    </p>
                </div>
            </section>
        </>
    )
}

export default PackageHero