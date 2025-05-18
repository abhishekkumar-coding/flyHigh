'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoMdSearch } from "react-icons/io";
import EnquiryForm from "@/app/components/EnquiryForm";

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

    const [formOpen, setFormOpen] = useState(false);



    const bgImages = [
        "/homepage/home_page_bg.png",
        "/homepage/home_page_bg1.png",
        "/homepage/home_page_bg2.png",
        "/homepage/home_page_bg3.png",
        "/homepage/home_page_bg4.png",
        "/homepage/home_page_bg5.png",
        "/homepage/home_page_bg6.png",
        "/homepage/home_page_bg7.png",
    ];

    // Duplicate first image at the end for seamless loop
    const slides = [...bgImages, bgImages[0]];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    // Ref to track the motion div for instantly resetting position
    const motionRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsAnimating(true);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // When currentIndex changes
    useEffect(() => {
        // If we reach the duplicate slide (last index)
        if (currentIndex === slides.length - 1) {
            // After animation ends, reset instantly to 0 without animation
            setTimeout(() => {
                setIsAnimating(false);  // Disable animation for reset
                setCurrentIndex(0);     // Reset index to 0
            }, 800); // match duration of animation (0.8 sec)
        }
    }, [currentIndex, slides.length]);

    return (
        <section className="w-full h-[90vh] relative overflow-hidden">
            <motion.div
                ref={motionRef}
                className="flex h-full"
                animate={{ x: `-${currentIndex * 100}vw` }}
                transition={isAnimating ? { ease: "easeInOut", duration: 0.8 } : { duration: 0 }}
            >
                {slides.map((img, index) => (
                    <div
                        key={index}
                        className="w-screen h-[90vh] flex-shrink-0 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />
                    </div>
                ))}
            </motion.div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-8xl font-bold text-white max-w-4xl">
                    Discover the world with <span className="text-orange-400">FlyHighTourz</span>
                </h1>
                <p className="text-lg md:text-2xl text-orange-300 mt-4 max-w-xl">
                    Best packages for domestic and international travel
                </p>
                <button onClick={() => setFormOpen(true)} className="cursor-pointer mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                    Get a Call Back
                </button>
            </div>
            <div className="absolute z-20 flex bg-black/30 items-start mx-auto justify-center left-1/2 transform -translate-x-1/2 bottom-10  rounded-xl p-4 bg-blurred-2xl">
                {bgImages.map((img, index) => (
                    <div key={index} className="bg-cover bg-center">
                        <img
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className={`w-8 h-14 md:w-16 md:h-20 rounded-lg mx-5 md:mx-2 cursor-pointer opacity-60 transition-transform duration-300 ${currentIndex === index ? "scale-120 opacity-100" : ""}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsAnimating(true);
                            }}
                        />
                    </div>
                ))}
            </div>
            {formOpen && (
  <div className="fixed top-0 left-0 w-full h-full z-[99] flex items-center justify-center">
    <EnquiryForm closeForm={() => setFormOpen(false)} />
  </div>
)}

        </section>
    );
}
export default Hero;
