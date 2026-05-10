"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot, 
  faCalendarAlt, 
  faUserFriends, 
  faCamera, 
  faMonument, 
  faArrowRight, 
  faChevronRight,
  faHammer
} from "@fortawesome/free-solid-svg-icons";

// We import the local image fallback.
import localImage from "../../../../assets/images/chrysanthe-gomree-Zv_l0sTAp4M-unsplash.jpg";

// Dummy Data mapped potentially by ID later
const siteData = {
  id: "1",
  title: "The Great Pyramids of Giza",
  location: "Giza Plateau, Egypt",
  shortDesc: "The last surviving wonder of the ancient world, standing as a testament to the ingenuity and engineering prowess of the ancient Egyptians. Step into the sands of time and witness pure architectural majesty.",
  longDesc: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the pyramids in the Giza pyramid complex. Built for the Fourth Dynasty pharaoh Khufu, it was the tallest man-made structure in the world for more than 3,800 years. The historical site is a masterpiece of ancient engineering and geometry, continuously fascinating archaeologists and travelers alike. Exploring the Pyramids offers an unparalleled glimpse into Egypt's glorious antiquity, making it the crown jewel of any historical expedition.",
  details: {
    builtBy: "Pharaoh Khufu",
    constructionDate: "c. 2560 BC",
    visitors: "14+ Million / Year",
    era: "Old Kingdom",
    style: "True Ancient Pyramidal",
  },
  gallery: [
    localImage,
    localImage,
    localImage,
    localImage,
  ]
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HistoricalSiteDetails({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Premium Loading Skeleton
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col p-10 pt-24 space-y-12">
        <div className="h-[60vh] bg-white/5 animate-pulse rounded-3xl w-full" />
        <div className="h-48 bg-white/5 animate-pulse rounded-3xl w-full max-w-5xl mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
           <div className="h-32 bg-white/5 animate-pulse rounded-2xl" />
           <div className="h-32 bg-white/5 animate-pulse rounded-2xl" />
           <div className="h-32 bg-white/5 animate-pulse rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-amber-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] w-full flex items-end justify-center pb-24 border-b border-white/5">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={siteData.gallery[0]}
            alt={siteData.title}
            fill
            className="object-cover"
            priority
          />
          {/* Luxurious Dark linear Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-[#0a0a0a] via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        <motion.div 
          className="relative z-20 container mx-auto px-6 max-w-6xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex justify-center items-center gap-2 mb-6 text-amber-500 font-bold tracking-[0.2em] uppercase text-sm drop-shadow-lg">
            <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
            <span>{siteData.location}</span>
          </motion.div>
          <motion.h1 
            variants={fadeUpVariant} 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 mb-8 tracking-tighter drop-shadow-2xl"
          >
            {siteData.title}
          </motion.h1>
          <motion.div variants={fadeUpVariant} className="w-32 h-1 bg-linear-to-r from-amber-600 to-yellow-400 mx-auto rounded-full shadow-[0_0_15px_rgba(217,119,6,0.6)]" />
        </motion.div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 max-w-6xl -mt-6 relative z-30">
        <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest bg-[#151515]/80 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-white/10 shadow-xl">
          <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="w-3" />
          <Link href="/historical-sites" className="hover:text-amber-500 transition-colors">Historical Sites</Link>
          <FontAwesomeIcon icon={faChevronRight} className="w-3" />
          <span className="text-amber-500">{siteData.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl py-24 space-y-32">
        
        {/* 2. Overview Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="relative bg-linear-to-br from-[#121212] to-[#1a1a1a] rounded-4xl p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-amber-600 via-yellow-500 to-transparent" />
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Overview</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light max-w-4xl border-l-2 border-amber-500 pl-6">
             <span className="text-amber-500/50 text-5xl font-serif absolute -ml-5 -mt-3">"</span>
            {siteData.shortDesc}
          </p>
        </motion.section>

        {/* 3. Details Section (Grid) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">Key Specifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
            <DetailCard icon={faHammer} title="Built By" value={siteData.details.builtBy} />
            <DetailCard icon={faCalendarAlt} title="Construction Date" value={siteData.details.constructionDate} />
            <DetailCard icon={faLocationDot} title="Location" value={siteData.location} />
            <DetailCard icon={faUserFriends} title="Visitors Per Year" value={siteData.details.visitors} />
            <DetailCard icon={faMonument} title="Historical Era" value={siteData.details.era} />
            <DetailCard icon={faCamera} title="Architectural Style" value={siteData.details.style} />
          </div>
        </motion.section>

        {/* 4. About Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white tracking-tight">The Legacy</h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
            <p className="text-gray-300 leading-relaxed text-lg font-light text-justify">
              {siteData.longDesc}
            </p>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(217,119,6,0.15)] group order-1 lg:order-2 border border-white/10">
            <Image
              src={siteData.gallery[1]}
              alt="Legacy"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Elegant vignette effect */}
            <div className="absolute inset-0 bg-radial-linear from-transparent to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </motion.section>

        {/* 5. Image Gallery */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tight">Visual Journey</h2>
            <p className="text-gray-400 font-light tracking-wide text-lg">Explore the breathtaking vistas of {siteData.title}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.gallery.slice(0, 3).map((img, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant}
                className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-amber-500 font-bold tracking-widest uppercase text-sm border-b-2 border-amber-500 pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     View Complete Image
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* 6. Call To Action */}
      <section className="relative py-32 bg-[#121212] mt-10 flex flex-col items-center justify-center overflow-hidden border-t border-amber-500/20 shadow-[0_-20px_50px_rgba(217,119,6,0.05)]">
         {/* Decorative background elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center space-y-10 px-6 max-w-3xl"
         >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Experience Antiquity</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Book your official tour today and experience the ancient magic of Egypt firsthand with our expert archaeological guides.
            </p>
            <Link href={`/hotel/${siteData.id}`} className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-linear-to-r from-amber-600 to-yellow-500 rounded-full hover:shadow-[0_0_40px_rgba(217,119,6,0.4)] overflow-hidden hover:scale-105 active:scale-95">
               <span className="absolute inset-0 w-full h-full bg-linear-to-b from-white/20 via-transparent to-black/30 opacity-50" />
               <span className="relative flex items-center gap-3 text-lg tracking-wider uppercase font-extrabold text-[#111]">
                  Book a Visit
                  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
               </span>
            </Link>
         </motion.div>
      </section>

    </div>
  );
}

function DetailCard({ icon, title, value }: { icon: any, title: string, value: string }) {
  return (
    <motion.div 
      variants={fadeUpVariant}
      className="group relative bg-[#181818] p-8 rounded-3xl border border-white/5 hover:border-amber-500/50 transition-colors duration-500 overflow-hidden shadow-xl hover:shadow-[0_10px_30px_rgba(217,119,6,0.1)]"
    >
      <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 rounded-bl-[100px] transition-transform duration-700 ease-out group-hover:scale-[2.5]" />
      
      <div className="relative z-10 flex items-start gap-5">
        <div className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-[#0a0a0a] border border-white/5 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors duration-500 shadow-inner">
          <FontAwesomeIcon icon={icon} className="w-6 h-6 text-amber-500 drop-shadow-md" />
        </div>
        <div className="space-y-2 mt-1">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">{title}</p>
          <p className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}