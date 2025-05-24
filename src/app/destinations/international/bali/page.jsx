import DestinationFaqs from '@/app/components/DestinationFaqs';
import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import React from 'react'

function page() {
    const heroText = {
        image: "/bali/bali_bg_1.png",
        title: "Discover the Magic of Bali",
        description:
            "Embark on an unforgettable journey to Bali, where lush landscapes, stunning beaches, and rich culture await. From serene temples to thrilling water sports, Bali offers a paradise for every traveler.",
    };


    const baliPackages = [
        {
            id: 1,
            image: "/bali/bali_card_1.jpeg",
            title: "Enchanting Bali Getaway &ndash; 6 Nights / 7 Days",
            description:
                "Experience Bali's beauty with flights, 6-night stay, breakfast, scenic tours, water sports, and iconic landmarks like Tanah Lot and Ubud.",
            amenities: ["Hotel", "Meal", "Wi-Fi", "Cab"],
            price: 62999,
            duration: "6 Nights",
            link: "/destinations/international/bali/bali_package_1",
        },
    ];

    const faqs = [
        {
            question: "Is the Bali visa included in the package?",
            answer:
                "Visa on arrival for Indian citizens is available in Bali, and the package does not include visa fees. It&rsquo;s best to check the visa requirements before your travel.",
        },
        {
            question: "What is the best time to visit Bali?",
            answer:
                "The best time to visit Bali is from April to October when the weather is dry and perfect for outdoor activities.",
        },
        {
            question: "Are flights included in this package?",
            answer:
                "Flights are not included in the package. You will need to book your flights separately, but we can assist in recommending options.",
        },
        {
            question: "Is this package suitable for families with kids?",
            answer:
                "Yes, this Bali package is perfect for families. Bali offers various attractions for children, including beaches, water parks, and cultural sites.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "Cancellations made at least 15 days before departure are eligible for a full refund, minus any processing fees. Check the terms for detailed information.",
        },
    ];

    return (
        <div className='w-full'>
            <DestinationHero heroText={heroText} />
            {baliPackages.map((pkg, ind) => (
                <DestinationPackages key={ind} pkgData={pkg} />
            ))}
            <DestinationFaqs faqs={faqs} />
        </div>
    );
}


export default page