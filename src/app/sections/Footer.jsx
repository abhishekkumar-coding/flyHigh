"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { RiWhatsappFill } from "react-icons/ri"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

function Footer() {
    return (
        <footer className="w-full bg-gray-100 text-gray-800 px-4 py-10 mt-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-between">
                    {/* Logo & Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1 min-w-[250px]"
                    >
                        <div className="mb-6">
                            <h1 className="text-3xl sm:text-4xl font-bold">LOGO</h1>
                        </div>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex items-center gap-3">
                                <RiWhatsappFill className="text-xl text-green-600" />
                                <span className="font-medium">+91 76681 96232</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-xl text-blue-600" />
                                <span className="font-medium">+91 76681 96232</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoMdMail className="text-xl text-red-500" />
                                <span className="font-medium break-all">abhiwebdev2.0@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-xl text-yellow-600 mt-1" />
                                <span className="font-medium max-w-xs">
                                    H.Q. - 3rd Floor, Landmark Tower, Plot no-2, South City-1, Ashok Marg, Sector 41 Gurugram, Haryana 122001
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Link Sections */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-10 justify-between flex-1 min-w-[250px]"
                    >
                        {/* Quick Links */}
                        <div className="min-w-[150px]">
                            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                            <ul className="space-y-2 text-sm">
                                <li>Home</li>
                                <li>Blogs</li>
                                <li>Specialized Holidays</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Cancellation Policy</li>
                                <li>Payment Details</li>
                            </ul>
                        </div>

                        {/* Domestic */}
                        <div className="min-w-[150px]">
                            <h2 className="text-xl font-semibold mb-4">Domestic</h2>
                            <ul className="space-y-2 text-sm">
                                <li>Goa</li>
                                <li>North East</li>
                                <li>Andaman</li>
                                <li>Kerala</li>
                                <li>Ladakh</li>
                                <li>Kashmir</li>
                            </ul>
                        </div>

                        {/* International */}
                        <div className="min-w-[150px]">
                            <h2 className="text-xl font-semibold mb-4">International</h2>
                            <ul className="space-y-2 text-sm">
                                <li>Dubai</li>
                                <li>Thailand</li>
                                <li>Singapore</li>
                                <li>Vietnam</li>
                                <li>Maldives</li>
                                <li>Bali</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 border-t pt-6 text-center text-sm text-gray-500"
                >
                    © {new Date().getFullYear()} All Rights Reserved | Designed by Abhi Web Dev
                </motion.div>
            </motion.div>
        </footer>
    )
}

export default Footer
