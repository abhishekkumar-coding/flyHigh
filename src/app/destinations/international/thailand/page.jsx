import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import React from 'react';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function Dubai() {
    const heroText = {
        image: "/thailand/thailand_hero_bg_1.png",
        title: "Thailand – The Land of Smiles",
        description:
            "Experience the perfect blend of tradition and adventure. Wander through golden temples, taste world-famous street food, relax on pristine islands, and feel the warmth of Thai hospitality wherever you go.",
    };
    const thailandPackages = [
        {
            id: 1,
            image: "/thailand/thailand_pkg_card_1.png",
            title: "Northern Thailand Family Escape",
            duration: "6 Days / 5 Nights",
            isCustomizable: true,
            actualPrice: 27999,
            olderPrice: 30999,
            discount: 0,
            hotelName: "Krabi Resort",
            // hotelName: ["Krabi Resort", "Aonang Villa Resort", "The Kee Resort Phuket", "Deevana Patong Resort"],
            hotelStars: 4,
            link: "/destinations/international/thailand/thailand_package_1"
        },
        {
            id: 2,
            image: "/thailand/thailand_pkg_card_2.png",
            title: "7-Day Thailand Island Escape: Phuket, Koh Samui & Krabi",
            duration: "7 Days / 6 Nights",
            isCustomizable: true,
            actualPrice: 63999,
            olderPrice: 70999,
            //  hotelName: [
            //     "Krabi Resort",
            //     "The Kee Resort & Spa, Phuket",        // Phuket - 2 Nights
            //     "Deevana Patong Resort, Phuket",       // Alternative in Phuket
            //     "Chura Samui Resort, Koh Samui",       // Koh Samui - 2 Nights
            //     "Samui Resotel Beach Resort",          // Alternative in Koh Samui
            //     "Krabi Resort, Ao Nang",               // Krabi - 2 Nights
            //     "Aonang Villa Resort, Krabi"           // Alternative in Krabi
            // ],
            discount: 0,
            hotelName: "Deevana Patong Resort, Phuket",
            hotelStars: 3,
            link: "/destinations/international/thailand/thailand_package_2"
        }

    ];


    const faqs = [
        {
            question: "Is the Thailand visa included in the package?",
            answer:
                "Yes, tourist visas are included in most Thailand packages. Please review the package details to confirm.",
        },
        {
            question: "What is the best time to visit Thailand?",
            answer:
                "The ideal time to visit Thailand is between November and February, when the weather is cool and dry—perfect for travel.",
        },
        {
            question: "Are flights included in this package?",
            answer:
                "Flights are usually not included by default, but we can assist you in booking them separately if needed.",
        },
        {
            question: "Is this package suitable for families with kids?",
            answer:
                "Yes, Thailand is very family-friendly with kid-friendly beaches, cultural shows, and fun attractions like water parks and animal sanctuaries.",
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
            {thailandPackages.map((pkg, ind) => (
                <DestinationPackages key={ind} pkgData={pkg} />
            ))}
            <DestinationFaqs faqs={faqs} />
        </div>
    );
}

export default Dubai;
