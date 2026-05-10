"use client";

import Link from 'next/link';
import logo from '../../../assets/images/Logo1.png';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion, Variants } from 'framer-motion';

export default function Footer() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    return (
        <footer className="relative pt-16 pb-8 border-t border-white/10 mt-10 bg-black overflow-hidden">
            {/* Glassy Green/Black Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-green-950/40 to-black backdrop-blur-xl z-0 pointer-events-none"></div>
            
            {/* Decorative background glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12 mb-12"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="xl:col-span-2 flex flex-col space-y-6">
                        <Link href="/" className="inline-block bg-white/10 p-3 rounded-2xl backdrop-blur-md w-max border border-white/5">
                            <Image src={logo} alt="EgyptXplore Logo" className="h-14 w-auto object-contain drop-shadow-md" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed font-medium max-w-sm">
                            EgyptXplore is your ultimate guide to discovering the wonders of Egypt. From ancient pharaonic monuments to vibrant modern cities and stunning Red Sea resorts, we help you plan the perfect journey.
                        </p>
                        <ul className="flex gap-4 pt-2">
                            <li>
                                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 shadow-sm transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                    <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 shadow-sm transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                    <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 shadow-sm transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                    <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 shadow-sm transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                    <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Explore Destinations */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Explore
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                        </h3>
                        <ul className="space-y-3 font-medium text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Pyramids & Monuments
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Museums & Culture
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Red Sea Resorts
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Nile Cruises
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Desert Safaris
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                        </h3>
                        <ul className="space-y-3 font-medium text-gray-400">
                            <li>
                                <Link href="/About" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    About EgyptXplore
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    FAQs & Guidelines
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Customer Support */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            For Travelers
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                        </h3>
                        <ul className="space-y-3 font-medium text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    My Bookings
                                </Link>
                            </li>
                            <li>
                                <Link href="/Wishlist" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Saved Places
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Travel Advice
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    Tour Packages
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-400"
                >
                    <p>Copyright © {new Date().getFullYear()} EgyptXplore. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <span className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                            Secure Payments
                        </span>
                        <span className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                            Verified Guides
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}