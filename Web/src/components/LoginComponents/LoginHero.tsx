"use client";

import { motion, Variants } from "framer-motion";
import { 
  Users, MapPin, Hotel, Plane, 
  Compass, Camera, Globe, Landmark 
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="w-5 h-5 text-amber-500" />,
    value: "10K+",
    label: "Active Users"
  },
  {
    id: 2,
    icon: <MapPin className="w-5 h-5 text-amber-500" />,
    value: "500+",
    label: "Destinations"
  },
  {
    id: 3,
    icon: <Hotel className="w-5 h-5 text-amber-500" />,
    value: "200+",
    label: "Luxury Hotels"
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  }
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function LoginHero() {
  return (
    <div className="relative min-h-[600px] lg:min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 py-16">
      {/* Luxurious Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-700/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Decorative Icons */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 lg:left-20 hidden md:block text-amber-500/20"
      >
        <Plane size={48} />
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-10 lg:right-20 hidden md:block text-amber-500/20"
      >
        <Compass size={48} />
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute top-40 right-40 hidden lg:block text-amber-500/20"
      >
        <Camera size={40} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full text-center space-y-10"
      >
        {/* Main Title Section */}
        <motion.div variants={itemVariants} className="relative inline-block">
          {/* Subtle Golden Glow behind title */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-amber-500/30 blur-[60px] rounded-full" 
          />
          
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter relative">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Egypt</span>
            <span className="text-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">Explore</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">
            Experience the <span className="text-white">Ancient Wonders</span> and <span className="text-amber-500">Luxury Hospitality</span> of the Nile. Discover the beauty of Egypt with us.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/30 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{stat.value}</h3>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center gap-4 text-gray-600 pt-10"
        >
          <Landmark size={20} />
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          <Globe size={20} />
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          <Landmark size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
}