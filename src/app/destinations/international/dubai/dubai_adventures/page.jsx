
"use client"
import React, { useEffect, useState } from 'react';
import PackageHero from '@/app/components/PackageHero';
import PackageItinery from '@/app/components/PackageItinery';
import PackageInclusions from '@/app/components/PackageInclusions';
import PackageThings from '@/app/components/PackageThings';
import PackageFlyHigh from '@/app/components/PackageFlyHigh';
import PackageFaqs from '@/app/components/PackageFaqs';
import PackagePolocies from '@/app/components/PackagePolocies';
import EnquiryForm from '@/app/components/EnquiryForm';

function dubai_adventures() {

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
    title: "Dubai Escapade: Adventure, Luxury & Skyline Views!",
    image: "/dubai_imgs/desert_safari_1.jpeg",
    description: "4 nights of luxury in Dubai with iconic views, thrilling desert safari, Burj Khalifa visit, dhow cruise dinner, and seamless visa & transfers.",
    title2: "Dubai Delight: 4N Tour with Iconic Experiences",
    description2: "Stay 4 nights in a 4★ hotel with Marina Dhow Cruise, Dubai city tour, Burj Khalifa, desert safari with BBQ dinner, UAE visa, and private airport transfers.",
}

  const days = "4N Itinerary";

  const itinerary = [
    {
      day: "Day 1 - Arrival and Marina Dhow Cruise with Dinner",
      details: [
        "Arrive at Dubai Airport and be greeted by our driver for private airport transfer to your 3-star hotel.",
        "Check-in and relax at the hotel.",
        "In the evening, enjoy a Marina Dhow Cruise with dinner. Sail along Dubai Marina while enjoying a delicious meal and beautiful views of the city skyline."
      ]
    },
    {
      day: "Day 2 - Half Day City Tour and Burj Khalifa",
      details: [
        "Enjoy a half-day city tour of Dubai, visiting iconic landmarks such as the Dubai Mall, Palm Jumeirah, and the Dubai Marina.",
        "Visit the Burj Khalifa, the world's tallest building, and take in breathtaking views from its observation deck.",
        "Return to your hotel for the evening, and relax at your leisure."
      ]
    },
    {
      day: "Day 3 - Desert Safari and BBQ Dinner",
      details: [
        "In the afternoon, embark on an exciting desert safari. Enjoy thrilling dune bashing in a 4x4 vehicle.",
        "Try sandboarding or take a camel ride while exploring the desert landscape.",
        "As the sun sets, enjoy a delicious BBQ dinner in the heart of the desert, with live cultural performances.",
        "After a fun-filled evening, return to the hotel for an overnight stay."
      ]
    },
    {
      day: "Day 4 - Leisure Day and Shopping",
      details: [
        "Spend the day at leisure. You can go shopping in Dubai Mall or visit one of the many other shopping destinations.",
        "Enjoy a relaxing afternoon, or explore Dubai at your own pace.",
        "If you wish, additional activities or sightseeing tours can be added (extra cost)."
      ]
    },
    {
      day: "Day 5 - Departure",
      details: [
        "Check-out from the hotel and transfer to Dubai Airport for your departure flight.",
        "Bid farewell to Dubai, with unforgettable memories of your 4-night trip."
      ]
    }
  ];


  const inclusions = [
    "4 Nights accommodation in a 3*/4* hotel (as per your selection)",
    "Daily breakfast at the hotel",
    "Airport pick-up and drop-off in a private vehicle",
    "Dhow Cruise with buffet dinner and entertainment",
    "Half-day Dubai city tour with English-speaking guide",
    "Desert Safari with dune bashing, camel ride, BBQ dinner, and live performances",
    "All transfers and tours on a SIC (Seat in Coach) or private basis, as per selection",
    "Sightseeing as per itinerary",
    "VAT and all applicable taxes"
  ];


  const things = [
    "Photography with falcons",
    "Try traditional Arabic attire",
    "Shisha smoking in the lounge",
    "Star gazing in the open desert"
  ]
  const faqs = [
    {
      question: "What is included in the Dubai 4N/5D package?",
      answer: "The package includes 4 nights in a 3-star hotel with daily breakfast, airport transfers (private), Marina Dhow Cruise with dinner, Dubai half-day city tour, Burj Khalifa entry, Desert Safari with BBQ dinner, and SIC transfers for tours."
    },
    {
      question: "Is airfare included in this package?",
      answer: "No, airfare is not included. You will need to book your own flight to Dubai."
    },
    {
      question: "What does SIC mean for transfers?",
      answer: "SIC stands for 'Seat in Coach,' meaning you will share the transfer vehicle with other tourists for the city tours and desert safari. Airport transfers will be on a private basis."
    },
    {
      question: "Do I need a visa to travel to Dubai?",
      answer: "Yes, Indian passport holders require a tourist visa for Dubai. We can assist with the visa application if needed."
    },
    {
      question: "Can the itinerary be customized?",
      answer: "Yes, the itinerary can be customized based on your preferences. Additional activities or extra days can be added at an extra cost."
    },
    {
      question: "What is the best time to visit Dubai?",
      answer: "The best time to visit is between November and March, when the weather is cooler and ideal for outdoor activities."
    },
    {
      question: "Is travel insurance included in the package?",
      answer: "Travel insurance is not included but we recommend purchasing it for your safety and peace of mind."
    },
    {
      question: "Are meals included in the package?",
      answer: "Daily breakfast is included. Some tours like the Dhow Cruise and Desert Safari include meals, but other meals are at your own expense."
    }
  ];


  const policies = [
    {
      title: "Confirmation Policy",
      content: [
        "The customer receives a confirmation voucher via email within 24 hours of successful booking.",
        "In case the preferred slots are unavailable, an alternate schedule of the customer&rsquo;s preference will be arranged and a new confirmation voucher will be sent via email.",
        "Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.",
      ],
    },
    {
      title: "Refund Policy",
      content: [
        "The applicable refund amount will be processed within 10 business days.",
        "All applicable refunds will be done in the traveler's Bank Account.",
      ],
    },
    {
      title: "Cancellation Policy",
      content: [
        "If cancellations are made 30 days before the date of travel, 25% of the total tour cost will be charged as cancellation fees.",
        "If cancellations are made 15 to 30 days before the date of travel, 50% of the total tour cost will be charged.",
        "If cancellations are made 0 to 15 days before the date of travel, 100% of the total tour cost will be charged.",
      ],
    },
    {
      title: "Payment Terms Policy",
      content: [
        "The applicable refund amount will be processed within 10 business days.",
        "100% of the total tour cost must be paid 0 days before the date of booking.",
      ],
    },
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

      {/* Policies */}
      <PackagePolocies policies={policies} />




      {/* Booking Form */}
      {showForm && <EnquiryForm onClose={onClose} />}

    </div>
  );
}

export default dubai_adventures;
