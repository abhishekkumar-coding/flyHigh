
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
        title: "Escape to Dubai: Luxury, Adventure & Skyline Dreams Await!",
        image: "/dubai/dubai_pkg_card_2.png",
        description: "4 nights of luxury in Dubai with iconic views, thrilling desert safari, Burj Khalifa visit, dhow cruise dinner, and seamless visa & transfers.",
        title2: "Dubai Delight: 4N Tour with Iconic Experiences",
        description2: `Explore Dubai in 5D/4N with city tours, thrilling desert safari, and iconic landmarks.",
  "Includes 3-star hotel stay, daily breakfast, Dhow Cruise, Burj Khalifa visit, and more.`,
    }

    const days = "5 Days / 4 Nights Itinerary";

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
        "04 Nights accommodation in a 3-star hotel",
        "Daily breakfast at the hotel",
        "Marine Dhow Cruise with Dinner",
        "Half-Day Dubai City Tour",
        "Burj Khalifa (124&ndash;125 Floor, Non-Prime Hours) with Dubai Mall Visit",
        "Desert Safari with BBQ Dinner (Standard Camp)",
        "All tours and transfers on SIC (Seat-in-Coach) Basis",
        "Airport transfers on private basis"
    ];



    const things = [
        "Enjoy a scenic evening Dhow Cruise with buffet dinner",
        "Explore cultural and modern Dubai in a city tour",
        "Get breathtaking views from the top of Burj Khalifa",
        "Visit the Dubai Mall &ndash; shopping, dining, and entertainment",
        "Experience a thrilling Desert Safari with live performances",
        "Indulge in BBQ dinner under the desert stars"
    ];

    const faqs = [
        {
            question: "Is visa included in this package?",
            answer: "No, visa charges are not included. However, assistance can be provided upon request."
        },
        {
            question: "Is this package suitable for families?",
            answer: "Yes, it's ideal for families, couples, and even solo travelers looking for a mix of relaxation and adventure."
        },
        {
            question: "Can I upgrade my hotel or tour options?",
            answer: "Yes, customization is available. Contact our support team for premium upgrades or private tour options."
        },
        {
            question: "Are airport transfers private?",
            answer: "Yes, both arrival and departure airport transfers are done on a private basis."
        },
        {
            question: "Are meals other than breakfast included?",
            answer: "Yes, BBQ dinner is included with the Desert Safari and buffet dinner with the Dhow Cruise. Other meals are not included."
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
        <div className="w-full">
            {/* Hero Section */}
            <PackageHero itinerary={itinerary} heroText={heroText} days={days} inclusions={inclusions} things={things} faqs={faqs} policies={policies} />

        </div>
    );
}

export default dubai_adventures;
