"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  User, Mail, MapPin, Calendar, Users, Edit, 
  CreditCard, ExternalLink, XCircle, Settings 
} from "lucide-react";
import Image from "next/image";

const mockUser = {
  name: "Omar Al-Jumaily",
  email: "omar@egyptexplore.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
};

const mockBookings = [
  {
    id: "B-10023",
    hotelName: "Marriott Mena House",
    location: "Giza, Egypt",
    checkIn: "15 Jun, 2026",
    checkOut: "20 Jun, 2026",
    guests: 2,
    price: "$1,250",
    status: "Confirmed",
  },
  {
    id: "B-10024",
    hotelName: "Sofitel Winter Palace",
    location: "Luxor, Egypt",
    checkIn: "01 Jul, 2026",
    checkOut: "05 Jul, 2026",
    guests: 4,
    price: "$850",
    status: "Pending",
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-8 relative z-10"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              My <span className="text-green-400">Account</span>
            </h1>
            <p className="mt-2 text-gray-400 text-sm">
              Manage your personal information and track your bookings.
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl text-white transition-all duration-300">
            <Settings className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </motion.div>

        {/* Top Section: User Info Glass Card */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
        >
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-50"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar */}
            <div className="relative group shrink-0">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-green-400/50 transition-colors duration-500 relative z-10">
                <Image 
                  src={mockUser.avatar} 
                  alt={mockUser.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{mockUser.name}</h2>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-gray-400">
                  <Mail className="w-4 h-4 text-green-500/80" />
                  <span className="text-sm">{mockUser.email}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-400 rounded-xl text-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-semibold">Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: Bookings */}
        <motion.div variants={itemVariants} className="space-y-6 pt-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">My Bookings</h3>
            <span className="bg-white/10 text-gray-300 text-xs font-bold px-2.5 py-1 rounded-full border border-white/5">
              {mockBookings.length}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockBookings.map((booking, index) => (
              <motion.div 
                key={booking.id}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-lg border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Status Indicator Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${booking.status === 'Confirmed' ? 'bg-green-500' : 'bg-amber-500'} opacity-80`} />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      {booking.hotelName}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1 text-gray-400 text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${booking.status === 'Confirmed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                    {booking.status}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Check-in</span>
                    </div>
                    <p className="text-sm font-medium text-gray-200">{booking.checkIn}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Check-out</span>
                    </div>
                    <p className="text-sm font-medium text-gray-200">{booking.checkOut}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Users className="w-3.5 h-3.5" />
                      <span>Guests</span>
                    </div>
                    <p className="text-sm font-medium text-gray-200">{booking.guests} Person</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Total Price</span>
                    </div>
                    <p className="text-sm font-bold text-green-400">{booking.price}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    View Details
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/30 text-red-400 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300">
                    <XCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Cancel</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}