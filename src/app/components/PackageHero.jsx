import Link from 'next/link'
import React from 'react'

function PackageHero() {
    return (
        <>
            <section
                className="w-full h-[65vh] relative bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('/dubai_imgs/desert_safari_2.webp')` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white max-w-3xl px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Desert Safari Adventure</h1>
                    <p className="text-lg mb-6">Thrilling experience in the golden dunes of Dubai</p>
                    <Link href="#form-section">
                        <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold">
                            Book Now
                        </button>
                    </Link>
                </div>
            </section>
            {/* Short Description */}
            <section className="w-full  py-12 px-4 ">
                <div className="max-w-5xl bg-gradient-to-l from-yellow-600 to-white p-4 mx-auto text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-yellow-800 mb-6">Desert Safari Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Embark on an unforgettable desert adventure! Feel the adrenaline rush with thrilling dune bashing, ride camels across golden sands, and indulge in a delicious BBQ dinner while enjoying traditional cultural performances under the star-lit sky.
                    </p>
                </div>
            </section>
        </>
    )
}

export default PackageHero