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
    title: "Grandeur De Sanchi Goa Beachside Bliss",
    image: "/goa/goa_pkg1_hero.jpeg",
    description: "Enjoy a 4 Night beach vacation in Goa with Deluxe Room stay at Grandeur De Sanchi. Package includes pickup and drop from Dabolim Airport, deluxe amenities, and unforgettable coastal vibes all at just ₹9999/- per person!",
    title2: "Deluxe Goa Escape: 4N Stay + Airport Transfers @ ₹9999/-",
    description2: "Rejuvenate with a 4-night stay at Grandeur De Sanchi, Goa. Includes airport transfers, deluxe room, and tropical relaxation steps away from the beach.",
  }

  const days = "4 Nights / 5 Days Itinerary";

  const itinerary = [
    {
      day: "Day 1 - Arrival in Goa",
      details: [
        "Arrive at Dabolim Airport, Goa. Our driver will greet you and provide a comfortable transfer to Grandeur De Sanchi hotel.",
        "Check-in and spend the day at leisure. Explore nearby beaches or relax by the pool."
      ]
    },
    {
      day: "Day 2 - North Goa Sightseeing (Optional)",
      details: [
        "After breakfast, you can opt for a North Goa sightseeing tour (extra cost).",
        "Visit Aguada Fort, Baga Beach, Calangute Beach, Anjuna Beach, and enjoy Goa’s vibrant vibes.",
        "Return to hotel and unwind for the night."
      ]
    },
    {
      day: "Day 3 - South Goa Sightseeing (Optional)",
      details: [
        "Relax at the hotel or go for a South Goa tour (optional).",
        "Visit Miramar Beach, Basilica of Bom Jesus, Dona Paula, and Mangueshi Temple.",
        "Spend the evening at leisure."
      ]
    },
    {
      day: "Day 4 - Leisure & Local Markets",
      details: [
        "Enjoy a relaxed breakfast.",
        "You can explore nearby local flea markets or indulge in water sports on your own.",
        "Evening at leisure to enjoy hotel amenities or beach walks."
      ]
    },
    {
      day: "Day 5 - Departure",
      details: [
        "After breakfast, check out and enjoy a smooth drop-off at Dabolim Airport.",
        "Bid goodbye to Goa with lovely memories."
      ]
    }
  ];

  const inclusions = [
    "4 Nights stay in Deluxe Room at Grandeur De Sanchi, Goa",
    "Pickup and drop from Dabolim Airport (private vehicle)",
    "Complimentary welcome drink on arrival",
    "Access to swimming pool and in-house facilities",
    "Daily breakfast included",
    "All hotel taxes and service charges"
  ];

  const things = [
    "Relax at Calangute and Baga beaches",
    "Enjoy seafood and Goan cuisine",
    "Explore beach shacks and nightlife",
    "Visit famous churches and forts",
    "Shop at Anjuna Flea Market",
    "Try adventure sports like parasailing and jet-skiing",
    "Sunset views at Fort Aguada",
    "Scenic drive along the Goan coastline"
  ];

  const faqs = [
    {
      question: "Is airport transfer included in this Goa package?",
      answer: "Yes, pickup and drop from Dabolim Airport is included for all guests."
    },
    {
      question: "What type of room is provided in this package?",
      answer: "A Deluxe Room at Grandeur De Sanchi Goa is included in this package."
    },
    {
      question: "Are meals included in the Goa package?",
      answer: "Daily breakfast is included. Other meals can be availed at the hotel restaurant or local eateries."
    },
    {
      question: "Is sightseeing included in this package?",
      answer: "Sightseeing tours are optional and can be added at extra cost. Please inquire during booking."
    },
    {
      question: "Is this package suitable for couples or families?",
      answer: "Yes, this package is ideal for couples, families, and groups looking for a comfortable Goa stay."
    }
  ];

  const policies = [
    {
      title: "Confirmation Policy",
      content: [
        "You will receive a booking confirmation within 24 hours of payment.",
        "In case of unavailability, a full refund or alternative option will be offered."
      ],
    },
    {
      title: "Refund Policy",
      content: [
        "Refunds (if applicable) will be processed within 7-10 business days.",
        "Refunds are credited to the original mode of payment."
      ],
    },
    {
      title: "Cancellation Policy",
      content: [
        "25% cancellation charge if cancelled 15+ days prior to check-in.",
        "50% cancellation charge if cancelled 7-14 days before check-in.",
        "100% charge if cancelled within 7 days of check-in or no show."
      ],
    },
    {
      title: "Payment Terms Policy",
      content: [
        "Full payment required to confirm the booking.",
        "Payment options include UPI, Netbanking, Credit/Debit Card."
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-yellow-50 to-white">
      <PackageHero btnClick={btnClick} heroText={heroText} />
      <PackageItinery itinerary={itinerary} days={days} />
      <PackageInclusions inclusions={inclusions} />
      <PackageThings things={things} />
      <PackageFlyHigh />
      <PackageFaqs faqs={faqs} />
      <PackagePolocies policies={policies} />
      {showForm && <EnquiryForm onClose={onClose} />}
    </div>
  );
}

export default page;
