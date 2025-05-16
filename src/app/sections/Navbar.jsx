"use client"

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);
    const [specializedTripDropdownOpen, setSpecializedTripDropdownOpen] = useState(false);
    const prevScrollPos = useRef(0);

    const handleDestinationDropdownToggle = () => {
        setDestinationDropdownOpen(!destinationDropdownOpen);
    }

    const handleSpecializedTripDropdownToggle = () => {
        setSpecializedTripDropdownOpen(!specializedTripDropdownOpen);
    }

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
        <>
            {/* Desktop + Mobile Navbar */}
            <div className={`${showNavbar ? 'translate-y-0' : '-translate-y-full'} w-full backdrop-blur-sm text-white fixed z-50 transition-all duration-300`}>
                <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold h-18 mb-5">
                        <Link href="/">
                            <Image
                                src="/FlyHigh_logo.png"
                                alt="FlyHigh Logo"
                                width={120}
                                height={20}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center justify-center space-x-8 text-[20px] font-semibold">
                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link href="/trip-planner" className="flex items-center">
                                Mice
                            </Link>
                        </li>
                        <li onClick={handleDestinationDropdownToggle} className="group relative hover:text-yellow-400 cursor-pointer">
                            <div className="flex items-center justify-center">
                                <span>Destination</span>
                                <RiArrowDropDownLine className={`text-3xl transform transition-transform duration-300 ${destinationDropdownOpen ? "-rotate-180" : ""}`} />
                            </div>

                            {/* Dropdown Menu */}
                            <div className={`absolute flex items-start justify-between top-full left-0 bg-white shadow-md mt-2 p-4 w-72 rounded-md z-50 scale-95 opacity-0 pointer-events-none transition-all duration-300 ease-in-out ${destinationDropdownOpen ? "opacity-100 scale-100" : "hidden"}`}>
                                {/* Domestic */}
                                <div className="mb-4">
                                    <h3 className="font-semibold text-lg text-gray-700 mb-2">Domestic</h3>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="hover:text-yellow-400 cursor-pointer"><Link href={"/destinations/domestic/ayodhya"}>Ayodhya</Link></li>
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
                                        <li className="hover:text-yellow-400 cursor-pointer"><Link href={"/destinations/international/dubai"}>Dubai</Link></li>
                                        <li className="hover:text-yellow-400 cursor-pointer"><Link href={"/destinations/international/maldive"}>Maldive</Link></li>
                                        <li className="hover:text-yellow-400 cursor-pointer">Thailand</li>
                                        <li className="hover:text-yellow-400 cursor-pointer">Singapore</li>
                                        <li className="hover:text-yellow-400 cursor-pointer">Vietnam</li>
                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li onClick={handleSpecializedTripDropdownToggle} className="relative group hover:text-yellow-400 cursor-pointer">
                            {/* Parent Wrapper with group */}
                            <div className="flex items-center justify-center">
                                <span>Specialized Trip</span>
                                <RiArrowDropDownLine className={`text-3xl transform transition-transform duration-300 ${specializedTripDropdownOpen ? "-rotate-180" : ""}`} />
                            </div>

                            {/* Dropdown - placed inside the group so hover works on both link & dropdown */}
                            <div className={`absolute top-full left-0 mt-2 bg-white shadow-md p-4 w-72 rounded-md z-50 
                  opacity-0 scale-95 pointer-events-none 
                  transition-all duration-300 ease-in-out ${specializedTripDropdownOpen ? "opacity-100 scale-100" : "hidden"}`}>
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



                        <li className="hover:text-yellow-400 cursor-pointer"><Link href="/blogs">Blogs</Link></li>

                        <li className="hover:text-yellow-400 cursor-pointer"><Link href="/contactus">Contact Us</Link></li>
                    </ul>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-4xl focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Full-Screen Menu */}
            <div className={`${mobileMenuOpen ? "translate-x-0" : "-translate-x-[1000px]"} fixed w-full md:max-w-1/3 inset-0 z-50 bg-white text-black p-6 overflow-y-auto transition-translate duration-200 transform`}>
                <div className="flex justify-between items-center mb-6">
                    <div className="text-2xl font-bold">LOGO</div>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl text-gray-800"
                    >
                        <IoCloseOutline />
                    </button>
                </div>

                <nav className="space-y-6 text-lg font-medium">
                    <Link href="/trip-planner" className="block hover:text-yellow-500">
                        Trip Planner <sup className="text-red-400">New</sup>
                    </Link>

                    <div>
                        <p className="font-semibold mb-1">Destinations</p>
                        <ul className="ml-3 text-sm text-gray-700 space-y-1">
                            <li className="text-gray-500">Domestic:</li>
                            <li><Link href="#" className="hover:text-yellow-500">Goa</Link></li>
                            <li><Link href="#" className="hover:text-yellow-500">Kerala</Link></li>
                            <li><Link href="#" className="hover:text-yellow-500">Ladakh</Link></li>

                            <li className="mt-3 text-gray-500">International:</li>
                            <li><Link href="/destinations/international/dubai" className="hover:text-yellow-500">Dubai</Link></li>
                            <li><Link href="#" className="hover:text-yellow-500">Thailand</Link></li>
                            <li><Link href="#" className="hover:text-yellow-500">Singapore</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Specialized Trips</p>
                        <ul className="ml-3 text-sm text-gray-700 space-y-1">
                            <li><Link href="#" className="hover:text-yellow-500">Honeymoon Trips</Link></li>
                            <li><Link href="#" className="hover:text-yellow-500">Adventure Tours</Link></li>
                            <li><Link href="#" className="hover:text-yellow-500">Luxury Escapes</Link></li>
                        </ul>
                    </div>

                    <Link href="/blogs" className="block hover:text-yellow-500">
                        Blogs
                    </Link>

                    <Link href="/contactus" className="block hover:text-yellow-500">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
