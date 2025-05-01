"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import PackageHero from '@/app/components/PackageHero';
import PackageItinery from '@/app/components/PackageItinery';
import PackageInclusions from '@/app/components/PackageInclusions';
import PackageThings from '@/app/components/PackageThings';
import PackageFlyHigh from '@/app/components/PackageFlyHigh';
import PackageFaqs from '@/app/components/PackageFaqs';
import PackagePolocies from '@/app/components/PackagePolocies';
import EnquiryForm from '@/app/components/EnquiryForm';

function Desert_Safari() {

  const inclusions = [
    "Hotel Pickup & Drop",
    "Dune Bashing",
    "Camel Ride",
    "BBQ Dinner",
    "Live Dance Shows",
    "Sandboarding",
    "Unlimited Soft Drinks",
    "Henna Painting"
  ]

  const things = [
    "Photography with falcons",
    "Try traditional Arabic attire",
    "Shisha smoking in the lounge",
    "Star gazing in the open desert"
  ]
  const faqs = [
    {
      question: "Is the safari suitable for children?",
      answer: "Yes, children can enjoy the safari with parental guidance.",
    },
    {
      question: "Do I need to bring anything?",
      answer: "Comfortable clothing and a camera are recommended.",
    },
    {
      question: "Is hotel pickup included in the package?",
      answer: "Yes, we provide hotel pickup and drop services from major areas.",
    },
    {
      question: "Are vegetarian meals available?",
      answer: "Yes, both vegetarian and non-vegetarian options are available during dinner.",
    },
  ];

  const policies = [
    {
      title: "Confirmation Policy",
      content: [
        "The customer receives a confirmation voucher via email within 24 hours of successful booking.",
        "In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation voucher will be sent via email.",
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
      <PackageHero />

      {/* Itinerary */}
      <PackageItinery />

      {/* Inclusions */}
      <PackageInclusions inclusions={inclusions} />

      {/* Things to Do */}
      <PackageThings things={things} />
      {/* Why FlyHigh */}
      <PackageFlyHigh />

      {/* FAQs */}
      <PackageFaqs faqs={faqs} />

      {/* Policies */}
     <PackagePolocies policies={policies}/>




      {/* Booking Form */}
      <EnquiryForm/>

    </div>
  );
}

export default Desert_Safari;
