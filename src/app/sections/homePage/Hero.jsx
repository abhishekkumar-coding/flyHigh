'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdSearch } from "react-icons/io";

const sentences = [
    "Exploring Places, Connecting People",
    "Discover New Horizons, Embrace Adventure",
    "Uncover Hidden Gems, Share the Journey",
    "Venture Beyond the Ordinary, Connect with Locals",
    "Experience the World, Build Connections",
    "Explore Diverse Destinations, Meet New Faces",
    "Travel Far, Make Memories, Connect with Cultures",
    "Journey to the World's Wonders, Unite with Travelers",
    "Adventure Awaits, Connections Await You",
    "Wander the Globe, Build Lasting Friendships"
];

function Hero() {
    const [currentSentence, setCurrentSentence] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSentence((prev) => (prev + 1) % sentences.length);
        }, 3000); // Change sentence every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="w-full h-[90vh] relative flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/homepage/home_page_bg.jpeg')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl"
                >
                    Make Your Journey Magical ✨
                </motion.h1>

                <motion.p
                    key={currentSentence}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className="text-lg md:text-2xl font-medium text-orange-300 mt-6 max-w-2xl"
                >
                    {sentences[currentSentence]}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width : "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center w-full max-w-md md:max-w-xl lg:max-w-2xl bg-white rounded-full px-4 py-2 mt-10 border-4 border-orange-400"
                >
                    <input
                        type="text"
                        placeholder='Search destination "Rajasthan"'
                        className="flex-grow bg-transparent text-black px-3 py-2 focus:outline-none text-lg"
                    />
                    <IoMdSearch className="text-3xl text-black cursor-pointer" />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
