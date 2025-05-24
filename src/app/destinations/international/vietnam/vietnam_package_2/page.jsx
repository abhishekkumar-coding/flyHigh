
"use client"
import React, { useEffect, useState } from 'react';
import PackageHero from '@/app/components/PackageHero';

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
        title: "Vietnam Solo Explorer: Ultimate Cultural & Nature Escape",
        image: "/vietnam/vietnam_pkg_card_1.png",
        description2: "Dive into the vibrant heart of Vietnam on this immersive 6-day solo journey. Experience a perfect blend of bustling city life, tranquil natural wonders, and rich cultural heritage. From exploring Hanoi&apos;s historic streets and cruising the majestic Halong Bay to discovering the dynamic energy of Ho Chi Minh City, this trip is designed for independent travelers seeking authentic experiences, meaningful connections, and unforgettable memories.",
    }

    const days = "5N/6D Itinerary";

    const itinerary = [
        {
            day: "Day 1 – Arrival in Hanoi | Welcome to the Land of the Ascending Dragon",
            details: [
                "Upon arrival at Hanoi Airport, our driver will greet you and transfer you to your pre-arranged hotel in acomfortable vehicle like Toyota Vios, Hyundai Accent, or similar.",
                "After checking in, the rest of the day is at your leisure.",
                "You can explore Hanoi's landmarks like Hoan Kiem Lake, Ngoc Son Temple, Huc Bridge, and St. Joseph's Cathedral, all within close proximity to your hotel.",
                "Take your time to enjoy the beauty and charm of Hanoi."
            ],
        },
        {
            day: "Day 2 – Excursion to Ninh Binh | Boat Ride from Hoa Lu to Tam Coc through Limestone Caves",
            details: [
                "The driver will pick you up from your hotel for a sightseeing trip to Ninh Binh City.",
                "Visit the ancient capital Hao Lu and explore its well-preserved UNESCO temples.",
                "Enjoy a boat ride to Tam Coc, known as 'Halong Bay on Land', featuring karst formations and rice fields.",
                "Venture into limestone caves with beautiful stalactites and stalagmites.",
                "Cycle through Vietnamese villages to the Bich Dong Pagoda complex.",
                "Return to Hanoi for an overnight stay at your hotel."
            ],
        },
        {
            day: "Day 3 – Hanoi to Halong Bay | Overnight Cruise on Halong Bay",
            details: [
                "Check out from your hotel and head to Tuan Chau Tourist Wharf.",
                "Board the cruise and enjoy a welcome drink while settling into your private cabin.",
                "Cruise through Halong Bay and enjoy lunch onboard.",
                "Visit Titop Island for relaxation and swimming.",
                "Continue to the Pearl Farm Village for kayaking and swimming.",
                "Join a cooking class on the cruise and unwind with tea on the sundeck.",
                "Overnight stay in a private cabin on the cruise."
            ],
        },
        {
            day: "Day 4 – Halong Bay to Ho Chi Minh via Hanoi | Visit Surprise Caves before Disembarking",
            details: [
                "Start your day with a Tai Chi session on the sundeck.",
                "Take a boat to Sung Sot (Surprise) Cave, the largest cave in Halong Bay.",
                "Return to the cruise, then disembark at Tuan Chau Harbor.",
                "Transfer to Hanoi Airport and fly to Ho Chi Minh City.",
                "Upon arrival, transfer to your pre-booked hotel for an overnight stay."
            ],
        },
        {
            day: "Day 5 – Mekong Delta Tour | Explore the Village Life of Vietnam",
            details: [
                "Pick-up from your hotel and depart for My Tho.",
                "Visit the Vinh Trang Pagoda, a famous Buddhist shrine.",
                "Enjoy a boat ride along the river past stilt houses and fishing villages.",
                "Relish lunch at Tortoise Islet in an orchard garden.",
                "Continue to An Khanh in Ben Tre for a sampan ride under coconut trees.",
                "Enjoy seasonal fruits, honey tea, and traditional folk music.",
                "Visit a village to see coconut candy-making and fruit plantations.",
                "Return to your hotel in Ho Chi Minh City for overnight stay."
            ],
        },
        {
            day: "Day 6 – Departure | Bid Adieu with a Bag of Memories",
            details: [
                "Prepare to check out from your hotel in Ho Chi Minh City.",
                "Transfer to the airport in a vehicle like Toyota Vios or Hyundai Accent.",
                "Say goodbye to Vietnam as you board your flight home with cherished memories."
            ],
        },
    ];




    const inclusions = [
        "Accommodation: 2 nights in Hanoi, 1 night on a Halong Bay cruise, and 2 nights in Ho Chi Minh City",
        "Meals: As specified in the itinerary",
        "Transfers: Airport pick-up and drop-off based on flight schedules; internal transfers on a shared basis in sanitized, comfortable vehicles",
        "Flights: One internal flight (Hanoi to Ho Chi Minh City) included",
        "Guide: English-speaking tour guide for sightseeing and activities",
        "Sightseeing: Entry tickets to all mentioned attractions",
        "Hydration: Complimentary daily bottled water during coach travel",
        "Electric Car Tour: 1-hour electric car city tour in Hanoi",
        "Halong Bay Cruise: Overnight cruise through the scenic bay",
        "Kayaking Adventure: Kayak through the serene waters of Halong Bay",
        "Cu Chi Tunnels Tour: Guided exploration of the historic Cu Chi Tunnels"
    ];




    const thingsToDo = [
        "Pay your respects at the Ho Chi Minh Mausoleum and tour Ho Chi Minh's Stilt House.",
        "Wander through the bustling streets and markets of the Old Quarter.",
        "Visit the Temple of Literature, a historic institution.",
        "Take a leisurely cyclo tour around the city.",
        "Embark on a boat tour amid the stunning limestone karsts and islands.",
        "Discover captivating caves such as Sung Sot Cave and Thien Cung Cave.",
        "Trek through terraced rice fields and visit ethnic minority villages.",
        "Soak in breathtaking views of the Hoàng Liên Son mountain range.",
        "Explore the UNESCO-listed Imperial City.",
        "Visit the Thien Mu Pagoda and cruise along the Perfume River on a dragon boat.",
        "Stroll through the enchanting Ancient Town with its charming lantern-lit streets.",
        "Immerse yourself in Vietnamese cuisine through a cooking class.",
        "Explore cultural sites like the Japanese Covered Bridge and the Assembly Hall of the Cantonese Chinese Congregation.",
        "Relax on the sandy beaches and swim in crystal-clear waters at destinations like Da Nang, Nha Trang, Phu Quoc, and Mui Ne.",
        "Learn about the Vietnam War at the War Remnants Museum.",
        "Crawl through the intricate Cu Chi Tunnels, an underground network used by the Viet Cong.",
        "Shop and savor local street food at Ben Thanh Market.",
        "Cruise through the delta's waterways and floating markets.",
        "Discover the stunning landscapes in and around Dalat and Buon Ma Thuot.",
        "Engage in trekking, visit coffee plantations, and marvel at cascading waterfalls.",
        "Savor Vietnamese dishes such as pho (noodle soup), banh mi (Vietnamese sandwich), goi cuon (spring rolls), and more.",
        "Enjoy water sports like snorkeling, scuba diving, and kite surfing along the coast.",
        "Experience traditional festivals, including Tet (Lunar New Year) and the Mid-Autumn Festival.",
        "Visit historical sites like the My Lai Massacre Memorial, Vinh Moc Tunnels, and more.",
        "Engage in motorbiking, cycling, or trekking adventures through the mountains and countryside."
    ];


    const faqs = [
        {
            question: "What is included in the Solo Adventure in Vietnam package?",
            answer: "The package includes accommodation in 3-star hotels and a Halong Bay cruise, specified meals, airport transfers, internal flights, guided tours, sightseeing entry fees, daily bottled water, and various activities such as city tours, kayaking, and visits to historic sites."
        },
        {
            question: "How many days does the trip last?",
            answer: "The trip is 6 days and 5 nights."
        },
        {
            question: "Are flights included in the package?",
            answer: "Yes, one internal flight from Hanoi to Ho Chi Minh City is included."
        },
        {
            question: "Will there be a guide during the trip?",
            answer: "Yes, an English-speaking tour guide will accompany you for sightseeing and activities."
        },
        {
            question: "What kind of accommodation is provided?",
            answer: "You will stay in comfortable 3-star hotels for most nights, plus one night on an overnight Halong Bay cruise."
        },
        {
            question: "Are meals included?",
            answer: "Meals are included as specified in the itinerary, offering a taste of local cuisine."
        },
        {
            question: "Is transportation covered between cities and attractions?",
            answer: "Yes, airport transfers and internal transfers are provided on a shared basis in sanitized, comfortable vehicles."
        },
        {
            question: "What special activities are included?",
            answer: "Activities include a 1-hour electric car city tour in Hanoi, an overnight Halong Bay cruise, kayaking, and guided tours of Cu Chi Tunnels."
        },
        {
            question: "Are there opportunities to experience local culture?",
            answer: "Absolutely. You will visit markets, historic temples, cultural sites, enjoy local food, and even take part in traditional festivals if your trip coincides."
        },
        {
            question: "Is this package suitable for solo travelers?",
            answer: "Yes, this package is specially designed for solo adventurers looking to explore Vietnam safely and comfortably with group activities and guided support."
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
            <PackageHero itinerary={itinerary} heroText={heroText} days={days} inclusions={inclusions} things={thingsToDo} faqs={faqs} policies={policies} />

        </div>
    );
}

export default page;
