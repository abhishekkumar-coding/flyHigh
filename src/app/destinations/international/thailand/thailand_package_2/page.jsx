
"use client"
import React, { useEffect, useState } from 'react';
import PackageHero from '@/app/components/PackageHero';

function thailand_package_1() {


  const heroText = {
    title: "7-Day Thailand Island Escape: Phuket, Koh Samui & Krabi",
    image: "/thailand/thailand_pkg_card_2.png",
    description2: "Experience Thailand&apos;s top islands with beach fun, island tours, and the iconic Full Moon Party—all in one unforgettable week.",
  }

  const days = "7 Days / 6 Nights Itinerary";

  const itinerary = [
    {
      day: "Day 1 - Arrival in Phuket | Relax and Settle In",
      details: [
        "Arrive in Phuket and get picked up from the airport.",
        "Transfer to your hotel and complete check-in.",
        "Relax and unwind after your journey."
      ]
    },
    {
      day: "Day 2 - Full Day Phi Phi Island Tour",
      details: [
        "07:30: Hotel pickup in Phuket.",
        "08:30: Transfer to Phuket Boat Lagoon Marina; enjoy light refreshments.",
        "09:00: Visit Maya Bay, Monkey Beach, Pileh Cove, Viking Cave, and Loh Samah Bay.",
        "12:30: Buffet lunch at Phi Phi Don Island.",
        "Afternoon snorkeling at a secluded spot.",
        "15:00: Visit Khai Island for swimming, snorkeling, sunbathing, and optional water sports.",
        "17:00: Return to Phuket marina and transfer back to hotel."
      ]
    },
    {
      day: "Day 3 - Transfer to Koh Samui by Ferry | Full Moon Party at Koh Phangan",
      details: [
        "Enjoy breakfast and check out from your Phuket hotel.",
        "Ferry transfer from Phuket to Koh Samui.",
        "Arrival and hotel transfer in Koh Samui.",
        "Check-in and relax.",
        "Evening at leisure or prepare for Full Moon Party."
      ]
    },
    {
      day: "Day 4 - Leisure Day in Koh Samui",
      details: [
        "Spend the day at leisure exploring Koh Samui at your own pace.",
        "Relax on beaches or try water sports like snorkeling and scuba diving.",
        "Optional tours to explore island attractions."
      ]
    },
    {
      day: "Day 5 - Ferry Transfer from Koh Samui to Krabi",
      details: [
        "Check out from your Koh Samui hotel.",
        "Transfer to ferry terminal and travel to Krabi.",
        "Arrival in Krabi and transfer to your hotel.",
        "Relax and enjoy the rest of the day at leisure."
      ]
    },
    {
      day: "Day 6 - Krabi Four Island Tour",
      details: [
        "Visit Koh Tup Island with its tidal sandbank.",
        "Explore Koh Gai (Chicken Island) with unique rock formations.",
        "Snorkel and swim in clear waters.",
        "Enjoy picnic lunch on Koh Poda Island.",
        "Visit Phra Nang Cave Beach for cave exploration and swimming.",
        "Return to Krabi hotel by evening."
      ]
    },
    {
      day: "Day 7 - Transfer to Phuket & Departure",
      details: [
        "Check out from your Krabi hotel.",
        "Transfer by road to Phuket airport for your departure flight."
      ]
    }
  ];



  const inclusions = [
    "Pick-up and drop-off services",
    "Transfers throughout the trip",
    "Water sports activities included",
    "Daily breakfast at all accommodations",
    "2N Phuket, 2N Koh Samui, 2N Krabi",
    "Transfer from one city to another by Ferry",
    "Phi Phi Island Tour with Lunch - By Shared Speedboat (Seat in Coach Transfers)",
    "Full Moon Party at Koh Phang Nan - Entrance fees + Return Transfers from Koh Samui by Speedboat (Subject to availability during travel)",
    "Four Island tour in Krabi with lunch",
    "Flights included (Ex Delhi, Mumbai, Bangalore, Chennai, Kolkata)"
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


  let faqs = [
    {
      "question": "What is included in the travel package?",
      "answer": "The package includes pick-up and drop-off services, transfers throughout the trip, water sports activities, daily breakfast at all accommodations, 2 nights in Phuket, 2 nights in Koh Samui, 2 nights in Krabi, ferry transfers between cities, Phi Phi Island tour with lunch, Full Moon Party entrance and transfers, Four Island tour in Krabi with lunch, and flights from major cities in India."
    },
    {
      "question": "Are airport transfers included?",
      "answer": "Yes, pick-up from the airport upon arrival in Phuket and drop-off at Phuket airport for departure are included."
    },
    {
      "question": "What kind of accommodation is provided?",
      "answer": "Accommodation is provided for 2 nights each in Phuket, Koh Samui, and Krabi with daily breakfast included. Standard hotel check-in time is usually between 14:00 and 15:00."
    },
    {
      "question": "Is transportation between islands included?",
      "answer": "Yes, ferry transfers between Phuket, Koh Samui, and Krabi are included in the package."
    },
    {
      "question": "Are meals included?",
      "answer": "Daily breakfast is included at all accommodations, and lunch is provided during the Phi Phi Island and Krabi Four Island tours."
    },
    {
      "question": "What water sports activities are included?",
      "answer": "Water sports such as snorkeling, swimming, and optional activities are included during island tours like Phi Phi Island and Krabi Four Island tours."
    },
    {
      "question": "Can I attend the Full Moon Party at Koh Phangan?",
      "answer": "Yes, the package includes entrance fees and return transfers by speedboat for the Full Moon Party, subject to availability during travel dates."
    },
    {
      "question": "Is the itinerary flexible for leisure days?",
      "answer": "Yes, days like the leisure day in Koh Samui allow you to explore the island, relax on beaches, or try additional water sports at your own pace."
    },
    {
      "question": "Are flights included in the package?",
      "answer": "Yes, flights from major Indian cities including Delhi, Mumbai, Bangalore, Chennai, and Kolkata are included."
    },
    {
      "question": "What sightseeing tours are included?",
      "answer": "Included tours are the Full Day Phi Phi Island tour with multiple stops, the Four Island tour in Krabi, and the Full Moon Party at Koh Phangan."
    },
    {
      "question": "What should I bring for the island tours?",
      "answer": "We recommend bringing swimwear, sunscreen, hats, sunglasses, a towel, and underwater cameras for snorkeling and swimming activities."
    },
    {
      "question": "Is there a guide provided during tours?",
      "answer": "Yes, professional guides or representatives assist you during sightseeing tours and transfers."
    },
    {
      "question": "Are optional activities available during the tours?",
      "answer": "Yes, optional water sports and activities like snorkeling and sunbathing are available at several stops, especially on Khai Island and during the Four Island tour."
    },
    {
      "question": "What is the cancellation policy for this package?",
      "answer": "Cancellation policies may vary depending on booking terms. Please check with the travel provider for specific details."
    },
    {
      "question": "Is travel insurance included?",
      "answer": "Travel insurance is not included in the package and should be purchased separately for your safety and peace of mind."
    }
  ]




  return (
    <div className="w-full">
      {/* Hero Section */}
      <PackageHero itinerary={itinerary} heroText={heroText} days={days} inclusions={inclusions} things={thingsToDo} faqs={faqs} />

    </div>
  );
}

export default thailand_package_1;
