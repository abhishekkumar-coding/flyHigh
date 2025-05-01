'use client';

import React, { useEffect, useState } from 'react';

const EnquiryForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    date: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Enquiry submitted successfully!');
    setShowForm(false);
  };


  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center backdrop-blur-sm">
      <div className="relative w-[95%] max-w-md p-6 bg-white/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-200">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-center text-gray-800 mb-5">
          Travel Enquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.destination}
            onChange={handleChange}
          />
          <input
            type="number"
            name="travelers"
            placeholder="No. of Travelers"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.travelers}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.date}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Additional Message"
            className="w-full px-4 py-2 border border-gray-300 text-black text-xl font-semibold rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full py-2 bg-yellow-400 hover:bg-yellow-500  text-white font-medium rounded-md transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
