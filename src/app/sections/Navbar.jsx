'use client'
import React, { useEffect, useRef, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


function Navbar() {

    const [showNavbar, setShowNavbar] = useState(true);
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setShowNavbar(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${showNavbar ? 'translate-y-0' : '-translate-y-full'} w-full bg-black/40 text-white fixed z-50 transition-all duration-300`}>
            <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">LOGO</div>

                {/* Navigation Links (hidden on small screens) */}
                <ul className="hidden md:flex items-center justify-center space-x-8 text-[20px] font-semibold">
                    <li className="hover:text-yellow-400 cursor-pointer">
                        <span>
                            Trip Planner <sup className="text-red-400">New</sup>
                        </span>
                    </li>
                    <li className="group hover:text-yellow-400 cursor-pointer flex items-center justify-center">
                        <span>Destination</span> <RiArrowDropDownLine className='text-3xl transform transition-transform duration-300 group-hover:-rotate-180' />
                    </li>
                    <li className="group hover:text-yellow-400 cursor-pointer flex items-center justify-center">
                        <span>Specialed Trip</span>
                        <RiArrowDropDownLine className="text-3xl transform transition-transform duration-300 group-hover:-rotate-180" />
                    </li>
                    <li className="hover:text-yellow-400 cursor-pointer">Blogs</li>

                    <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
                </ul>

                {/* Hamburger Menu (Visible on small screens) */}
                <div className="md:hidden">
                    <button className="text-6xl">☰</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
