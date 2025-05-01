"use clent"
import React, { useState } from 'react'

function PackageFaqs({faqs}) {

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

export default PackageFaqs