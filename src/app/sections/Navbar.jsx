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
        <div className={`${showNavbar ? 'translate-y-0' : '-translate-y-full'} w-full bg-black/40 backdrop-blur-sm text-white fixed z-50 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">LOGO</div>

                {/* Navigation Links (hidden on small screens) */}
                <ul className="hidden md:flex items-center justify-center space-x-8 text-[20px] font-semibold">
                    <li className="hover:text-yellow-400 cursor-pointer">
                        <span>
                            Trip Planner <sup className="text-red-400">New</sup>
                        </span>
                    </li>
                    <li className="group relative hover:text-yellow-400 cursor-pointer">
                        <div className="flex items-center justify-center">
                            <span>Destination</span>
                            <RiArrowDropDownLine className="text-3xl transform transition-transform duration-300 group-hover:-rotate-180" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute flex items-start justify-between top-full left-0 bg-white shadow-md mt-2 p-4 w-72 rounded-md z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
                            {/* Domestic */}
                            <div className="mb-4">
                                <h3 className="font-semibold text-lg text-gray-700 mb-2">Domestic</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li className="hover:text-yellow-400 cursor-pointer">Goa</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Kerala</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Ladakh</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Kashmir</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">North East</li>
                                </ul>
                            </div>

                            {/* International */}
                            <div>
                                <h3 className="font-semibold text-lg text-gray-700 mb-2">International</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li className="hover:text-yellow-400 cursor-pointer">Dubai</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Thailand</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Singapore</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Vietnam</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Maldives</li>
                                </ul>
                            </div>
                        </div>
                    </li>


                    <li className="relative group hover:text-yellow-400 cursor-pointer">
                        {/* Parent Wrapper with group */}
                        <div className="flex items-center justify-center">
                            <span>Specialized Trip</span>
                            <RiArrowDropDownLine className="text-3xl transform transition-transform duration-300 group-hover:-rotate-180" />
                        </div>

                        {/* Dropdown - placed inside the group so hover works on both link & dropdown */}
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-md p-4 w-72 rounded-md z-50 
                  opacity-0 scale-95 pointer-events-none 
                  group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
                  transition-all duration-300 ease-in-out">
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="hover:text-yellow-500 cursor-pointer">Honeymoon Trips</li>
                                <li className="hover:text-yellow-500 cursor-pointer">Adventure Tours</li>
                                <li className="hover:text-yellow-500 cursor-pointer">Wellness Retreats</li>
                                <li className="hover:text-yellow-500 cursor-pointer">Senior Citizen Trips</li>
                                <li className="hover:text-yellow-500 cursor-pointer">Pilgrimage Packages</li>
                                <li className="hover:text-yellow-500 cursor-pointer">Luxury Escapes</li>
                                <li className="hover:text-yellow-500 cursor-pointer">Workation Trips</li>
                            </ul>
                        </div>
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
