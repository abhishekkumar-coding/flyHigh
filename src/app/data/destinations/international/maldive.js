const maldives = {
  title: "Escape to the Maldives Paradise",
  description: "Relax in luxurious overwater villas, dive into turquoise waters, and experience tropical bliss like never before in the serene islands of the Maldives.",
  heroImage: "/maldives/maldives_hero_bg_1.png",
  packages: [
    {
      slug: "desert-safari",
      title: "Dubai Delights: 5D/4N",
      cardImage: "/dubai/dubai_pkg_card_1.png",
      duration: "5 Days / 4 Nights",
      hotels: ["Grand Excelsior Hotel Bur Dubai"],
      actualPrice: 30999,
      olderPrice: 35999,
      heroImage: "/dubai/dubai_pkg_card_1.png",
      overview: {
        title: "Dubai Delights: 5D/4N",
        description: "Stay 4 nights in a 4★ hotel with Marina Dhow Cruise, Dubai city tour, Burj Khalifa, desert safari with BBQ dinner, UAE visa, and private airport transfers."
      },

      // =============Itinerary============= 

      itinerary: [
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
      ],

      // =============Inclusions============= 

      inclusions: [
        "4 Nights accommodation in a 3*/4* hotel (as per your selection)",
        "Daily breakfast at the hotel",
        "Airport pick-up and drop-off in a private vehicle",
        "Dhow Cruise with buffet dinner and entertainment",
        "Half-day Dubai city tour with English-speaking guide",
        "Desert Safari with dune bashing, camel ride, BBQ dinner, and live performances",
        "All transfers and tours on a SIC (Seat in Coach) or private basis, as per selection",
        "Sightseeing as per itinerary",
        "VAT and all applicable taxes"
      ],

      // =============ThingsToDo============= 


      things: [
        "Photography with falcons",
        "Try traditional Arabic attire",
        "Shisha smoking in the lounge",
        "Star gazing in the open desert"
      ],

      // =============Faqs============= 

      faqs: [
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
      ]
      // policies: {
      //   cancellation: "No refund after 24 hours",
      //   reschedule: "Allowed once"
      // }
    },
  ]
};


export default maldives