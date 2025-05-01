"use client"
import React, { useState } from 'react'

function PackageItinery(itinerary) {
    const [open, setOpen] = useState(null);


    const toggleDropdown = (index) => {
        setOpen(open === index ? null : index);
    };

    return (

        <section className="w-full py-12 px-4">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">7-Day Itinerary</h2>

                {/* Day 1 */}
                <div className="space-y-10 text-lg text-gray-700">
                    <div className="cursor-pointer border-b pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(0)}
                        >
                            <h3 className="font-semibold text-xl">Day 1 - Airport Pick Up and Dhow Cruise</h3>
                            <span className={`transform ${open === 0 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 0 && (
                            <div className="mt-4 space-y-4">
                                <p>Arrive at Dubai Airport Terminal 1 for the start of your tour.</p>
                                <p>Meet our friendly driver who will warmly welcome you upon arrival.</p>
                                <p>Experience hassle-free assistance with your baggage as you proceed to the designated vehicle.</p>
                                <p>Enjoy a comfortable and safe ride to your chosen Hotel or Residence in Deira/Bur Dubai.</p>
                                <p>Unwind and relax as you spend a delightful evening on a Dhow cruise dinner tour.</p>
                                <p>Cruise in a traditional dhow featuring an air-conditioned lower deck and an open, airy upper deck.</p>
                                <p>Take in the breathtaking views of the city's skyline during the cruise.</p>
                                <p>Indulge in entertainment shows and savor a delicious dinner served on-board.</p>
                                <p>Immerse yourself in the magical atmosphere while cruising through the evening.</p>
                            </div>
                        )}
                    </div>

                    {/* Day 2 */}
                    <div className="cursor-pointer border-b pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(1)}
                        >
                            <h3 className="font-semibold text-xl">Day 2 - Desert Safari and BBQ Dinner</h3>
                            <span className={`transform ${open === 1 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 1 && (
                            <div className="mt-4 space-y-4">
                                <p>Pickup from your hotel in the afternoon for an exciting desert safari adventure.</p>
                                <p>Enjoy dune bashing in a 4x4 Land Cruiser, a thrilling ride over the golden sand dunes.</p>
                                <p>Try sandboarding or take a relaxing camel ride in the desert.</p>
                                <p>Experience an authentic BBQ dinner under the stars while enjoying live cultural performances.</p>
                                <p>End the evening with a relaxing ride back to your hotel.</p>
                            </div>
                        )}
                    </div>

                    {/* Day 3 */}
                    <div className="cursor-pointer border-b pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(2)}
                        >
                            <h3 className="font-semibold text-xl">Day 3 - City Tour and Shopping</h3>
                            <span className={`transform ${open === 2 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 2 && (
                            <div className="mt-4 space-y-4">
                                <p>Explore the city's famous landmarks, including the Burj Khalifa, Dubai Mall, and Dubai Fountain.</p>
                                <p>Visit traditional souks for shopping, where you can find local handicrafts, spices, and souvenirs.</p>
                                <p>Take a boat ride along the Dubai Creek for a scenic view of the city.</p>
                                <p>Enjoy a delicious lunch at a local restaurant, offering traditional Arabic cuisine.</p>
                            </div>
                        )}
                    </div>

                    {/* Day 4 */}
                    <div className="cursor-pointer border-b pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(3)}
                        >
                            <h3 className="font-semibold text-xl">Day 4 - Waterpark and Beach Day</h3>
                            <span className={`transform ${open === 3 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 3 && (
                            <div className="mt-4 space-y-4">
                                <p>Spend the day at one of Dubai's famous waterparks for some fun in the sun.</p>
                                <p>Enjoy water slides, lazy rivers, and wave pools for the entire family.</p>
                                <p>In the afternoon, relax at Jumeirah Beach and take in the views of the iconic Burj Al Arab.</p>
                                <p>Enjoy a beachside dinner with a view of the ocean.</p>
                            </div>
                        )}
                    </div>

                    {/* Day 5 */}
                    <div className="cursor-pointer border-b pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(4)}
                        >
                            <h3 className="font-semibold text-xl">Day 5 - Cultural Tour and Museum Visit</h3>
                            <span className={`transform ${open === 4 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 4 && (
                            <div className="mt-4 space-y-4">
                                <p>Visit the Dubai Museum to learn about the city's history and culture.</p>
                                <p>Take a tour of the Dubai Opera and enjoy the cultural richness of the city.</p>
                                <p>Visit the Al Fahidi Historical Neighborhood for a glimpse into Dubai's past.</p>
                                <p>End the day with a traditional Emirati dinner in a local restaurant.</p>
                            </div>
                        )}
                    </div>

                    {/* Day 6 */}
                    <div className="cursor-pointer border-b pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(5)}
                        >
                            <h3 className="font-semibold text-xl">Day 6 - Adventure Day at Atlantis</h3>
                            <span className={`transform ${open === 5 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 5 && (
                            <div className="mt-4 space-y-4">
                                <p>Spend the day at Atlantis The Palm, where you can visit the Aquaventure Waterpark.</p>
                                <p>Explore the Lost Chambers Aquarium and get up close with marine life.</p>
                                <p>Relax by the beach or enjoy fine dining at one of the world-class restaurants at Atlantis.</p>
                            </div>
                        )}
                    </div>

                    {/* Day 7 */}
                    <div className="cursor-pointer pb-3">
                        <div
                            className="flex items-center justify-between"
                            onClick={() => toggleDropdown(6)}
                        >
                            <h3 className="font-semibold text-xl">Day 7 - Free Day and Departure</h3>
                            <span className={`transform ${open === 6 ? 'rotate-180' : ''} transition-all`}>
                                &#9660;
                            </span>
                        </div>
                        {open === 6 && (
                            <div className="mt-4 space-y-4">
                                <p>Enjoy your free day for last-minute shopping or sightseeing.</p>
                                <p>Relax at the hotel before your departure.</p>
                                <p>Transfer to Dubai International Airport for your flight back home.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageItinery