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
        title: "Luxury Stay in Maldives!",
        image: "/maldive_pkg_1.jpeg",
        description: "Escape to the tranquil Thulhagiri Island Resort with a 3-night full board stay, speedboat transfers, honeymoon perks, and complimentary water sports &ndash; all starting at just ₹44,999 per person.",
        title2: "Escape to Thulhagiri: Maldives Silver Package Experience",
        description2: "Enjoy a luxurious 3-night stay at the 5-star Thulhagiri Island Resort in the Maldives with full board meals, speedboat transfers, water activities, and exclusive honeymooner perks—all starting at just ₹44,999 per person on a double-sharing basis.",
    }

    const days = "4N Itinerary";

    const itinerary = [
        {
          day: "Day 1 - Arrival in Maldives",
          details: [
            "Arrive at Velana International Airport, Maldives.",
            "Meet the hotel representative and transfer by speedboat to Thulhagiri Island Resort.",
            "Enjoy a welcome drink on arrival and check into your room.",
            "Relax and explore the beautiful surroundings of the island resort."
          ]
        },
        {
          day: "Day 2 - Leisure and Water Activities",
          details: [
            "Enjoy a full day at leisure on the island.",
            "Take part in complimentary water sports like windsurfing and canoeing.",
            "Make use of the resort&rsquo;s land sports facilities including beach volleyball, table tennis, and billiards.",
            "Indulge in breakfast, lunch, and dinner as per the full board meal plan."
          ]
        },
        {
          day: "Day 3 - Island Relaxation and Honeymoon Specials",
          details: [
            "Savor your meals under the full board plan (breakfast, lunch, and dinner).",
            "Relax at the beach or explore marine life with optional water activities (at extra cost).",
            "Honeymooners enjoy a complimentary bottle of sparkling wine and a fruit basket in their room (wedding within 6 months)."
          ]
        },
        {
          day: "Day 4 - Departure",
          details: [
            "Enjoy breakfast at the resort.",
            "Check-out and transfer back to Velana International Airport by speedboat.",
            "Depart with unforgettable memories of your Maldives getaway."
          ]
        }
      ];
      


      const inclusions = [
        "3 Nights accommodation at Thulhagiri Island Resort 5* on double sharing basis",
        "Full board meal plan (Breakfast, Lunch, and Dinner)",
        "Return airport transfers by speedboat from/to Velana International Airport",
        "Welcome drink on arrival",
        "Assistance at the airport by hotel representatives",
        "A 500ml bottle of water per person per day in the room",
        "Tea/Coffee making facilities (1 set per room per day)",
        "Bottle of Sparkling Wine and Fruit Basket for honeymooners (wedding not older than 6 months)",
        "Access to gym (excluding personal trainer)",
        "Complimentary land sports: billiards/snooker, table tennis, beach volleyball, badminton",
        "Complimentary non-motorized water sports: windsurfing and canoeing",
        "All taxes and resort service charges included"
      ];
      


      const things = [
        "Relax on pristine white-sand beaches",
        "Enjoy water sports like windsurfing and canoeing",
        "Experience breathtaking sunsets from the island",
        "Try local Maldivian cuisine at the resort",
        "Snorkel in crystal-clear waters and explore vibrant marine life",
        "Take romantic beach walks or dine under the stars",
        "Pamper yourself with a spa session at the resort",
        "Go on a dolphin-watching excursion (optional)"
      ];
      
      const faqs = [
        {
          question: "What is included in the Maldives Silver Package?",
          answer: "The package includes 3 nights at Thulhagiri Island Resort 5* on a full board meal plan, airport transfers by speedboat, welcome drinks, water and tea/coffee facilities, and complimentary activities like windsurfing and canoeing."
        },
        {
          question: "Is airfare included in this package?",
          answer: "No, airfare is not included. You will need to book your flights to and from the Maldives separately."
        },
        {
          question: "What is the meal plan included in this package?",
          answer: "The package includes a Full Board meal plan which covers Breakfast, Lunch, and Dinner at the resort."
        },
        {
          question: "Are airport transfers included?",
          answer: "Yes, round-trip speedboat transfers between Velana International Airport and the resort are included in the package."
        },
        {
          question: "Is this package suitable for honeymooners?",
          answer: "Yes, honeymooners receive special inclusions such as a bottle of sparkling wine and a fruit basket, provided the wedding is not older than 6 months."
        },
        {
          question: "Are water activities included?",
          answer: "Yes, complimentary windsurfing and canoeing are included. Other activities like diving or excursions may be available at extra cost."
        },
        {
          question: "Do I need a visa to visit the Maldives?",
          answer: "Indian citizens receive a free visa on arrival in the Maldives, valid for 30 days."
        },
        {
          question: "Can this package be customized?",
          answer: "Yes, the package can be customized with extra nights, upgraded rooms, or additional activities upon request."
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