"use client";

import { useState, use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Gallery from "@/src/features/hotel/components/Gallery";
import Amenities from "@/src/features/hotel/components/Amenities";
import RoomCard from "@/src/features/hotel/components/RoomCard";
import ReviewsSection from "@/src/features/hotel/components/ReviewsSection";
import PricingSummary from "@/src/features/hotel/components/PricingSummary";
import { hotelData } from "@/src/features/hotel/data/mockData";

// Import mock data and components


export default function HotelDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Read params (Next.js 15+ pattern for client components)
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  
  // In a real app we would fetch the hotel by ID here
  const hotel = hotelData;
  
  const [selectedRoomPrice, setSelectedRoomPrice] = useState<number>(hotel.rooms[0].price);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-20">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={hotel.heroImage}
          alt={hotel.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center text-[#D4AF37] mb-3">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={faStar} 
                  className={i < Math.floor(hotel.rating) ? "opacity-100" : "opacity-30"} 
                />
              ))}
              <span className="text-white ml-3 text-sm tracking-widest uppercase font-semibold">
                Luxury Resort
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {hotel.name}
            </h1>
            
            <div className="flex items-center text-white/90 text-lg">
              <FontAwesomeIcon icon={faLocationDot} className="mr-3 text-[#D4AF37]" />
              <span>{hotel.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          
          {/* 2. Hotel Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Overview</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {hotel.description}
            </p>
          </motion.section>

          {/* 4. Image Gallery */}
          <Gallery images={hotel.gallery} />

          {/* 5. Amenities Section */}
          <Amenities amenities={hotel.amenities} />

          {/* 3. Room Types Section */}
          <section id="rooms">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">Accommodations</h2>
            <div className="space-y-8">
              {hotel.rooms.map((room, idx) => (
                <div key={room.id} onClick={() => setSelectedRoomPrice(room.price)} className="cursor-pointer">
                  <RoomCard room={room} index={idx} />
                </div>
              ))}
            </div>
          </section>

          {/* 7. Reviews Section */}
          <ReviewsSection
            reviews={hotel.reviews} 
            rating={hotel.rating} 
            reviewsCount={hotel.reviewsCount} 
          />
          
        </div>

        {/* 6. Pricing Summary (Sticky Sidebar) */}
        <div className="lg:col-span-1 relative">
          <PricingSummary pricePerNight={selectedRoomPrice} />
        </div>
      </div>
    </div>
  );
}
