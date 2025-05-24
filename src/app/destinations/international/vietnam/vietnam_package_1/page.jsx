
"use client"
import React, { useEffect, useState } from 'react';
import PackageHero from '@/app/components/PackageHero';

function vietnam_package_1() {

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
        title: "Northern Vietnam Family Escape",
        image: "/vietnam/vietnam_pkg_card_1.png",
        description: "4 nights of luxury in Dubai with iconic views, thrilling desert safari, Burj Khalifa visit, dhow cruise dinner, and seamless visa & transfers.",
        title2: "Dubai Delight: 4N Tour with Iconic Experiences",
        description2: "Embark on a 6-day journey through Northern Vietnam with your family, blending cultural discovery, natural beauty, and exciting activities. From Hanoi&apos;s heritage to Sapa&apos;s mountains and Halong Bay&apos;s iconic cruise, enjoy a perfect family getaway with guided tours, comfortable stays, and seamless transfers.",
    }

    const days = "5N/6D Itinerary";

    const itinerary = [
        {
            day: "Day 1 - Arrival in Hanoi | Welcome to the Land of Ascending Dragon",
            details: [
                "Arrive at Hanoi Airport and meet your driver for transfer to your hotel in a Toyota Vios, Hyundai Accent, or similar vehicle.",
                "Check-in at your hotel and settle in.",
                "Spend the rest of the day at leisure. Optional visits: Hoan Kiem Lake, Ngoc Son Temple, or St. Joseph's Cathedral.",
                "Overnight stay at hotel in Hanoi.",
                "Today's activity: Day at Leisure"
            ]
        },
        {
            day: "Day 2 - Excursion to Ninh Binh | Enjoy a Boat Ride from Hao Lu to Tam Coc to Witness Limestone Caves",
            details: [
                "Driver picks you up from the hotel and transfers you to Ninh Binh in an air-conditioned shuttle bus.",
                "Visit the historic capital Hao Lu and explore the ancient temples of the Le and Dinh Dynasties.",
                "Enjoy a boat ride from Hao Lu to Tam Coc to witness limestone caves.",
                "Go on a cycling trip through villages and rocky landscapes to Bich Dong Pagoda.",
                "Return to Hanoi for an overnight stay."
            ]
        },
        {
            day: "Day 3 - Hanoi to Sapa | Explore the Cat Cat Village",
            details: [
                "Check out from your hotel and transfer to Sapa by air-conditioned shuttle bus.",
                "Arrive in Sapa and enjoy lunch with local Vietnamese dishes.",
                "Walk to the entrance of Cat Cat Village, home to the Black H'mong community.",
                "Explore the village with a guide and trek to the Tien Sa Waterfall and French-built Hydraulic Power Station.",
                "Hike back to catch your bus and return to your hotel in Sapa."
            ]
        },
        {
            day: "Day 4 - Fansipan Mountain Tour | Transfer Back to Hanoi",
            details: [
                "Check out from hotel and begin your Fansipan Mountain tour.",
                "Enjoy a 20-minute cable car ride to reach Fansipan Peak, the tallest mountain in Indochina.",
                "Visit Kim Son Bao Thang Pagoda and see the large seated Buddha statue.",
                "Climb 600 steps to reach the peak of Fansipan, known as the Roof of Indochina.",
                "After the visit, take the cable car back, then transfer to Hanoi for an overnight stay."
            ]
        },
        {
            day: "Day 5 - Hanoi to Halong Bay | Enjoy an Overnight Cruise Ride at Halong Bay",
            details: [
                "Check out from hotel and drive to Halong Bay in an air-conditioned shuttle bus.",
                "Arrive at Tuan Chau Tourist Wharf and board the cruise. Enjoy a welcome drink and lunch onboard.",
                "Visit Titop Island for sunbathing or swimming.",
                "Explore Pearl Farm Village and enjoy kayaking in Halong Bay.",
                "Join a traditional cooking class on the cruise followed by tea on the sundeck.",
                "Overnight stay on the cruise."
            ]
        },
        {
            day: "Day 6 - Departure From Hanoi | Bid Adieu with a Bag of Memories",
            details: [
                "Check out from your hotel and transfer to Hanoi Airport in a Toyota Vios, Hyundai Accent, or similar vehicle.",
                "Board your flight back home with wonderful memories of Vietnam."
            ]
        }
    ];



    const inclusions = [
        "Accommodation: 3 nights in Hanoi, 1 night in Sapa, and 1 night on a Halong Bay cruise",
        "Meals: As per the provided itinerary",
        "Transfers: Airport pick-up and drop-off based on your flight schedule, along with internal shared transfers in comfortable, sanitized vehicles",
        "Guide: English-speaking tour guide to assist during sightseeing",
        "Sightseeing: Entry tickets to all mentioned attractions",
        "Hydration: One complimentary bottle of water per person per day during coach travel",
        "Fansipan Peak Adventure: Round-trip cable car ride to Fansipan Summit",
        "Halong Bay Cruise: An overnight cruise experience",
        "Flight Tickets: Included as per itinerary"
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
            question: "What is included in the travel package?",
            answer: "The package includes accommodation, meals as per the itinerary, all internal transfers, an English-speaking guide, entry tickets for all mentioned attractions, and flight tickets."
        },
        {
            question: "Are international flight tickets included?",
            answer: "Yes, return international flight tickets are included as per the itinerary."
        },
        {
            question: "Do I need a visa to travel to Vietnam?",
            answer: "Visa requirements depend on your nationality. Indian passport holders usually require a visa, which can be obtained online (e-visa) or through an embassy."
        },
        {
            question: "Are meals included in the package?",
            answer: "Yes, meals are included as per the itinerary, covering breakfast, lunch, and dinner where mentioned."
        },
        {
            question: "Is the Halong Bay cruise part of the package?",
            answer: "Yes, the package includes an overnight cruise experience in Halong Bay."
        },
        {
            question: "What type of accommodation is provided?",
            answer: "Comfortable stays in 3-star or 4-star hotels with 1 night on a Halong Bay cruise."
        },
        {
            question: "Are guides provided for sightseeing?",
            answer: "Yes, an English-speaking tour guide will assist during sightseeing activities."
        },
        {
            question: "What should I pack for the trip?",
            answer: "Pack light clothing, comfortable shoes, sunscreen, a hat, toiletries, and any personal medications. Don&apos;t forget your travel documents and ID."
        },
        {
            question: "Is travel insurance included?",
            answer: "Travel insurance is not included in the base package. It is recommended to purchase it separately for safety."
        },
        {
            question: "Is the trip suitable for children and elderly travelers?",
            answer: "Yes, the itinerary is designed to be comfortable for travelers of all ages, with adequate rest and manageable travel durations."
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

export default vietnam_package_1;
