"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  rating: number;
  reviewsCount: number;
}

export default function ReviewsSection({ reviews, rating, reviewsCount }: ReviewsSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="flex items-end mb-10 space-x-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Guest Reviews</h2>
        <div className="flex items-center text-xl font-medium text-neutral-700 dark:text-neutral-300 pb-1">
          <FontAwesomeIcon icon={faStar} className="text-[#D4AF37] mr-2" />
          <span>{rating} ({reviewsCount} reviews)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={review.id} 
            className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-lg text-neutral-900 dark:text-white">{review.user}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{review.date}</p>
              </div>
              <div className="flex text-[#D4AF37] text-sm">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className={i < Math.floor(review.rating) ? "opacity-100" : "opacity-30"} />
                ))}
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 italic">"{review.comment}"</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
