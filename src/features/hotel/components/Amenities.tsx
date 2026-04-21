"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faWifi, 
  faWaterLadder, 
  faSpa, 
  faUtensils, 
  faDumbbell, 
  faSquareParking,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

interface Amenity {
  name: string;
  icon: string;
}

interface AmenitiesProps {
  amenities: Amenity[];
}

const iconMap: Record<string, any> = {
  "wifi": faWifi,
  "water-ladder": faWaterLadder,
  "spa": faSpa,
  "utensils": faUtensils,
  "dumbbell": faDumbbell,
  "square-parking": faSquareParking
};

export default function Amenities({ amenities }: AmenitiesProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 border-t border-neutral-200 dark:border-neutral-800"
    >
      <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
        Hotel Amenities
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              <FontAwesomeIcon icon={iconMap[amenity.icon] || faCheck} className="text-xl" />
            </div>
            <span className="font-medium text-neutral-700 dark:text-neutral-200">
              {amenity.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
