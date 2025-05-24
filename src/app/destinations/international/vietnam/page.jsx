import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import React from 'react';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function Dubai() {
    const dubaiPackages = [
        {
            id: 1,
            image: "/vietnam/vietnam_pkg_card_1.png",
            title: "Northern Vietnam Family Escape",
            duration: "6 Days / 5 Nights",
            isCustomizable: true,
            actualPrice: 94999,
            olderPrice: 99999,
            discount: 0,
            hotelName: "Comfortable 3-star accommodations and one night on a Halong Bay cruise",
            hotelStars: 4,
            link: "/destinations/international/vietnam/vietnam_package_1"
        },
        {
            id: 2,
            image: "/vietnam/vietnam_pkg_card_2.jpeg",
            title: "Escape to Vietnam",
            duration: "5 Days / 4 Nights",
            isCustomizable: true,
            actualPrice: 21999,
            olderPrice: 24999,
            discount: 0,
            hotelName: "Citymax Hotel Bur Dubai",
            hotelStars: 3,
            link: "/destinations/international/vietnam/vietnam_package_2"
        }

    ];

    const heroText = {
        image: "/vietnam/vietnam_hero_bg_1.png",
        title: "Discover the Charm of Vietnam",
        description:
            "Experience the perfect harmony of ancient heritage and vibrant culture in Southeast Asia. From lush green landscapes to bustling city streets, Vietnam offers an unforgettable journey.",
    };
    const faqs = [
        {
            question: "Is the Vietnam visa included in the package?",
            answer:
                "Yes, tourist visas are included in most Vietnam packages. Please review the package details to confirm.",
        },
        {
            question: "What is the best time to visit Vietnam?",
            answer:
                "The ideal time to visit is between March to April or September to November, when the weather is pleasant across the country.",
        },
        {
            question: "Are flights included in this package?",
            answer:
                "Flights are usually not included by default, but we can assist you in booking them separately if needed.",
        },
        {
            question: "Is this package suitable for families with kids?",
            answer:
                "Yes, Vietnam is family-friendly with plenty of attractions like beaches, historical sites, and cultural experiences.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "Cancellations made at least 15 days before departure qualify for a full refund, excluding processing charges.",
        },
    ];

    return (
        <div className='w-full'>
            <DestinationHero heroText={heroText} />
            {dubaiPackages.map((pkg, ind) => (
                <DestinationPackages key={ind} pkgData={pkg} />
            ))}
            <DestinationFaqs faqs={faqs} />
        </div>
    );
}

export default Dubai;
