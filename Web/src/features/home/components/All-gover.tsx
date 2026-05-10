"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { governorates } from "../../../data/governorates";
import { MapPin, ArrowRight, Compass } from "lucide-react";

function Allgover() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-green-950/40 to-black relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative z-10 space-y-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-white md:text-5xl tracking-tight">
              Explore All <span className="text-green-500">Governorates</span>
            </h2>
            <p className="mt-5 text-lg text-gray-300">
              Discover the incredible beauty, rich history, and vibrant culture spanning across all 27 governorates of Egypt.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {governorates.map((gov) => (
            <motion.div key={gov.id} variants={itemVariants} className="h-full">
              <Link href={`/governorates/${gov.id}`} className="block h-full">
                <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl p-8 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-green-500/50 hover:bg-white/[0.06]">
                  
                  {/* Subtle top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 shadow-sm transition-all duration-500 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:rotate-6">
                    <Compass className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                      {gov.name}
                    </h3>
                    <div className="mt-3 flex items-start text-sm text-gray-400 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      <MapPin className="mr-1.5 h-4 w-4 shrink-0 text-green-500/60 mt-0.5" />
                      <span>{gov.description}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 transition-colors duration-300 group-hover:border-green-500/20">
                    <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-green-400">
                      Explore Places
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Allgover;