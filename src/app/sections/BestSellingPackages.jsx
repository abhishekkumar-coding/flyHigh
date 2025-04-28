"use client";

import React from 'react';
import { motion } from 'framer-motion';

const domesticPackages = [
  {
    title: 'Kashmir Delight',
    location: 'Kashmir, India',
    duration: '5 Nights / 6 Days',
    price: '₹25,000',
    image: 'kashmir_2.jpeg',
  },
  {
    title: 'Goa Getaway',
    location: 'Goa, India',
    duration: '3 Nights / 4 Days',
    price: '₹15,000',
    image: 'goa_2.jpeg',
  },
  {
    title: 'Kerala Escape',
    location: 'Kerala, India',
    duration: '4 Nights / 5 Days',
    price: '₹22,000',
    image: 'kerala_2.jpeg',
  },
];

const internationalPackages = [
  {
    title: 'Maldives Honeymoon',
    location: 'Maldives',
    duration: '4 Nights / 5 Days',
    price: '₹60,000',
    image: 'maldieve_2.jpeg',
  },
  {
    title: 'Dubai Explorer',
    location: 'Dubai, UAE',
    duration: '5 Nights / 6 Days',
    price: '₹55,000',
    image: 'dubai_2.jpeg',
  },
  {
    title: 'Thailand Tour',
    location: 'Thailand',
    duration: '6 Nights / 7 Days',
    price: '₹50,000',
    image: 'thailand_2.jpeg',
  },
];

function BestSellingPackages() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-left mb-12"
        >
          Best Selling Packages
        </motion.h2>

        {/* Domestic Packages */}
        <div className="mb-10">
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            Domestic Packages
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domesticPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
              >
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="text-lg font-semibold">{pkg.title}</h4>
                  <p className="text-gray-600 text-sm">{pkg.location}</p>
                  <p className="text-sm text-gray-500">{pkg.duration}</p>
                  <p className="text-blue-600 font-bold">{pkg.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* International Packages */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            International Packages
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internationalPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
              >
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="text-lg font-semibold">{pkg.title}</h4>
                  <p className="text-gray-600 text-sm">{pkg.location}</p>
                  <p className="text-sm text-gray-500">{pkg.duration}</p>
                  <p className="text-blue-600 font-bold">{pkg.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellingPackages;
