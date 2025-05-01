"use client";

import React from "react";

const faqs = [
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
];

const DestinationFaqs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationFaqs;
