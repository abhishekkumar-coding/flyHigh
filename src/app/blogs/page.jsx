"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff } from 'lucide-react';
import BlogHero from '../sections/BlogHero';

const heroData = {
  headline: "Explore The World With Us",
  subheading: "Discover breathtaking destinations, unforgettable experiences, and seamless travel bookings — all in one place.",
  cta: "Book Your Journey",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80", // scenic beach image
};

const HeroSection = () => {
  return (
    <div>
        <BlogHero/>
    </div>
    // <section className="w-full min-h-screen flex items-center justify-between px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white">
    //   <div className="flex flex-col gap-6 max-w-xl z-10">
    //     <motion.h1 
    //       initial={{ opacity: 0, y: 30 }} 
    //       animate={{ opacity: 1, y: 0 }} 
    //       transition={{ duration: 0.7 }} 
    //       className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
    //     >
    //       {heroData.headline}
    //     </motion.h1>
        
    //     <motion.p 
    //       initial={{ opacity: 0, y: 20 }} 
    //       animate={{ opacity: 1, y: 0 }} 
    //       transition={{ delay: 0.2, duration: 0.6 }} 
    //       className="text-gray-600 text-lg md:text-xl"
    //     >
    //       {heroData.subheading}
    //     </motion.p>
        
    //     <motion.button 
    //       whileHover={{ scale: 1.05 }} 
    //       whileTap={{ scale: 0.95 }} 
    //       transition={{ type: "spring", stiffness: 400, damping: 10 }} 
    //       className="mt-4 w-fit flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
    //     >
    //       {heroData.cta}
    //       <PlaneTakeoff className="w-5 h-5" />
    //     </motion.button>
    //   </div>

    //   <motion.div 
    //     initial={{ opacity: 0, scale: 0.95 }} 
    //     animate={{ opacity: 1, scale: 1 }} 
    //     transition={{ delay: 0.3, duration: 0.8 }} 
    //     className="hidden lg:block w-1/2"
    //   >
    //     <img 
    //       src={heroData.image} 
    //       alt="Travel Destination" 
    //       className="rounded-3xl shadow-2xl w-full h-auto object-cover"
    //     />
    //   </motion.div>
    // </section>
  );
};

export default HeroSection;
