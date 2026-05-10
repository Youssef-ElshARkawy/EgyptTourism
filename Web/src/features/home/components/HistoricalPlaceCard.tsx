"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// We import a default image for out-of-the-box preview if no URL is provided
import defaultImage from "../../../assets/images/chrysanthe-gomree-Zv_l0sTAp4M-unsplash.jpg";

export interface HistoricalPlaceCardProps {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  imageUrl?: string | StaticImageData;
  variants?: Variants;
}

const HistoricalPlaceCard: React.FC<HistoricalPlaceCardProps> = ({
  id = "1",
  title = "The Great Pyramids",
  description = "A defining symbol of Egypt and the last of the ancient Seven Wonders of the World. Experience the majestic history of Giza.",
  location = "Giza, Egypt",
  imageUrl = defaultImage,
  variants,
}) => {
  return (
    <motion.div 
      variants={variants}
      initial={variants ? undefined : { opacity: 0, y: 30 }}
      whileInView={variants ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="group relative w-full h-full flex flex-col cursor-pointer overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-green-500/50 hover:bg-white/[0.06]"
    >
      {/* Top highlight line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"></div>

      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle gradient to make the location badge readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        
        {/* Location Badge on Image */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/20 transition-colors duration-500 group-hover:bg-green-500/90 group-hover:border-green-400">
          <MapPin className="w-3.5 h-3.5 text-green-400 group-hover:text-white transition-colors duration-500" />
          <span className="text-xs font-bold text-white tracking-wide line-clamp-1 max-w-[150px]">{location}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-green-400 line-clamp-2">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-500">
          {description}
        </p>

        {/* Footer / Link */}
        <div className="mt-auto border-t border-white/10 pt-5 transition-colors duration-500 group-hover:border-green-500/20">
          <Link
            href={`/historical-site-details/${id}`}
            className="flex items-center justify-between w-full"
          >
            <span className="text-sm font-semibold text-gray-300 transition-colors duration-500 group-hover:text-green-400">
              Explore Now
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-500 group-hover:bg-green-500 group-hover:text-white">
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HistoricalPlaceCard;
