"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
        Hotel Gallery
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
        {/* Main large image */}
        <div className="lg:col-span-2 md:row-span-2 relative h-full rounded-2xl overflow-hidden group cursor-pointer shadow-md">
          <Image
            src={images[0]}
            alt="Main hotel view"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
        </div>
        
        {/* Smaller images */}
        {images.slice(1, 5).map((img, idx) => (
          <div 
            key={idx} 
            className="relative h-full min-h-[290px] rounded-2xl overflow-hidden group cursor-pointer shadow-md"
          >
            <Image
              src={img}
              alt={`Hotel view ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            
            {/* Overlay for the last image if there are more */}
            {idx === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl font-medium">+{images.length - 5} photos</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
