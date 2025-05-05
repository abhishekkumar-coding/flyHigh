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

function dubai_escaped() {

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
      day: "Day 1 - Arrival and Dhow Cruise Dinner",
      details: [
        "Arrive at Dubai Airport Terminal 1 for the start of your tour.",
        "Meet our friendly driver who will warmly welcome you upon arrival.",
        "Experience hassle-free assistance with your baggage as you proceed to the designated vehicle.",
        "Enjoy a comfortable and safe ride to your chosen Hotel or Residence in Deira/Bur Dubai.",
        "In the evening, unwind on a Dhow Cruise with dinner on Dubai Creek or Marina.",
        "Cruise in a traditional dhow with entertainment and a buffet dinner onboard.",
        "Take in stunning views of the city skyline during the cruise."
      ]
    },
    {
      day: "Day 2 - Dubai City Tour & Desert Safari with BBQ Dinner",
      details: [
        "Start your day with a half-day guided Dubai city tour.",
        "See major attractions like Burj Khalifa, Dubai Museum, Jumeirah Mosque, and Palm Jumeirah.",
        "Afternoon pickup for an adventurous Desert Safari experience.",
        "Enjoy dune bashing, camel rides, sandboarding, and cultural performances.",
        "End the day with a BBQ dinner in a desert camp under the stars."
      ]
    },
    {
      day: "Day 3 - Abu Dhabi City Tour or Theme Park Visit (Optional)",
      details: [
        "Optional full-day trip to Abu Dhabi including Sheikh Zayed Grand Mosque and Heritage Village.",
        "OR choose to visit a theme park such as Ferrari World, Warner Bros, or Yas Waterworld.",
        "Evening at leisure or shopping at local souks/malls in Dubai."
      ]
    },
    {
      day: "Day 4 - Leisure Day or Optional Activities",
      details: [
        "Spend the day at your own pace — relax at your hotel or explore Dubai further.",
        "Optional visit to Atlantis Aquaventure, Miracle Garden, or Global Village.",
        "Evening free for shopping or exploring the nightlife."
      ]
    },
    {
      day: "Day 5 - Departure",
      details: [
        "Check out from your hotel.",
        "Transfer to Dubai International Airport for your return flight.",
        "Take home beautiful memories from your Dubai trip."
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
      answer: "The package includes 4 nights accommodation, daily breakfast, airport transfers, Dhow Cruise dinner, Dubai city tour, Desert Safari with BBQ dinner, and all applicable taxes."
    },
    {
      question: "Is airfare included in this package?",
      answer: "No, airfare is not included. You will need to book your flights separately."
    },
    {
      question: "Can I customize the itinerary?",
      answer: "Yes, the itinerary can be customized based on your preferences and budget. Additional tours and activities can be added on request."
    },
    {
      question: "Do I need a visa to travel to Dubai?",
      answer: "Yes, Indian passport holders require a tourist visa for Dubai. We can assist you with the visa application process if needed."
    },
    {
      question: "What is the best time to visit Dubai?",
      answer: "The best time to visit Dubai is between November and March when the weather is pleasant and ideal for sightseeing and outdoor activities."
    },
    {
      question: "What should I wear during the Desert Safari?",
      answer: "Wear light and comfortable clothing. It's advisable to carry a jacket or shawl for the evening and closed shoes for dune bashing."
    },
    {
      question: "Is travel insurance included in the package?",
      answer: "Travel insurance is not included but highly recommended. It can be arranged at an additional cost."
    },
    {
      question: "Are meals included in the package?",
      answer: "Daily breakfast is included at the hotel. Some tours like the Dhow Cruise and Desert Safari also include dinner. Lunches and other meals are not included unless specified."
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

export default dubai_escaped;
