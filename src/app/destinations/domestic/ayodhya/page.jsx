import React from 'react'
import DestinationHero from '@/app/components/DestinationHero'
import DestinationPackages from '@/app/components/DestinationPackages';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function page() {

    const heroText = {
        image: "/ayodhya_bg.jpeg",
        title: "Experience the Spiritual Aura of Ayodhya",
        description:
            "Step into the sacred city of Ayodhya — where faith meets history. Explore ancient temples, serene ghats, and the timeless stories of Lord Ram in this divine destination.",
    };

    const ayodhyaPackages = [
        {
            id: 1,
            image: "/ayodhya.jpeg",
            title: "Ayodhya & Kashi Pilgrimage Tour",
            description: "A 3 Nights / 4 Days spiritual retreat through the sacred cities of Varanasi and Ayodhya. Enjoy a peaceful pilgrimage with comfortable stays, seamless transfers, and a VIP Darshan at Kashi Vishwanath.",
            amenities: ["Hotel", "Meal", "Guide", "Cab"],
            price: 4999,
            link: "/destinations/domestic/ayodhya/ayodhya_kashi"
        }
    ];

    const faqs = [
        {
            question: "Is transportation included in the Ayodhya packages?",
            answer:
                "Yes, local transportation for sightseeing and temple visits is included in most packages. Please check individual package details.",
        },
        {
            question: "What is the best time to visit Ayodhya?",
            answer:
                "The best time to visit Ayodhya is from October to March when the weather is pleasant for temple visits and sightseeing.",
        },
        {
            question: "Are meals included in the Ayodhya packages?",
            answer:
                "Yes, all our multi-day packages include meals. You can check the inclusions for specific meal plans.",
        },
        {
            question: "Is this package suitable for senior citizens?",
            answer:
                "Absolutely. Our tours are designed to be comfortable for all age groups, including senior citizens. Wheelchair support is available on request.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "Cancellations made at least 7 days prior to the trip are eligible for a full refund minus minimal booking charges.",
        },
    ];


    return (
        <div className='w-full '>
            <DestinationHero heroText={heroText} />
            {
                ayodhyaPackages.map((pkg, ind) => (
                    <DestinationPackages key={ind} pkgData={pkg} />
                ))
            }
            <DestinationFaqs faqs={faqs} />

        </div>
    )
}

export default page