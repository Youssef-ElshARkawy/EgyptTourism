"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Hotel, MapPin, Calendar, Users, 
  Trash2, CreditCard, ChevronRight, 
  ShoppingBag, ArrowLeft, Info, 
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock Data
const initialCartItems = [
  {
    id: "CB-101",
    hotelName: "Steigenberger Cecil Hotel",
    location: "Alexandria, Egypt",
    checkIn: "10 Aug, 2026",
    checkOut: "15 Aug, 2026",
    nights: 5,
    guests: 2,
    pricePerNight: 150,
    totalPrice: 750,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "CB-102",
    hotelName: "Old Cataract Aswan",
    location: "Aswan, Egypt",
    checkIn: "20 Sep, 2026",
    checkOut: "23 Sep, 2026",
    nights: 3,
    guests: 2,
    pricePerNight: 300,
    totalPrice: 900,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80"
  }
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function CartScreen() {
  const [items, setItems] = useState(initialCartItems);

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
  const taxes = subtotal * 0.1; // 10% tax
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-emerald-600/5 rounded-full blur-[180px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10">
          <Link href="/hotel" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-4 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Continue Exploring</span>
          </Link>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            My Bookings <span className="text-green-400">Cart</span>
          </h1>
        </motion.div>

        {items.length === 0 ? (
          <motion.div 
            variants={itemVariants}
            className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-16 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
            <p className="text-gray-400 max-w-md mb-8">
              Looks like you haven't added any hotel bookings yet. Start planning your dream trip today!
            </p>
            <Link 
              href="/hotel" 
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95"
            >
              Explore Hotels
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="xl:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    variants={itemVariants}
                    layout
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-green-500/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Image */}
                      <div className="relative w-full sm:w-48 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0">
                        <Image 
                          src={item.imageUrl} 
                          alt={item.hotelName}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                              {item.hotelName}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1 text-gray-400 text-sm">
                              <MapPin className="w-4 h-4 text-green-500/60" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all duration-300"
                            title="Remove Booking"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-500 uppercase font-bold tracking-wider">
                              <Calendar className="w-3 h-3" />
                              Dates
                            </span>
                            <p className="text-xs text-white leading-tight">
                              {item.checkIn} - <br className="hidden sm:block" /> {item.checkOut}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-500 uppercase font-bold tracking-wider">
                              <Users className="w-3 h-3" />
                              Guests
                            </span>
                            <p className="text-sm text-white">{item.guests} Persons</p>
                          </div>
                          <div className="space-y-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-500 uppercase font-bold tracking-wider">
                              <Info className="w-3 h-3" />
                              Duration
                            </span>
                            <p className="text-sm text-white">{item.nights} Nights</p>
                          </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                          <div className="text-xs text-gray-400">
                            Price: <span className="text-gray-200 font-medium">${item.pricePerNight} / night</span>
                          </div>
                          <div className="text-lg font-bold text-green-400">
                            Total: ${item.totalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Sidebar */}
            <motion.div variants={itemVariants} className="xl:col-span-1">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-32 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                  <CreditCard className="text-green-500" />
                  Summary
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Taxes & Fees (10%)</span>
                    <span className="text-white font-medium">${taxes.toFixed(0)}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between">
                    <span className="text-lg font-bold text-white">Total Amount</span>
                    <span className="text-2xl font-bold text-green-400">${total.toFixed(0)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-extrabold rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)] flex items-center justify-center gap-2 group">
                    Proceed to Payment
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                    <span>Secure Checkout & Instant Confirmation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}