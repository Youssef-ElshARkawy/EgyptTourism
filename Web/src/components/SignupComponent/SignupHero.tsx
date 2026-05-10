"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Zap, ShieldCheck, Map, Ticket, 
  Compass, Hotel, Heart, Sparkles 
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Zap className="w-5 h-5 text-green-400" />,
    title: "Easy & Fast",
    label: "Signup in seconds"
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
    title: "Secure Account",
    label: "Safe & Encrypted"
  },
  {
    id: 3,
    icon: <Sparkles className="w-5 h-5 text-green-400" />,
    title: "Exclusive",
    label: "Member Destinations"
  }
];

const highlights = [
  { icon: <Ticket className="w-4 h-4" />, text: "Easy booking" },
  { icon: <Heart className="w-4 h-4" />, text: "Save favorite places" },
  { icon: <Compass className="w-4 h-4" />, text: "Personalized experience" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  }
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function SignupHero() {
  return (
    <div className="relative min-h-[600px] lg:min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 py-16">
      {/* Energetic Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Travel Icons */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-24 right-20 hidden md:block text-green-500/10"
      >
        <Map size={56} />
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
        className="absolute bottom-32 left-20 hidden md:block text-green-500/10"
      >
        <Hotel size={48} />
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 3 }}
        className="absolute top-1/2 left-32 hidden lg:block text-green-500/10"
      >
        <Ticket size={40} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full text-center space-y-8"
      >
        {/* Animated Title Section */}
        <motion.div variants={itemVariants} className="relative inline-block">
          {/* Green Glow behind title */}
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-green-500/20 blur-[50px] rounded-full" 
          />
          
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter relative">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Egypt</span>
            <span className="text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">Explore</span>
          </h1>
        </motion.div>

        {/* Subtitle & Encouraging Text */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            Start your journey and create your account to explore Egypt
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-green-500/50" />
            Join thousands of travelers discovering Egypt
            <Sparkles className="w-4 h-4 text-green-500/50" />
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 py-4"
        >
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] rounded-full border border-white/5 text-xs text-gray-300">
              <span className="text-green-500">{h.icon}</span>
              {h.text}
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1">{benefit.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}