"use  client"
import React from 'react'

function page() {
    return (
        <div className='w-full bg-gray-50 text-gray-800'>
          {/* Hero section */}
          <section className='bg-[url("/contact-hero.jpg")] bg-cover bg-center h-[400px] flex items-center justify-center text-white relative'>
            <div className='absolute inset-0 bg-black/60'></div>
            <div className='relative z-10 text-center'>
              <h1 className='text-4xl font-bold'>Contact Us</h1>
              <p className='mt-2 text-lg'>We’re here to help you plan your perfect trip</p>
            </div>
          </section>
      
          {/* Contact Form Section */}
          <div className='max-w-7xl mx-auto py-12 px-4 md:px-8'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              {/* Form */}
              <div>
                <h2 className='text-2xl font-bold mb-6'>Send Us a Message</h2>
                <form className='space-y-6'>
                  <div>
                    <label className='block font-semibold mb-2'>Name</label>
                    <input type='text' placeholder='Your Name' className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                  </div>
                  <div>
                    <label className='block font-semibold mb-2'>Email</label>
                    <input type='email' placeholder='you@example.com' className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                  </div>
                  <div>
                    <label className='block font-semibold mb-2'>Message</label>
                    <textarea rows='5' placeholder='Write your message...' className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                  </div>
                  <button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'>Send Message</button>
                </form>
              </div>
      
              {/* Contact Details */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold'>Get in Touch</h2>
                <p className='text-gray-600'>Reach out to us with any questions or feedback. We’d love to hear from you.</p>
                <div className='space-y-4'>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Email:</strong> hello@travelbuddy.com</p>
                  <p><strong>Address:</strong> 123 Wander Lane, Explore City, World</p>
                </div>
              </div>
            </div>
          </div>
      
          {/* Map Section */}
          <div className='w-full h-[400px]'>
            <iframe
              className='w-full h-full border-0'
              src="https://maps.google.com/maps?q=New+Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
      
          {/* FAQs */}
          <div className='bg-gray-100 py-12 px-4 md:px-8'>
            <h2 className='text-3xl font-semibold mb-8 text-center'>Frequently Asked Questions</h2>
            <div className='max-w-4xl mx-auto space-y-6'>
              <div>
                <h3 className='font-bold text-lg'>Can I book trips from your site?</h3>
                <p className='text-gray-600'>Yes, we offer curated travel packages and booking support. Contact us to know more.</p>
              </div>
              <div>
                <h3 className='font-bold text-lg'>What destinations do you cover?</h3>
                <p className='text-gray-600'>We cover major global destinations and hidden gems based on your interests.</p>
              </div>
            </div>
          </div>
        </div>
      );
      
      
}

export default page