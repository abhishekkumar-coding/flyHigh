import DestinationFaqs from '@/app/components/DestinationFaqs';
import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import React from 'react'

function page() {

    const heroText = {
        image: "/singapore/singapore_bg.jpg",
        title: "Discover the Vibrant City of Singapore",
        description: "Experience the perfect blend of modernity and tradition in Singapore. From iconic landmarks to lush gardens, this city-state offers a unique travel experience."
    };
    const singaporePackages = [
        {
            id: 2,
            image: "/singapore/singapore_pkg_1.jpeg",
            title: "Singapore & Malaysia Delight",
            description: "Explore the vibrant cities of Singapore and Kuala Lumpur with a 7-night tour featuring Universal Studios, Sentosa, Gardens by the Bay, Genting Highlands, Sunway Lagoon, and more. Private transfers, 6 breakfast meals, and 5 dinners included.",
            amenities: ["Hotel", "Meal", "Private Transfers", "Attractions"],
            price: 68351,
            duration: "7 Nights",
            link: "/destinations/international/singapore/package1",
        },

    ]

    const faqs = [
        {
            question: "Is the Singapore visa included in the package?",
            answer:
                "Yes, the tourist visa is included in most packages. However, always check the inclusions to be sure.",
        },
        {
            question: "What is the best time to visit Singapore?",
            answer:
                "The best time to visit is between November and March when the weather is pleasant for sightseeing.",
        },
        {
            question: "Are flights included in this package?",
            answer:
                "Most packages do not include flights by default, but we can help you book them separately.",
        },
        {
            question: "Is this package suitable for families with kids?",
            answer:
                "Absolutely. Singapore offers many family-friendly attractions like theme parks, aquariums, and beaches.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "Cancellations made 15 days prior to departure are eligible for a full refund minus processing fees.",
        },
    ];

    return (
        <div className='w-full'>
            <DestinationHero heroText={heroText} />
            {singaporePackages.map((pkg, ind) => (
                <DestinationPackages key={ind} pkgData={pkg} />
            ))}
            <DestinationFaqs faqs={faqs} />
        </div>
    );
}

export default page