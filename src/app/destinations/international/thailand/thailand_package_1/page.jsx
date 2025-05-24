
"use client"
import React, { useEffect, useState } from 'react';
import PackageHero from '@/app/components/PackageHero';

function thailand_package_1() {


    const heroText = {
        title: "Northern Thailand Family Escape",
        image: "/thailand/thailand_pkg_card_1.png",
        description2: "Discover the beauty of Krabi and Phuket in this 6-day Thailand getaway—featuring island tours, serene beaches, historic temples, and vibrant markets.",
    }

    const days = "6 Days / 5 Nights Itinerary";

    const itinerary = [
        {
            day: "Day 1 - Phuket Arrival | Transferred to Krabi | Discover the charm of Southern Thailand",
            details: [
                "Arrive at Phuket Airport and meet your representative for a 2-hour transfer to Krabi.",
                "Check-in at your Krabi hotel and relax.",
                "Optional activities: Rent a boat from Ao Nang for island-hopping or visit the Emerald Pool at Thung Teao Forest Natural Park.",
                "Explore Krabi Town&apos;s local cafes, markets, and bars.",
                "Overnight stay at hotel in Krabi."
            ]
        },
        {
            day: "Day 2 - Explore Krabi&apos;s Four Islands | Experience tropical bliss",
            details: [
                "Enjoy breakfast at the hotel.",
                "Get picked up around 8:00 AM and transferred to the port.",
                "Take a speedboat to visit Phranang Cave, Chicken Island, Tup Island, and Poda Island.",
                "Lunch included during the island tour.",
                "Swim, snorkel, or relax on pristine beaches.",
                "Return to hotel and overnight stay in Krabi."
            ]
        },
        {
            day: "Day 3 - Journey to Phuket | Embrace the charm of the Pearl of Andaman",
            details: [
                "Have breakfast at your Krabi hotel.",
                "Private transfer to Phuket with scenic coastal views.",
                "Check-in at your Phuket hotel and relax.",
                "Explore Phuket at your own pace in the evening.",
                "Overnight stay in Phuket."
            ]
        },
        {
            day: "Day 4 - Phuket City Tour | Discover the cultural gems of the island",
            details: [
                "Begin your day with breakfast at the hotel.",
                "Visit Karon View Point, Big Buddha, Wat Chalong Temple, and Phuket Old Town.",
                "Explore the Phuket Weekend Market (Naka Market) for shopping and local cuisine.",
                "Return to your hotel in the evening.",
                "Overnight stay in Phuket."
            ]
        },
        {
            day: "Day 5 - Phi Phi Island & Maya Bay Excursion | Paradise awaits",
            details: [
                "After breakfast, get ready for a full-day island tour.",
                "Visit iconic spots like Maya Bay, Loh Samah Bay, and Viking Cave.",
                "Relax on white sandy beaches and swim in turquoise waters.",
                "Enjoy lunch during the tour.",
                "Return to hotel in Phuket by evening.",
                "Overnight stay in Phuket."
            ]
        },
        {
            day: "Day 6 - Departure | Farewell to Thailand",
            details: [
                "Enjoy breakfast at the hotel.",
                "Private transfer to Phuket International Airport.",
                "Depart with unforgettable memories of Thailand."
            ]
        }
    ];




    const inclusions = [
        "Accommodation: Enjoy 2 nights in Bangkok and 2 nights in Pattaya with comfortable stays in both cities.",
        "Meals: Breakfast included as per the itinerary, along with a memorable one-night cruise dinner in Bangkok.",
        "Transfers: Seamless airport pick-up and drop-offs aligned with flight timings, plus internal transfers as per the itinerary.",
        "Transport: Comfortable and hygienic vehicle provided for all sightseeing activities.",
        "Guide: A professional driver-cum-guide to enhance your exploration with local insights and assistance."
    ];




    const thingsToDo = [
        "Explore Phi Phi Islands: Discover the stunning beaches, crystal-clear waters, and vibrant marine life on a Phi Phi Island tour.",
        "Full Moon Party at Koh Phangan: Experience the legendary Full Moon Party with its vibrant nightlife, beach parties, and exciting atmosphere.",
        "Relax in Koh Samui: Enjoy a day at leisure in Koh Samui, perfect for unwinding on beautiful beaches, exploring local markets, or indulging in a spa day.",
        "Visit Ang Thong National Marine Park: Take a boat trip to this stunning marine park, known for its breathtaking landscapes, snorkeling spots, and kayaking opportunities.",
        "Enjoy Krabi Four Island Tour: Explore the beautiful islands around Krabi, including Phra Nang, Chicken Island, Tup Island, and Poda Island, with opportunities for snorkeling and sunbathing.",
        "Discover Koh Samui&apos;s Night Markets: Browse local night markets for unique souvenirs, delicious street food, and a glimpse of the local culture.",
        "Relax at Patong Beach: Spend some time at Patong Beach in Phuket, enjoying the sun, sea, and vibrant nightlife.",
        "Visit the Big Buddha Temple in Koh Samui: Explore this iconic temple and its impressive statue, offering panoramic views of the island.",
        "Snorkel or Dive in Krabi: Discover the underwater beauty of Krabi&apos;s clear waters, teeming with colorful marine life.",
        "Explore Phuket Old Town: Wander through the charming streets of Phuket Old Town, known for its historic Sino-Portuguese architecture, boutique shops, and local eateries."
    ];


    const faqs = [
        {
            question: "What is included in the travel package?",
            answer: "The package includes accommodation, breakfast as per the itinerary, all internal transfers, sightseeing tours, and the assistance of a professional driver-cum-guide."
        },
        {
            question: "Are flights included in this package?",
            answer: "No, international and domestic flights are not included in this package unless specified at the time of booking."
        },
        {
            question: "Which locations are covered in this package?",
            answer: "The package covers Krabi and Phuket, including attractions such as Phi Phi Islands, Big Buddha, Wat Chalong Temple, Phuket Old Town, and Krabi's Four Islands."
        },
        {
            question: "What kind of accommodation is provided?",
            answer: "Comfortable hotel accommodation is provided for 2 nights in Krabi and 3 nights in Phuket, with daily breakfast included."
        },
        {
            question: "Is airport pick-up and drop-off included?",
            answer: "Yes, private airport transfers from Phuket International Airport are included at both arrival and departure."
        }
    ];



    // const policies = [
    //     {
    //         title: "Confirmation Policy",
    //         content: [
    //             "The customer receives a confirmation voucher via email within 24 hours of successful booking.",
    //             "In case the preferred slots are unavailable, an alternate schedule of the customer&rsquo;s preference will be arranged and a new confirmation voucher will be sent via email.",
    //             "Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.",
    //         ],
    //     },
    //     {
    //         title: "Refund Policy",
    //         content: [
    //             "The applicable refund amount will be processed within 10 business days.",
    //             "All applicable refunds will be done in the traveler's Bank Account.",
    //         ],
    //     },
    //     {
    //         title: "Cancellation Policy",
    //         content: [
    //             "If cancellations are made 30 days before the date of travel, 25% of the total tour cost will be charged as cancellation fees.",
    //             "If cancellations are made 15 to 30 days before the date of travel, 50% of the total tour cost will be charged.",
    //             "If cancellations are made 0 to 15 days before the date of travel, 100% of the total tour cost will be charged.",
    //         ],
    //     },
    //     {
    //         title: "Payment Terms Policy",
    //         content: [
    //             "The applicable refund amount will be processed within 10 business days.",
    //             "100% of the total tour cost must be paid 0 days before the date of booking.",
    //         ],
    //     },
    // ];


    return (
        <div className="w-full">
            {/* Hero Section */}
            <PackageHero itinerary={itinerary} heroText={heroText} days={days} inclusions={inclusions} things={thingsToDo} faqs={faqs} />

        </div>
    );
}

export default thailand_package_1;
