"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUserFriends, faExpand } from "@fortawesome/free-solid-svg-icons";

interface RoomProps {
  room: {
    id: string;
    name: string;
    size: string;
    beds: string;
    capacity: string;
    price: number;
    image: string;
  };
  index: number;
}

export default function RoomCard({ room, index }: RoomProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700"
    >
      {/* Image Container */}
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
            {room.name}
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-neutral-600 dark:text-neutral-300">
              <span className="w-6 hidden sm:inline-block text-center mr-2 text-[#D4AF37]">
                <FontAwesomeIcon icon={faExpand} />
              </span>
              <span className="text-sm font-medium">{room.size}</span>
            </div>
            
            <div className="flex items-center text-neutral-600 dark:text-neutral-300">
              <span className="w-6 hidden sm:inline-block text-center mr-2 text-[#D4AF37]">
                <FontAwesomeIcon icon={faBed} />
              </span>
              <span className="text-sm font-medium">{room.beds}</span>
            </div>
            
            <div className="flex items-center text-neutral-600 dark:text-neutral-300 col-span-2">
              <span className="w-6 hidden sm:inline-block text-center mr-2 text-[#D4AF37]">
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              <span className="text-sm font-medium">{room.capacity}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-6 border-t border-neutral-100 dark:border-neutral-700">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <span className="text-3xl font-bold text-neutral-900 dark:text-white">${room.price}</span>
            <span className="text-neutral-500 dark:text-neutral-400 text-sm ml-1">/ night</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-[#D4AF37] hover:bg-[#B5952F] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#D4AF37]/30"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
