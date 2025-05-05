import DestinationFaqs from '@/app/components/DestinationFaqs';
import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import React from 'react'

function page() {
    const heroText = {
        image: "/maldive_bg.jpeg",
        title: "Discover the Paradise of Maldive",
        description: "Escape to a world of turquoise waters, white sandy beaches, and luxurious overwater villas. The Maldives promises serenity, romance, and a once-in-a-lifetime island experience."
    };
    const faqs = [
        {
            question: "Is the Dubai visa included in the package?",
            answer:
                "Yes, the tourist visa is included in most packages. However, always check the inclusions to be sure.",
        },
        {
            question: "What is the best time to visit Dubai?",
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
                "Absolutely. Dubai offers many family-friendly attractions like theme parks, aquariums, and beaches.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "Cancellations made 15 days prior to departure are eligible for a full refund minus processing fees.",
        },
    ];

    // maldive packages 
    const maldivePackages = [
        {
            id: 1,
            image: "/maldive_card1.jpeg",
            title: "Luxury Stay in Maldives",
            description: "Escape to the tranquil Thulhagiri Island Resort with a 3-night full board stay, speedboat transfers, honeymoon perks, and complimentary water sports &ndash; all starting at just ₹44,999 per person.",
            amenities: ["Hotel", "Meal", "Wi-Fi", "Cab"],
            price: 2000,
            duration: "3 Nights",
            link : "/destinations/international/maldive/maldive_package1",
        }
    ]

    return (
        <div className='w-full'>
            <DestinationHero heroText={heroText} />
            {maldivePackages.map((pkg, ind) => (
                <DestinationPackages key={ind} pkgData={pkg} />
            ))}
            <DestinationFaqs faqs={faqs} />
        </div>
    );
}


export default page