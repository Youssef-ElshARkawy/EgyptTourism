import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// We import a default image for out-of-the-box preview if no URL is provided
import defaultImage from "../../../assets/images/chrysanthe-gomree-Zv_l0sTAp4M-unsplash.jpg";

export interface HistoricalPlaceCardProps {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  imageUrl?: string | StaticImageData;

}

const HistoricalPlaceCard: React.FC<HistoricalPlaceCardProps> = ({
  id = "1",
  title = "The Great Pyramids",
  description = "A defining symbol of Egypt and the last of the ancient Seven Wonders of the World. Experience the majestic history of Giza.",
  location = "Giza, Egypt",
  imageUrl = defaultImage,
  
}) => {
  return (
    <div className="group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)]">
      {/* Image Wrapper */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlays for contrast */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90 leading-none" />

        {/* Top Location Badge */}
        <div className="absolute top-5 left-5 z-10 flex items-center justify-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md shadow-sm border border-white/20 transition-colors duration-300 group-hover:bg-amber-500/90 group-hover:border-amber-400">
          <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-amber-400 group-hover:text-white transition-colors duration-300" />
          <span className="text-xs font-bold text-white tracking-wide">{location}</span>
        </div>

        {/* Text Context - Positioned Absolute to overlap Image */}
        <div className="absolute bottom-0 w-full p-6 text-white translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0">
          <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400">
            {title}
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-gray-300 line-clamp-3 opacity-0 transition-opacity duration-500 delay-75 group-hover:opacity-100">
            {description}
          </p>

          <Link
            href={`/historical-site-details/${id}`}
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-amber-400 transition-colors hover:text-amber-300 opacity-0 group-hover:opacity-100 duration-500 delay-150"
          >
            Explore Now
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Decorative border highlight on hover */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-linear-to-r from-amber-500 to-yellow-300 scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left" />
    </div>
  );
};

export default HistoricalPlaceCard;
