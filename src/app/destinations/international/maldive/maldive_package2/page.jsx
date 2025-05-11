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
        title: "Silver Luxury Escape to Medhufushi Island Resort",
        image: "/maldive_pkg_2.jpeg",
        description: "Enjoy a 3-night all-inclusive stay at 5★ Medhufushi Island Resort with transfers, drinks, excursions & honeymoon perks &ndash; from ₹49,999 pp.",
        title2: "Silver Paradise Getaway at Medhufushi Island Resort – 3 Nights of Luxury",
        description2: "3-night all-inclusive stay at 5★ Medhufushi Island Resort from ₹49,999 pp – with transfers, drinks, excursions & honeymoon perks.",
    }

    const days = "4 days / 3 nights";

    const itinerary = [
        {
            day: "Day 1 - Arrival in Maldives",
            details: [
                "Arrive at Velana International Airport, Maldives.",
                "Meet the resort representative and transfer to Medhufushi Island Resort by speedboat.",
                "Check-in, receive a welcome drink, and settle into your overwater or beach villa.",
                "Spend the rest of the day relaxing or exploring the island’s stunning scenery."
            ]
        },
        {
            day: "Day 2 - Water Sports & Excursions",
            details: [
                "Start the day with breakfast followed by leisure activities.",
                "Enjoy complimentary water sports like windsurfing (beginner equipment).",
                "Participate in land sports: tennis, squash, badminton, or table tennis.",
                "Join one of the complimentary excursions such as a sunset Dhoni cruise.",
                "Relish all meals and unlimited drinks with the all-inclusive plan."
            ]
        },
        {
            day: "Day 3 - Honeymoon Perks & Romantic Dinner",
            details: [
                "Enjoy breakfast, lunch, and dinner under the all-inclusive plan.",
                "Unwind with another optional excursion or relax by the beach.",
                "Honeymooners receive a fruit basket and bed decoration from Reethi Garden.",
                "End the day with a romantic candlelight dinner and a bottle of wine at a selected restaurant."
            ]
        },
        {
            day: "Day 4 - Departure",
            details: [
                "Have a final breakfast at the resort.",
                "Check out and transfer by speedboat to Velana International Airport.",
                "Depart with beautiful memories of your Maldives retreat."
            ]
        }
    ];



    const inclusions = [
        "3 Nights accommodation at Medhufushi Island Resort 5★ on double sharing basis",
        "All-Inclusive Meal Plan (All Meals + Unlimited alcoholic and non-alcoholic drinks)",
        "Return airport transfers by speedboat from/to Velana International Airport",
        "Complimentary WIFI for all guests",
        "02 Complimentary excursions per person once during the stay (including Sunset Dhoni Cruise)",
        "Windsurfing with beginner equipment",
        "Complimentary access to Tennis, Squash, Badminton, and Table Tennis",
        "Honeymoon benefits: 1 Fruit Basket during the stay",
        "1 Bed decoration from Reethi Garden for honeymooners",
        "1 Special Candle Light Dinner with 1 Bottle of wine at the restaurant",
        "All taxes and resort service charges included"
    ];



    const things = [
        "Unwind on the serene white-sand beaches of Medhufushi Island",
        "Enjoy complimentary water sports like windsurfing (beginner gear)",
        "Join a sunset Dhoni cruise for stunning evening views",
        "Savor unlimited drinks and delicious meals with the all-inclusive plan",
        "Snorkel in crystal-clear lagoons and discover vibrant marine life",
        "Experience a romantic candlelight dinner by the ocean",
        "Relax with a rejuvenating spa session at the island resort",
        "Explore land sports like tennis, squash, and badminton"
    ];


    const faqs = [
        {
            question: "What is included in the Silver Package at Medhufushi Island Resort?",
            answer: "The package includes 3 nights at Medhufushi Island Resort 5★ on a double sharing basis, an all-inclusive meal plan (all meals + unlimited drinks), return speedboat transfers, honeymoon perks, water and land sports, and two complimentary excursions, among other benefits."
        },
        {
            question: "Is airfare included in this package?",
            answer: "No, airfare is not included. You will need to book your flights to and from Velana International Airport separately."
        },
        {
            question: "What is the meal plan included in this package?",
            answer: "The package includes an all-inclusive meal plan, which covers breakfast, lunch, and dinner, along with unlimited alcoholic and non-alcoholic drinks throughout your stay."
        },
        {
            question: "Are airport transfers included?",
            answer: "Yes, the package includes round-trip speedboat transfers between Velana International Airport and Medhufushi Island Resort."
        },
        {
            question: "Is this package suitable for honeymooners?",
            answer: "Yes, honeymooners will enjoy special benefits such as a fruit basket, bed decoration, and a candlelight dinner with a bottle of wine (valid for weddings within 6 months)."
        },
        {
            question: "Are water activities included?",
            answer: "Yes, complimentary windsurfing and canoeing are included. Additional activities like snorkeling or diving may be available at an extra cost."
        },
        {
            question: "Do I need a visa to visit the Maldives?",
            answer: "Indian citizens receive a free visa on arrival in the Maldives, valid for 30 days."
        },
        {
            question: "Can this package be customized?",
            answer: "Yes, the package can be customized with additional nights, upgraded rooms, or special excursions upon request."
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