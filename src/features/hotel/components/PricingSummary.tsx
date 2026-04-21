"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PricingSummaryProps {
  pricePerNight: number | null;
}

export default function PricingSummary({ pricePerNight }: PricingSummaryProps) {
  const [nights, setNights] = useState(1);
  
  // If no room is selected, display a prompt
  if (pricePerNight === null) {
    return (
      <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 sticky top-24">
        <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Reservation Summary</h3>
        <p className="text-neutral-500 dark:text-neutral-400">Please select a room below to see pricing details.</p>
      </div>
    );
  }

  const total = pricePerNight * nights;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 sticky top-24"
    >
      <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
        Reservation Summary
      </h3>
      
      <div className="space-y-6">
        <div className="flex justify-between items-center text-lg">
          <span className="text-neutral-600 dark:text-neutral-300">Price per night</span>
          <span className="font-semibold text-neutral-900 dark:text-white">${pricePerNight}</span>
        </div>
        
        <div className="flex justify-between items-center text-lg">
          <span className="text-neutral-600 dark:text-neutral-300">Nights</span>
          <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <button 
              onClick={() => setNights(Math.max(1, nights - 1))}
              className="px-4 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
              -
            </button>
            <span className="px-4 py-1 font-medium select-none">{nights}</span>
            <button 
              onClick={() => setNights(nights + 1)}
              className="px-4 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mt-6">
          <div className="flex justify-between items-center text-2xl font-bold">
            <span className="text-neutral-900 dark:text-white">Total</span>
            <span className="text-[#D4AF37]">${total}</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 mt-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-lg font-semibold rounded-xl transition-colors hover:shadow-lg"
        >
          Reserve Now
        </motion.button>
      </div>
    </motion.div>
  );
}
