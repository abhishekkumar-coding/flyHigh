import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import EnquiryForm from './EnquiryForm'
import { RiArrowDropDownLine } from 'react-icons/ri';

function PackageHero({ btnClick, heroText, itinerary, days, inclusions, things, faqs, }) {
    const { title, image, description, title2, description2 } = heroText
    const [activeSection, setActiveSection] = useState('');
    const [open, setOpen] = useState(null);

    const policies = [
  {
    title: "Booking Policy",
    content: "All bookings must be made in advance with complete traveler information and required documentation. A confirmation email will be sent upon successful booking."
  },
  {
    title: "Cancellation Policy",
    content: "Cancellations made 15 days or more before departure are eligible for a full refund minus transaction charges. Cancellations within 15 days are subject to a cancellation fee or may be non-refundable depending on the service."
  },
  {
    title: "Refund Policy",
    content: "Refunds, if applicable, will be processed within 7-10 business days after the cancellation request is approved. Refunds are credited to the original payment method."
  },
  {
    title: "Payment Policy",
    content: "Full payment must be made at the time of booking unless stated otherwise. Accepted payment methods include credit/debit cards, UPI, and bank transfers."
  },
  {
    title: "Travel Insurance Policy",
    content: "Travel insurance is not included in the package by default. Travelers are advised to arrange their own travel insurance covering health, baggage loss, and trip cancellations."
  },
  {
    title: "Amendment Policy",
    content: "Any changes to the itinerary or travel dates must be requested at least 7 days before departure. Amendments are subject to availability and may incur additional charges."
  },
  {
    title: "No-Show Policy",
    content: "Failure to appear at the designated pick-up point or check-in on the scheduled date will be considered a no-show and may result in loss of the booking without refund."
  },
  {
    title: "Liability Policy",
    content: "The company is not responsible for any delays, losses, injuries, or damages caused by third-party vendors or events beyond our control, such as weather or political unrest."
  },
  {
    title: "Passport & Visa Policy",
    content: "It is the traveler’s responsibility to ensure they have valid passports, visas, and permits for international travel. The company is not liable for denied boarding due to invalid documentation."
  },
  {
    title: "Health & Safety Policy",
    content: "All travelers must comply with local health and safety guidelines. The company reserves the right to refuse service to any individual showing symptoms of contagious illness or violating rules."
  }
];


    const toggleDropdown = (index) => {
        setOpen(open === index ? null : index);
    };

    const sectionsRef = {
        itinerary: useRef(null),
        inclusions: useRef(null),
        things: useRef(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        Object.values(sectionsRef).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionsRef).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);
    return (
        <div className='relative w-full'>
            {/* HeroSection */}
            <section
                className="w-full h-[65vh] relative bg-cover bg-center flex items-end justify-start"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-20 left-20 z-10 text-white w-full max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        {title}
                    </h1>
                    <p className="text-lg md:text-2xl mt-2 font-semibold bg-white/20 px-4 py-2 rounded-md inline-block backdrop-blur-sm">
                        INR 94,999 /- per person
                    </p>
                </div>

            </section>
            <div className="max-w-3xl mx-auto z-40 border border-orange-500 backdrop-blur-sm rounded-xl text-white flex items-center justify-between gap-3 md:gap-10 text-sm md:text-2xl sticky top-0 p-4 bg-black/50">
                {['itinerary', 'inclusions', 'things'].map((section) => (
                    <button
                        key={section}
                        onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                        className={`font-semibold border-b-4 transition cursor-pointer duration-200 ${activeSection === section ? 'border-orange-500' : 'border-transparent'}`}
                    >
                        {section === 'itinerary' && 'Itinerary'}
                        {section === 'inclusions' && 'Inclusions'}
                        {section === 'things' && 'Things To Do'}
                    </button>
                ))}

                <button className="px-[10px] py-2 md:px-4 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold">
                    Customise Now
                </button>
            </div>

            {/* Short Description */}
            <section className="w-full  py-12 px-4 ">
                <div className="max-w-5xl bg-gradient-to-l from-yellow-600 to-white p-4 mx-auto text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-yellow-800 mb-6">{title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {description2}
                    </p>
                </div>
            </section>

            {/* Itinerary  */}
            <section id="itinerary" ref={sectionsRef.itinerary} className="w-full py-12 px-4">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{days}</h2>
                    <div className="space-y-10 text-lg text-gray-700">
                        {itinerary.map((item, index) => (
                            <div key={index} className="cursor-pointer border-b pb-3">
                                <div
                                    className="flex items-center justify-between"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <h3 className="font-semibold text-xl">{item.day}</h3>
                                    <span className={`transform ${open === index ? 'rotate-180' : ''} transition-all`}>
                                        <RiArrowDropDownLine className={`text-3xl transform transition-transform `} />

                                    </span>
                                </div>
                                {open === index && (
                                    <div className="mt-4 space-y-4">
                                        {item.details.map((point, i) => (
                                            <p key={i}>{point}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inclusions */}
            <section id="inclusions" ref={sectionsRef.inclusions} className="w-full py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-left mb-8">What&rsquo;s Included</h2>

                    <div className="flex flex-col gap-4">
                        {inclusions.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="text-green-600">✔</span>
                                <p className="text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Things to do */}
            <section id="things" ref={sectionsRef.things} className="w-full py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-left mb-8">Things to Do</h2>

                    <div className="flex flex-col gap-4">
                        {things.map((item, index) => (
                            <p key={index} className="text-gray-800 flex items-center gap-5 text-justify px-3">
                               <h1 className='font-extrabold'> • </h1> {item}
                            </p>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why shoose FlyHighTourz  */}
            <section className="w-full py-16 px-4">
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
            <PackageFaqs faqs={faqs} />

            {/* Policies */}
            <PackagePolocies policies={policies} />

            {/* Enquiry Form  */}
            <EnquiryForm />
        </div>
    )
}

export default PackageHero

function PackageFaqs({ faqs }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
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
    )
}

function PackagePolocies({ policies }) {


    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) =>
        setOpenIndex(openIndex === index ? null : index);
    return (
        <section className="w-full py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black-900 text-center mb-10">
                    Policies
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
                                    <p className="leading-relaxed">
                                        • {item.content}
                                    </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
