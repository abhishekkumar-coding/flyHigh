'use client';

import React from 'react';
import { motion } from 'framer-motion';

const heroData = {
  headline: "Wander. Explore. Discover.",
  subheadline: "Your journey begins here. Read travel stories, tips, and experiences from around the world.",
  cta: "Explore the Blog",
  backgroundImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
};

const BlogHero = () => {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl px-6 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          {heroData.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 mb-6"
        >
          {heroData.subheadline}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          {heroData.cta}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BlogHero;
