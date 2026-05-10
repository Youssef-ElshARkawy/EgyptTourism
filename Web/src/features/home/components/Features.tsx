"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Globe, Headset, Car } from "lucide-react";

function Features() {
    const features = [
        {
            icon: Car,
            title: "Safe Transfer",
            description: "Safe & comfortable transport across Egypt.",
        },
        {
            icon: Globe,
            title: "Global Search",
            description: "Find hidden gems & famous monuments.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Payment",
            description: "100% protected bank-grade security.",
        },
        {
            icon: Headset,
            title: "24/7 Support",
            description: "Our dedicated team is ready anytime.",
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
    };

    return (
        <section className="py-10 bg-gradient-to-b from-black via-green-950/40 to-black relative overflow-hidden border-b border-white/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/[0.06] hover:border-green-500/50 hover:shadow-[0_15px_30px_rgba(34,197,94,0.15)] flex flex-col items-center text-center cursor-pointer overflow-hidden"
                            >
                                {/* Top highlight line on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                
                                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-green-400 transition-all duration-500 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:-rotate-12 group-hover:scale-110">
                                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                                </div>
                                
                                <h3 className="relative text-base font-bold text-white mb-1.5 transition-colors duration-300 group-hover:text-green-400">
                                    {item.title}
                                </h3>
                                
                                <p className="relative text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Features;

