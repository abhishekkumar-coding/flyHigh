"use client"

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [BgColor, setBgColor] = useState(false)
    const prevScrollPos = useRef(0);

    // const handleDestinationDropdownToggle = (e) => {
    //     e.stopPropagation();
    //     setDestinationDropdownOpen(!destinationDropdownOpen);
    // }

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (destRef.current && !destRef.current.contains(event.target)) {
    //             setDestinationDropdownOpen(false);
    //         }
    //         if (specializedRef.current && !specializedRef.current.contains(event.target)) {
    //             setSpecializedTripDropdownOpen(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setDestinationDropdownOpen(false);
    //         setSpecializedTripDropdownOpen(false);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const handleSpecializedTripDropdownToggle = () => {
    //     setSpecializedTripDropdownOpen(!specializedTripDropdownOpen);
    // }

    let scrollValue = 600

    useEffect(()=>{
        const handleScroll = ()=>{
            if(scrollValue<window.scrollY){
                setBgColor(true)
            }
            else{
                setBgColor(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

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
            <div className={`${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${BgColor ? "bg-black/80" : ""} w-full text-white fixed z-30 transition-all duration-300`}>
                <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold h-18 mb-5">
                        <Link href="/">
                            <Image
                                src="/FlyHigh_logo.png"
                                alt="FlyHigh Logo"
                                width={100}
                                height={20}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center justify-center space-x-14 text-xl font-medium">
                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link href="/mice" className="flex items-center">
                                Mice
                            </Link>
                        </li>
                        <li className="relative group cursor-pointer hover:text-yellow-400">
                            <div className="flex items-center justify-center">
                                <span className=' py-4'>Destination</span>
                                <RiArrowDropDownLine className={`text-3xl transform transition-transform duration-300 group-hover:-rotate-180`} />
                            </div>

                            {/* Dropdown Menu */}
                            <div
                                className="absolute flex items-start justify-between top-12 left-0 bg-white shadow-md mt-2 p-4 w-72 rounded-md z-50 opacity-0 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 hidden group-hover:flex"
                            >
                                {/* Domestic */}
                                <div className="mb-4">
                                    <h3 className="font-semibold text-lg text-gray-700 mb-2">Domestic</h3>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/ayodhya">Ayodhya</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/goa">Goa</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/kerala">Kerala</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/ladakh">Ladakh</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/kashmir">Kashmir</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/manali">Manali</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/domestic/northeast">North East</Link></li>
                                    </ul>
                                </div>

                                {/* International */}
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-700 mb-2">International</h3>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="hover:text-yellow-400"><Link href="/destinations/international/dubai">Dubai</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/international/maldive">Maldive</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/international/thailand">Thailand</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/international/singapore">Singapore</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/international/vietnam">Vietnam</Link></li>
                                        <li className="hover:text-yellow-400"><Link href="/destinations/international/bali">Bali</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>




                        <li className="relative group hover:text-yellow-400 cursor-pointer">
                            {/* Parent Wrapper with group */}
                            <div className="flex items-center justify-center">
                                <span className='py-4'>Specialized Trip</span>
                                <RiArrowDropDownLine className={`text-3xl transform transition-transform duration-300 group-hover:-rotate-180`} />
                            </div>

                            {/* Dropdown - placed inside the group so hover works on both link & dropdown */}
                            <div
                                className={`absolute flex items-start justify-between top-12 left-0 bg-white shadow-md mt-2 p-4 w-72 rounded-md z-50 opacity-0 scale-95 translate-y-2 transiton-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 hidden group-hover:flex`}
                            >
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

                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link
                                href="/contactus"
                                className="block bg-orange-500 text-white rounded-lg px-4 py-2 hover:text-gray-200 hover:bg-orange-600 transition duration-300"
                            >
                                Contact Us
                            </Link></li>
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
