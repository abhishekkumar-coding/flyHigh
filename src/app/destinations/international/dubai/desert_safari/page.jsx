"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function Desert_Safari() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Is the safari suitable for children?",
      answer: "Yes, children can enjoy the safari with parental guidance.",
    },
    {
      question: "Do I need to bring anything?",
      answer: "Comfortable clothing and a camera are recommended.",
    },
    {
      question: "Is hotel pickup included in the package?",
      answer: "Yes, we provide hotel pickup and drop services from major areas.",
    },
    {
      question: "Are vegetarian meals available?",
      answer: "Yes, both vegetarian and non-vegetarian options are available during dinner.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const toggleDropdown = (index) => {
    setOpen(open === index ? null : index);
  };

  const policies = [
    {
      title: "Confirmation Policy",
      content: [
        "The customer receives a confirmation voucher via email within 24 hours of successful booking.",
        "In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation voucher will be sent via email.",
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


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="w-full bg-gradient-to-br from-yellow-50 to-white">
      {/* Hero Section */}
      <section
        className="w-full h-[65vh] relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/dubai_imgs/desert_safari_2.webp')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Desert Safari Adventure</h1>
          <p className="text-lg mb-6">Thrilling experience in the golden dunes of Dubai</p>
          <Link href="#form-section">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Short Description */}
      <section className="w-full  py-12 px-4 ">
        <div className="max-w-5xl bg-gradient-to-l from-yellow-600 to-white p-4 mx-auto text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-yellow-800 mb-6">Desert Safari Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Embark on an unforgettable desert adventure! Feel the adrenaline rush with thrilling dune bashing, ride camels across golden sands, and indulge in a delicious BBQ dinner while enjoying traditional cultural performances under the star-lit sky.
          </p>
        </div>
      </section>


      {/* Itinerary */}
      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">7-Day Itinerary</h2>

          {/* Day 1 */}
          <div className="space-y-10 text-lg text-gray-700">
            <div className="cursor-pointer border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(0)}
              >
                <h3 className="font-semibold text-xl">Day 1 - Airport Pick Up and Dhow Cruise</h3>
                <span className={`transform ${open === 0 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 0 && (
                <div className="mt-4 space-y-4">
                  <p>Arrive at Dubai Airport Terminal 1 for the start of your tour.</p>
                  <p>Meet our friendly driver who will warmly welcome you upon arrival.</p>
                  <p>Experience hassle-free assistance with your baggage as you proceed to the designated vehicle.</p>
                  <p>Enjoy a comfortable and safe ride to your chosen Hotel or Residence in Deira/Bur Dubai.</p>
                  <p>Unwind and relax as you spend a delightful evening on a Dhow cruise dinner tour.</p>
                  <p>Cruise in a traditional dhow featuring an air-conditioned lower deck and an open, airy upper deck.</p>
                  <p>Take in the breathtaking views of the city's skyline during the cruise.</p>
                  <p>Indulge in entertainment shows and savor a delicious dinner served on-board.</p>
                  <p>Immerse yourself in the magical atmosphere while cruising through the evening.</p>
                </div>
              )}
            </div>

            {/* Day 2 */}
            <div className="cursor-pointer border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(1)}
              >
                <h3 className="font-semibold text-xl">Day 2 - Desert Safari and BBQ Dinner</h3>
                <span className={`transform ${open === 1 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 1 && (
                <div className="mt-4 space-y-4">
                  <p>Pickup from your hotel in the afternoon for an exciting desert safari adventure.</p>
                  <p>Enjoy dune bashing in a 4x4 Land Cruiser, a thrilling ride over the golden sand dunes.</p>
                  <p>Try sandboarding or take a relaxing camel ride in the desert.</p>
                  <p>Experience an authentic BBQ dinner under the stars while enjoying live cultural performances.</p>
                  <p>End the evening with a relaxing ride back to your hotel.</p>
                </div>
              )}
            </div>

            {/* Day 3 */}
            <div className="cursor-pointer border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(2)}
              >
                <h3 className="font-semibold text-xl">Day 3 - City Tour and Shopping</h3>
                <span className={`transform ${open === 2 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 2 && (
                <div className="mt-4 space-y-4">
                  <p>Explore the city's famous landmarks, including the Burj Khalifa, Dubai Mall, and Dubai Fountain.</p>
                  <p>Visit traditional souks for shopping, where you can find local handicrafts, spices, and souvenirs.</p>
                  <p>Take a boat ride along the Dubai Creek for a scenic view of the city.</p>
                  <p>Enjoy a delicious lunch at a local restaurant, offering traditional Arabic cuisine.</p>
                </div>
              )}
            </div>

            {/* Day 4 */}
            <div className="cursor-pointer border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(3)}
              >
                <h3 className="font-semibold text-xl">Day 4 - Waterpark and Beach Day</h3>
                <span className={`transform ${open === 3 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 3 && (
                <div className="mt-4 space-y-4">
                  <p>Spend the day at one of Dubai's famous waterparks for some fun in the sun.</p>
                  <p>Enjoy water slides, lazy rivers, and wave pools for the entire family.</p>
                  <p>In the afternoon, relax at Jumeirah Beach and take in the views of the iconic Burj Al Arab.</p>
                  <p>Enjoy a beachside dinner with a view of the ocean.</p>
                </div>
              )}
            </div>

            {/* Day 5 */}
            <div className="cursor-pointer border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(4)}
              >
                <h3 className="font-semibold text-xl">Day 5 - Cultural Tour and Museum Visit</h3>
                <span className={`transform ${open === 4 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 4 && (
                <div className="mt-4 space-y-4">
                  <p>Visit the Dubai Museum to learn about the city's history and culture.</p>
                  <p>Take a tour of the Dubai Opera and enjoy the cultural richness of the city.</p>
                  <p>Visit the Al Fahidi Historical Neighborhood for a glimpse into Dubai's past.</p>
                  <p>End the day with a traditional Emirati dinner in a local restaurant.</p>
                </div>
              )}
            </div>

            {/* Day 6 */}
            <div className="cursor-pointer border-b pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(5)}
              >
                <h3 className="font-semibold text-xl">Day 6 - Adventure Day at Atlantis</h3>
                <span className={`transform ${open === 5 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 5 && (
                <div className="mt-4 space-y-4">
                  <p>Spend the day at Atlantis The Palm, where you can visit the Aquaventure Waterpark.</p>
                  <p>Explore the Lost Chambers Aquarium and get up close with marine life.</p>
                  <p>Relax by the beach or enjoy fine dining at one of the world-class restaurants at Atlantis.</p>
                </div>
              )}
            </div>

            {/* Day 7 */}
            <div className="cursor-pointer pb-3">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleDropdown(6)}
              >
                <h3 className="font-semibold text-xl">Day 7 - Free Day and Departure</h3>
                <span className={`transform ${open === 6 ? 'rotate-180' : ''} transition-all`}>
                  &#9660;
                </span>
              </div>
              {open === 6 && (
                <div className="mt-4 space-y-4">
                  <p>Enjoy your free day for last-minute shopping or sightseeing.</p>
                  <p>Relax at the hotel before your departure.</p>
                  <p>Transfer to Dubai International Airport for your flight back home.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* Inclusions */}
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">What’s Included</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Hotel Pickup & Drop",
              "Dune Bashing",
              "Camel Ride",
              "BBQ Dinner",
              "Live Dance Shows",
              "Sandboarding",
              "Unlimited Soft Drinks",
              "Henna Painting"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-all duration-200 p-5 rounded-2xl shadow-sm flex items-center gap-3"
              >
                <div className="text-green-500 text-xl">
                  ✔
                </div>
                <div className="text-gray-800 font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Things to Do */}
      <section className="w-full  py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Things to Do</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Photography with falcons",
              "Try traditional Arabic attire",
              "Shisha smoking in the lounge",
              "Star gazing in the open desert"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 flex items-center justify-center text-center"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FlyHigh */}
      <section className="w-full bg-yellow-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-4">Why Choose FlyHigh?</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Trusted by thousands of travelers, we deliver unforgettable, safe, and affordable experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-yellow-600 text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600">We guarantee competitive pricing on all our packages without compromising on quality.</p>
            </div>

            <div className="bg-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-yellow-600 text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always available to assist you — before, during, and after your journey.</p>
            </div>

            <div className="bg-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-yellow-600 text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Curated Experiences</h3>
              <p className="text-gray-600">Only the most authentic and highly-rated experiences make it to our list.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-yellow-800 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md transition hover:shadow-lg"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  <span className="text-2xl text-yellow-600">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-6 pb-4 text-gray-600 text-base overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="w-full py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black-900 text-center mb-10">
            5-Day Dubai Tour Package – Policies
          </h2>

          <div className="space-y-5">
            {policies.map((item, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md transition hover:shadow-lg bg-blue-50"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  onClick={() => toggle(index)}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-blue-800">
                    {item.title}
                  </h4>
                  <span className="text-2xl text-blue-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden px-6 pb-4 text-black text-base space-y-2 transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {item.content.map((point, i) => (
                    <p key={i} className="leading-relaxed">
                      • {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Booking Form */}
      <section id="form-section" className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
            Book This Package
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Desert_Safari;
