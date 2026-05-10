"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Compass, ArrowRight } from "lucide-react";
import Link from "next/link"

// Import Swiper styles
import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import first from "../../../assets/images/tot.jpg"
import second from "../../../assets/images/second.jpg"
import three from "../../../assets/images/alimine.jpeg.webp"

function Slider() {
    return (
        <section className=" relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="relative group">
                    <Swiper
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            prevEl: ".slider-prev",
                            nextEl: ".slider-next",
                        }}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        modules={[Pagination, Navigation, Autoplay, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110"
                                    style={{ backgroundImage: `url(${first.src})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                
                                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                    <div className="max-w-4xl space-y-6">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                                            Discover the <span className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">Wonders</span> of Egypt
                                        </h1>
                                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
                                            Explore the rich history and culture of Egypt with our exclusive travel packages.
                                        </p>
                                        <div className="pt-8">
                                            <Link href="/gover-sites" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95 group/btn">
                                                <Compass className="w-5 h-5 animate-pulse" />
                                                Explore Now
                                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110"
                                    style={{ backgroundImage: `url(${second.src})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                
                                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                    <div className="max-w-4xl space-y-6">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                                            The <span className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">Pyramids</span> of Giza
                                        </h1>
                                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
                                            The only surviving wonder of the Seven Wonders of the Ancient World. A timeless wonder of Ancient Egypt.
                                        </p>
                                        <div className="pt-8">
                                            <Link href="/governorates" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all group/btn">
                                                Explore Pyramids
                                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110"
                                    style={{ backgroundImage: `url(${three.src})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                
                                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                    <div className="max-w-4xl space-y-6">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                                            <span className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">El Alamein</span> Jewel
                                        </h1>
                                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
                                            Discover one of the most famous coastal cities in Egypt, located on the beautiful Mediterranean Sea.
                                        </p>
                                        <div className="pt-8">
                                            <Link href="/governorates" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all group/btn">
                                                Explore Alamein
                                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button className="slider-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-black backdrop-blur-md border border-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="slider-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-black backdrop-blur-md border border-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Custom Pagination Style */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.3 !important;
                    transition: all 0.3s ease !important;
                }
                .swiper-pagination-bullet-active {
                    background: #22c55e !important;
                    opacity: 1 !important;
                    width: 30px !important;
                    border-radius: 5px !important;
                }
                .swiper-pagination {
                    bottom: 30px !important;
                }
            `}</style>
        </section>
    );
}

export default Slider;