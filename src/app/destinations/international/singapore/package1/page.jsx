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
        title: "Singapore & Malaysia City Delight with Private Tours",
        image: "/singapore/singapore_pkg_1.jpeg", // Ensure this image exists in your /public folder
        description:
            "Explore Singapore&rsquo;s iconic sites and Malaysia&rsquo;s thrilling theme parks in a 7-night private tour with luxury stays, attractions & more &ndash; from ₹68,351 pp.",
        title2:
            "Explore Singapore & Malaysia &ndash; 7-Night Tour with Universal Studios, Sentosa, Genting, and Sunway Lagoon",
        description2:
            "Private tour package featuring top attractions in Singapore & Malaysia, luxury stays, transfers, and theme parks &ndash; all from ₹68,351 per person.",
    };


    const days = "9 days / 8 nights";

    const itinerary = [
        {
            day: "Day 1 - Arrival in Singapore + City Tour + Gardens by the Bay",
            details: [
                "Arrive at Singapore Airport.",
                "Private transfer to Hotel Boss and check-in.",
                "Begin with a private Singapore city tour.",
                "Visit Gardens by the Bay – Flower Dome & Cloud Forest.",
                "Evening at leisure or explore nearby areas."
            ]
        },
        {
            day: "Day 2 - Sentosa Island Adventures",
            details: [
                "Breakfast at hotel.",
                "Enjoy a private transfer to Sentosa Island.",
                "Experience the Cable Car ride, Sky Helix, and Wings of Time show.",
                "Evening return to hotel with a dinner voucher."
            ]
        },
        {
            day: "Day 3 - Cruise Departure",
            details: [
                "Breakfast at hotel and check-out.",
                "Private transfer to cruise terminal.",
                "Board your cruise and begin your sea journey.",
                "Meals and accommodation on cruise (booked by own)."
            ]
        },
        {
            day: "Day 4 - Cruise Sailing Day",
            details: [
                "Full day sailing experience on cruise.",
                "Enjoy onboard entertainment, meals, and relaxation.",
                "Explore the ship’s amenities and ocean views."
            ]
        },
        {
            day: "Day 5 - Cruise Arrival + Universal Studios",
            details: [
                "Arrive back in Singapore and private transfer to Hotel Boss.",
                "Check-in and refresh.",
                "Full-day entry to Universal Studios Singapore.",
                "Evening return to hotel with a dinner voucher."
            ]
        },
        {
            day: "Day 6 - Transfer from Singapore to Kuala Lumpur",
            details: [
                "Breakfast at hotel and check-out.",
                "Private coach transfer from Singapore to Kuala Lumpur.",
                "Arrival in KL and check-in at Hotel Grand Continental.",
                "Evening at leisure or explore city surroundings."
            ]
        },
        {
            day: "Day 7 - Genting Highlands + Batu Caves + Cable Car",
            details: [
                "Breakfast at hotel.",
                "Private full-day tour to Genting Highlands.",
                "Visit Batu Caves and ride the Genting cable car.",
                "Evening return to hotel with included dinner."
            ]
        },
        {
            day: "Day 8 - Sunway Lagoon Theme Park",
            details: [
                "Breakfast at hotel.",
                "Full-day entry to Sunway Lagoon – enjoy 6 theme parks.",
                "Return to hotel in the evening.",
                "Dinner included at the hotel or nearby partner restaurant."
            ]
        },
        {
            day: "Day 9 - Departure via Putrajaya",
            details: [
                "Breakfast and check-out from hotel.",
                "Enroute private Putrajaya sightseeing tour.",
                "Drop off at Kuala Lumpur International Airport.",
                "Departure with cherished memories of your holiday."
            ]
        }
    ];




    const inclusions = [
        "3 Nights accommodation at Hotel Boss, Singapore with breakfast",
        "3 Nights accommodation at Grand Continental, Kuala Lumpur with breakfast",
        "Return airport transfers in Singapore and Kuala Lumpur (Private basis)",
        "Return cruise terminal transfers (Private basis)",
        "Singapore City Tour with Gardens by the Bay (Flower Dome + Cloud Forest)",
        "Sentosa Package: Cable Car, Sky Helix, and Wings of Time show",
        "Universal Studios Singapore full-day ticket",
        "One-way coach transfer from Singapore to Kuala Lumpur",
        "Genting Highlands Day Trip with Batu Caves and cable car ride",
        "Sunway Lagoon Theme Park full-day access (6 parks)",
        "Putrajaya sightseeing tour en route to the airport",
        "2 Dinner vouchers in Singapore",
        "3 Dinners in Kuala Lumpur",
        "All tours and transfers on a private basis",
        "All applicable taxes (excluding GST & TCS)"
    ];


    const things = [
        "Explore Singapore’s top attractions including the futuristic Gardens by the Bay",
        "Enjoy thrilling rides and shows at Universal Studios Singapore",
        "Soar above Sentosa on a cable car and experience the Sky Helix and Wings of Time",
        "Sail on a luxurious cruise (booked separately) with exciting onboard activities",
        "Take a scenic cable car ride to Genting Highlands and visit the iconic Batu Caves",
        "Dive into fun at Sunway Lagoon's 6 amazing theme parks in Malaysia",
        "Relax in 3-star comfort at hand-picked hotels with daily breakfast",
        "Benefit from private transfers throughout for a smooth, stress-free journey",
        "Discover Putrajaya’s unique architecture during your farewell city tour"
    ];


    const faqs = [
        {
            question: "Is airfare included in this package?",
            answer: "No, international airfare is not included. You will need to book your flights to and from Singapore and Malaysia separately."
        },
        {
            question: "What meals are included in the package?",
            answer: "Daily breakfast is included at all hotels. Additionally, you will receive 2 dinner vouchers in Singapore and 3 dinners in Kuala Lumpur as part of the package."
        },
        {
            question: "Are airport and intercity transfers provided?",
            answer: "Yes, the package includes private airport transfers in both Singapore and Kuala Lumpur, as well as a one-way coach transfer from Singapore to Kuala Lumpur."
        },
        {
            question: "Are the theme park tickets included?",
            answer: "Yes, full-day access to Universal Studios Singapore and Sunway Lagoon Theme Park (6 parks) is included in the package."
        },
        {
            question: "Is the Sentosa Island experience included?",
            answer: "Yes, the Sentosa package includes Cable Car rides, Sky Helix, and the Wings of Time show."
        },
        {
            question: "Are visa fees included in the package?",
            answer: "Visa fees are not included. Indian citizens can typically enter Singapore and Malaysia with an e-visa or visa on arrival, depending on the latest regulations."
        },
        {
            question: "Can this package be customized?",
            answer: "Yes, we can customize the package by adding more nights, upgrading hotel categories, or including other tours and activities upon request."
        },
        {
            question: "Are the tours conducted privately?",
            answer: "Yes, all city tours and transfers mentioned in the itinerary are on a private basis for your comfort and convenience."
        },
        {
            question: "Is the cruise included in the package?",
            answer: "The cruise is not included in this package. However, we can assist in booking a cruise separately if desired."
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