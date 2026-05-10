"use client";

import { motion, type Variants } from "framer-motion";
import { useParams } from "next/navigation";
import { getGovernorateById } from "../../../../data/governorates";
import Link from "next/link";
import { useEffect, useState } from "react";

function GovernoratePage() {
  const params = useParams();
  const id = params.id as string;

  const [governorate, setGovernorate] = useState(getGovernorateById(id));

  useEffect(() => {
    // Just in case params.id takes time to resolve or we fetch data later
    setGovernorate(getGovernorateById(id));
  }, [id]);

  if (!governorate) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Governorate Not Found</h1>
        <Link href="/" className="text-green-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-800"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {governorate.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {governorate.description}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {governorate.places.map((place) => (
            <motion.div key={place.id} variants={itemVariants}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10">
                <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                  {place.imageUrl ? (
                    <img
                      src={place.imageUrl}
                      alt={place.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-green-50 text-green-200">
                      <svg
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600">
                    {place.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 line-clamp-3">
                    {place.description}
                  </p>
                  
                  <div className="mt-auto pt-6">
                    <Link href={`/historical-site-details/${id}`}>
                    <button className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      View Details
                    </button></Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GovernoratePage;
