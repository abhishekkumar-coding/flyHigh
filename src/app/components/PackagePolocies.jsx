"use client"
import React, { useState } from 'react'

function PackagePolocies({policies}) {


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);
  return (
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
  )
}

export default PackagePolocies