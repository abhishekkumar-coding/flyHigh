"use client"
import EnquiryForm from '@/app/components/EnquiryForm';
import PackageFaqs from '@/app/components/PackageFaqs';
import PackageFlyHigh from '@/app/components/PackageFlyHigh';
import PackageHero from '@/app/components/PackageHero';
import PackageInclusions from '@/app/components/PackageInclusions';
import PackageItinery from '@/app/components/PackageItinery';
import PackagePolocies from '@/app/components/PackagePolocies';
import PackageThings from '@/app/components/PackageThings';
import React, { useEffect, useState } from 'react'

function page() {

    const [showForm, setShowForm] = useState(false);

    const onClose = () => {
        setShowForm(false)
        console.log("form closed")
    }

    const btnClick = () => {
        setShowForm(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowForm(true)
        }, 3000)
    }, [])

    const heroText = {
        title: "Enchanting Bali Getaway &ndash; 6 Nights / 7 Day",
        image: "/maldive_pkg_1.jpeg",
        description: "Experience Bali's beauty with flights, 6-night stay, breakfast, scenic tours, water sports, and iconic landmarks like Tanah Lot and Ubud.",
        title2: "Bali Fixed Departure Tour",
        description2: "Explore Bali with a 6-night package featuring flights, transfers, accommodation, and guided tours to Ubud, Nusa Penida, Tanah Lot, Bali Swing, and more. Enjoy water sports and cultural experiences.",
    }

    const days = "6 Nights / 7 Days Itinerary";

    const itinerary = [
        {
            day: "Day 1 - Arrival at Bali",
            details: [
                "Arrive at Ngurah Rai Airport, Denpasar, Bali.",
                "Meet our representative and transfer to the hotel.",
                "Relax and refresh at the hotel."
            ]
        },
        {
            day: "Day 2 - Full Day Ubud Village, Tegalalang Rice Terraces with Bali Swing and Teggunangan Waterfalls",
            details: [
                "Visit Celuk (gold and silver works) and Mas (woodcarvings).",
                "Explore Ubud and its surrounding villages, rice terraces, and lush valleys.",
                "Photograph at the iconic Tegalalang Rice Terraces.",
                "Experience the famous Aloha Swing for stunning Instagram-worthy pictures.",
                "Visit Teggunangan Waterfalls."
            ]
        },
        {
            day: "Day 3 - Water Sports Half Day & Tanah Lot Temple",
            details: [
                "Enjoy thrilling water sports: Banana Boat Ride, Jet Ski, and Parasailing.",
                "After water activities, visit the Tanah Lot Temple, known for its oceanfront location.",
                "Shopping for Balinese handicrafts."
            ]
        },
        {
            day: "Day 4 - Nusa Penida Island Day Trip",
            details: [
                "Embark on a full day West Penida Tour.",
                "Explore Broken Beach, Kelingking Cliff, and other scenic spots.",
                "Enjoy a local lunch and relax on beautiful beaches.",
                "Optional snorkeling at extra cost."
            ]
        },
        {
            day: "Day 5 - Half Day Ubud Palace and Ubud Market Tour",
            details: [
                "Visit Puri Saren Ubud Palace, home of the royal family.",
                "Explore Ubud Market for wood carvings, textiles, and souvenirs.",
                "Continue to Puri Lukisan Museum, showcasing Balinese art."
            ]
        },
        {
            day: "Day 6 - Day at Leisure",
            details: [
                "Free day to explore Bali at your own pace."
            ]
        },
        {
            day: "Day 7 - Departure from Bali",
            details: [
                "Enjoy breakfast and transfer to the airport for your departure flight."
            ]
        }
    ];



    const inclusions = [
        "6 Nights accommodation at a 5* hotel in Bali on double sharing basis",
        "Daily breakfast included",
        "Return airport transfers from/to Ngurah Rai Airport",
        "Welcome drink upon arrival",
        "Assistance at the airport by hotel representatives",
        "A 500ml bottle of water per person per day in the room",
        "Tea/Coffee making facilities (1 set per room per day)",
        "Access to the hotel&rsquo;s gym (excluding personal trainer)",
        "Complimentary land sports: billiards, table tennis, beach volleyball, badminton",
        "Complimentary non-motorized water sports: Banana Boat Ride, Jet Ski, Parasailing",
        "All taxes and resort service charges included"
    ];



    const things = [
        "Relax on Bali's stunning beaches and soak up the sun",
        "Indulge in water sports like jet skiing, parasailing, and banana boat rides",
        "Experience a thrilling Aloha Swing over the rice terraces",
        "Visit iconic landmarks like Tanah Lot Temple and Ubud Palace",
        "Explore the lush Tegalalang Rice Terraces and Tegunangan Waterfalls",
        "Discover the charm of Ubud Market and shop for traditional souvenirs",
        "Go on a day trip to Nusa Penida Island and visit Broken Beach and Kelingking Cliff",
        "Pamper yourself with a rejuvenating spa session at the resort",
        "Immerse in Bali's rich culture with guided tours to temples and villages"
    ];


    const faqs = [
        {
            question: "What is included in the Bali 6-Night Package?",
            answer: "The package includes 6 nights of accommodation, return flights, airport transfers, daily breakfast, guided tours to top destinations like Ubud, Tanah Lot, Nusa Penida, and water sports activities."
        },
        {
            question: "Is airfare included in this package?",
            answer: "Yes, return flights from your home country to Bali are included in the package."
        },
        {
            question: "What is the meal plan included in this package?",
            answer: "The package includes daily breakfast, with additional meals like lunch included on selected days during tours."
        },
        {
            question: "Are airport transfers included?",
            answer: "Yes, return airport transfers from Ngurah Rai Airport to your hotel are included."
        },
        {
            question: "Are water sports activities included?",
            answer: "Yes, the package includes thrilling water sports like jet skiing, parasailing, and banana boat rides."
        },
        {
            question: "Is this package suitable for honeymooners?",
            answer: "Yes, honeymooners can enjoy a romantic experience with private tours and beach activities."
        },
        {
            question: "Do I need a visa to visit Bali?",
            answer: "Indian citizens can get a visa on arrival for Bali, which is valid for 30 days."
        },
        {
            question: "Can this package be customized?",
            answer: "Yes, the package can be customized with additional nights, upgraded accommodations, or personalized tours."
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-yellow-50 to-white">
            {/* Hero Section */}
            <PackageHero btnClick={btnClick} heroText={heroText} />

            {/* Itinerary */}
            <PackageItinery itinerary={itinerary} days={days} />

            {/* Inclusions */}
            <PackageInclusions inclusions={inclusions} />

            {/* Things to Do */}
            <PackageThings things={things} />
            {/* Why FlyHigh */}
            <PackageFlyHigh />

            {/* FAQs */}
            <PackageFaqs faqs={faqs} />




            {/* Booking Form */}
            {showForm && <EnquiryForm onClose={onClose} />}

        </div>
    )
}

export default page