'use client'

import React, { useState } from 'react'

const EventEnquiryForm = () => {
  const [form, setForm] = useState({
    hotelCategory: '',
    destination: '',
    name: '',
    company: '',
    purpose: '',
    email: '',
    phone: '',
    peopleCount: '',
    requirement: '',
    optional: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10  bg-white/30 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">✨ Plan Your Perfect Event</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Grid Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Hotel Category</label>
            <select
              name="hotelCategory"
              value={form.hotelCategory}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select</option>
              <option value="3-star">3 Star</option>
              <option value="4-star">4 Star</option>
              <option value="5-star">5 Star</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 font-semibold block mb-1">Destination</label>
            <input
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="e.g. Goa, Jaipur"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Grid Row 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold block mb-1">Company</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Grid Row 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Purpose of Event</label>
            <input
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              placeholder="Wedding, Corporate, etc."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold block mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Grid Row 4 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold block mb-1">Number of People</label>
            <input
              name="peopleCount"
              type="number"
              value={form.peopleCount}
              onChange={handleChange}
              placeholder="e.g. 50"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Textarea Row */}
        <div>
          <label className="text-gray-700 font-semibold block mb-1">Requirements</label>
          <textarea
            name="requirement"
            value={form.requirement}
            onChange={handleChange}
            placeholder="Food, Decor, Rooms, etc."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold block mb-1">Optional Preferences</label>
          <textarea
            name="optional"
            value={form.optional}
            onChange={handleChange}
            placeholder="Beach view, DJ, Buffet..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  )
}

export default EventEnquiryForm;
