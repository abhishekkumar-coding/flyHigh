"use client";

import React from "react";



const DestinationFaqs = ({faqs}) => {
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
