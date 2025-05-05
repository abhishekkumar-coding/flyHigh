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
    title: "Ayodhya & Kashi Pilgrimage Tour",
    image: "/ayoodhya_pkg_bg.jpeg",
    description: "A 3 Nights / 4 Days spiritual retreat through the sacred cities of Varanasi and Ayodhya. Enjoy a peaceful pilgrimage with comfortable stays, seamless transfers, and a VIP Darshan at Kashi Vishwanath.",
    title2: "Ayodhya & Kashi Divine Escape: 3N/4D Spiritual Journey",
    description2: "Experience 3 nights across Varanasi and Ayodhya with VIP Kashi Vishwanath Darshan, deluxe hotel stays, daily breakfast, guided transfers by Ertiga, and a soul-soothing pilgrimage from Shiva&rsquo;s city to Ram Janmabhoomi.",
  }

  const days = "3 Nights / 4 Days Itinerary";

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
    "3 Nights accommodation in well-rated hotels (2 nights in Varanasi, 1 night in Ayodhya)",
    "2 Rooms on double occupancy basis",
    "Daily breakfast at the hotel",
    "All transfers and sightseeing as per itinerary by private Ertiga vehicle",
    "Meet and Greet on arrival",
    "VIP Darshan at Kashi Vishwanath Temple",
    "Driver charges, tolls, parking fees, and all applicable taxes"
  ];
  

  const things = [
    "Attend Ganga Aarti at Dashashwamedh Ghat in Varanasi",
    "Take a sunrise boat ride on the Ganges River",
    "Explore the Kashi Vishwanath Temple and its surroundings",
    "Visit Sarnath &ndash; the site of Buddha&rsquo;s first sermon",
    "Experience Ram Janmabhoomi and Hanuman Garhi Temple in Ayodhya",
    "Walk through the ancient lanes of Varanasi and shop for Banarasi silk",
    "Enjoy local street food like Kachori Sabzi and Jalebi",
    "Witness evening aartis and spiritual ceremonies at sacred temples"
  ];
  
  const faqs = [
    {
      question: "What is included in the Ayodhya-Kashi package?",
      answer: "The package includes hotel accommodation, daily breakfast, guided sightseeing tours in Ayodhya and Varanasi, transfers by private vehicle, and visits to major temples and attractions as per the itinerary."
    },
    {
      question: "Is train or airfare included in this package?",
      answer: "No, train or airfare is not included. Guests need to arrange their own travel to the starting city. However, we can assist with booking upon request."
    },
    {
      question: "Are temple entry tickets included?",
      answer: "Most temple visits are free, but any special darshan or VIP entry charges are not included in the package price."
    },
    {
      question: "Is the package suitable for elderly travelers?",
      answer: "Yes, the itinerary is designed to be comfortable. Private vehicles are used for transfers and sightseeing, and we can arrange assistance if needed."
    },
    {
      question: "Can the itinerary be customized?",
      answer: "Yes, the itinerary can be tailored based on your preferences, group size, or additional pilgrimage spots you wish to include."
    },
    {
      question: "What is the best time to visit Ayodhya and Kashi?",
      answer: "The best time is from October to March, when the weather is pleasant for temple visits and outdoor activities."
    },
    {
      question: "Are meals included in the package?",
      answer: "Daily breakfast is included. Other meals can be arranged at additional cost or enjoyed at local eateries."
    },
    {
      question: "Is travel insurance included?",
      answer: "Travel insurance is not included but is recommended for added security and peace of mind during the trip."
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

export default page