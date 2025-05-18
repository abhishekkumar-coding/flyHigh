import React from 'react';
import { ImCross } from "react-icons/im";


function EnquiryForm({closeForm}) {
  return (
    <div className="w-full  mx-auto flex flex-col md:flex-row justify-center m-0 p-6 lg:p-16">

      {/* Left Section */}
      <div className="w-full max-w-xl lg:max-w-lg bg-gradient-to-br from-orange-200 to-white text-white shadow-xl rounded-xl m-0 p-6 flex flex-col items-start mb-8 lg:mb-0  md:rounded-tr-none mt-5 md:rounded-br-none md:h-[66vh]">  
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          ✈ FlyHighourz Awaits You
        </h2>
        <p className="text-gray-700">
          Fill out the form and let us tailor your travel experience. Smooth bookings, affordable trips, lasting memories.
        </p>
      </div>

      {/* Right Section - Form */}
      <form className="w-full max-w-xl relative bg-white shadow-2xl rounded-xl p-8 flex flex-col m-0 gap-6">

        {/* Close Button */}  
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeForm}>
          <ImCross size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center">Plan Your Trip</h2>

        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="+91 9876543210"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Destination */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Destination</label>
          <input
            type="text"
            placeholder="Dubai, Goa..."
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Submit Enquiry
          </button>
        </div>
      </form> 
    </div>
  );
}

export default EnquiryForm;
