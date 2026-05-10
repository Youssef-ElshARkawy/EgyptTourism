"use client";

import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Compass, Ticket, Tag, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsLatter() {
    return (
        <section className="py-16 bg-black relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="p-8 lg:p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        
                        {/* Newsletter Left Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="flex gap-4 items-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                    <Mail className="h-7 w-7" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white capitalize">Travel Club</h2>
                                    <p className="text-gray-400 font-medium text-sm">50,000+ travelers</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold py-2 text-white leading-tight">
                                    Get the Latest <span className="text-green-400">Travel Updates</span>
                                </h2>
                                <p className="text-gray-400 font-medium text-lg mt-2">
                                    Weekly travel guides, seasonal trip offers & exclusive member perks.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="bg-white/5 flex items-center gap-2 rounded-2xl py-2 px-4 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                        <Compass className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Free Guides</span>
                                </div>
                                <div className="bg-white/5 flex items-center gap-2 rounded-2xl py-2 px-4 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                        <Ticket className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Discount Codes</span>
                                </div>
                                <div className="bg-white/5 flex items-center gap-2 rounded-2xl py-2 px-4 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                        <Tag className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Members-Only Deals</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    placeholder="you@example.com" 
                                    className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all" 
                                />
                                <button className="group py-4 px-8 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center">
                                    Subscribe
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                            
                            <div>
                                <p className="text-gray-500 font-medium text-sm">✨ Unsubscribe anytime. No spam, ever.</p>
                            </div>
                        </motion.div>

                        {/* App Download Right Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.15 }}
                            className="bg-gradient-to-bl from-green-950/40 to-black p-8 rounded-3xl space-y-8 border border-white/5 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]"
                        >
                            <div>
                                <p className="border border-green-500/30 bg-green-500/10 py-1.5 px-3 rounded-full w-fit text-xs text-green-400 font-bold tracking-wider">
                                    📱 MOBILE APP
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold py-2 text-white leading-tight">Plan Faster on Our App</h2>
                                <p className="text-gray-400 font-medium text-lg mt-2">
                                    Get exclusive deals, track bookings & plan your favorites on the go.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex gap-4 items-center p-4 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                                    <FontAwesomeIcon icon={faApple} className="text-white text-3xl group-hover:text-green-400 transition-colors" />
                                    <div>
                                        <p className="text-gray-400 font-medium text-sm">Download on the</p>
                                        <p className="text-white font-bold text-xl">App Store</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center p-4 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                                    <FontAwesomeIcon icon={faGooglePlay} className="text-white text-3xl group-hover:text-green-400 transition-colors" />
                                    <div>
                                        <p className="text-gray-400 font-medium text-sm">Get it on</p>
                                        <p className="text-white font-bold text-xl">Google Play</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="text-sm flex gap-3 items-center pt-2">
                                <li className="flex text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                </li>
                                <li className="text-gray-400 font-medium">4.9 • 100K+ downloads</li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}