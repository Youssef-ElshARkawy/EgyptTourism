"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, ExternalLink, Heart, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock Data
const initialWishlist = [
  {
    id: "W-001",
    name: "The Great Pyramids of Giza",
    description: "One of the Seven Wonders of the Ancient World, standing tall for millennia.",
    location: "Giza, Egypt",
    imageUrl: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "W-002",
    name: "Karnak Temple Complex",
    description: "A vast mix of decayed temples, chapels, pylons, and other buildings near Luxor.",
    location: "Luxor, Egypt",
    imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "W-003",
    name: "Abu Simbel Temples",
    description: "Two massive rock-cut temples built during the reign of Ramesses II.",
    location: "Aswan, Egypt",
    imageUrl: "https://images.unsplash.com/photo-1600521605604-00e28e469c8a?auto=format&fit=crop&w=800&q=80",
  }
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const toggleFavorite = (id: string) => {
    // In a real app, you would probably make an API call here.
    // For this UI demo, we'll just remove the item from the local state.
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-green-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex justify-between items-end border-b border-white/10 pb-6"
        >
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              My <span className="text-green-400">Wishlist</span>
            </h1>
            <p className="mt-2 text-gray-400 text-sm">
              Your personal collection of dream destinations and favorite historical sites.
            </p>
          </div>
          <div className="hidden sm:block">
            <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold px-4 py-2 rounded-xl">
              {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} Saved
            </span>
          </div>
        </motion.div>

        {/* Empty State */}
        {wishlist.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl"
          >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">No favorites yet</h2>
            <p className="text-gray-400 max-w-md mb-8">
              You haven't saved any places to your wishlist. Start exploring Egypt's wonders and tap the heart icon to save them here.
            </p>
            <Link 
              href="/gover-sites" 
              className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:-translate-y-1"
            >
              <Compass className="w-5 h-5" />
              Explore Places
            </Link>
          </motion.div>
        )}

        {/* Grid of Wishlist Cards */}
        {wishlist.length > 0 && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {wishlist.map((place) => (
                <motion.div 
                  key={place.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-green-500/50 hover:bg-white/[0.06]"
                >
                  {/* Top highlight line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"></div>

                  {/* Image Section */}
                  <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <Image
                      src={place.imageUrl}
                      alt={place.name}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/20 transition-colors duration-500 group-hover:bg-green-500/90 group-hover:border-green-400">
                      <MapPin className="w-3.5 h-3.5 text-green-400 group-hover:text-white transition-colors duration-500" />
                      <span className="text-xs font-bold text-white tracking-wide line-clamp-1">{place.location}</span>
                    </div>

                    {/* Favorite (Heart) Toggle Button */}
                    <motion.button 
                      whileTap={{ scale: 0.8 }}
                      onClick={() => toggleFavorite(place.id)}
                      className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-red-500/20 hover:border-red-500/50 transition-colors duration-300 group/heart"
                    >
                      <Heart 
                        className="w-5 h-5 text-green-400 fill-green-400 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-colors duration-300" 
                      />
                    </motion.button>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-green-400 line-clamp-2">
                      {place.name}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-500">
                      {place.description}
                    </p>

                    {/* View Details Link */}
                    <div className="mt-auto border-t border-white/10 pt-5 transition-colors duration-500 group-hover:border-green-500/20">
                      <Link
                        href={`/historical-site-details/${place.id}`}
                        className="flex items-center justify-between w-full"
                      >
                        <span className="text-sm font-semibold text-gray-300 transition-colors duration-500 group-hover:text-green-400">
                          View Details
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-500 group-hover:bg-green-500 group-hover:text-white">
                          <ExternalLink className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
