"use client"
import { Swiper, SwiperSlide, } from "swiper/react"
import { Autoplay, Pagination } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/pagination';

import first from "../../../assets/images/tot.jpg"
import second from "../../../assets/images/second.jpg"
import three from "../../../assets/images/alimine.jpeg.webp"
import Link from "next/link"
function Slider() {
    return <>
        <div className="container">
            <div>
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                    }}
                    className="rounded-2xl"
                >
                    <SwiperSlide>
                        <div className="rounded-2xl"
                            style={{
                                backgroundImage: `url(${first.src})`,
                                height: "500px",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                            <div className="bg-blue-400/30 h-[500px] rounded-2xl">
                                <div className="p-10 text-blond-50">
                                    <h1 className="font-bold text-4xl italic text-center py-7 ">
                                        Discover the Wonders of Egypt
                                    </h1>
                                    <p className="text-center text-2xl font-medium w-1/2 mx-auto text-white">Explore the rich history and culture of Egypt with our exclusive travel packages.</p>
                                    <Link href="" className="m-auto mt-5 flex justify-center w-fit">
                                        <button className="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                                                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                                            </svg>
                                            Explore Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="rounded-2xl"
                            style={{
                                backgroundImage: `url(${second.src})`,
                                height: "500px",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                            <div className="bg-blue-400/30 h-[500px] rounded-2xl">
                                <div className="p-10 text-blond-50">
                                    <h1 className="font-bold text-4xl italic text-center py-7">
                                        The Pyramids of Giza – A Timeless Wonder of Ancient Egypt
                                    </h1>
                                    <p className="text-center text-2xl font-medium w-2/3 mx-auto text-white">The Pyramids of Giza are one of the most famous historical landmarks in the world and the only surviving wonder of the Seven Wonders of the Ancient World.</p>
                                    <Link href="" className="m-auto mt-5 flex justify-center w-fit">
                                        <button className="btn bg-transparent">Explor Pyramids</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="rounded-2xl"
                            style={{
                                backgroundImage: `url(${three.src})`,
                                height: "500px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                            <div className="bg-blue-400/30 h-[500px] rounded-2xl">
                                <div className="p-10 text-blond-50">
                                    <h1 className="font-bold text-4xl italic text-center py-7">
                                        El Alamein: A Jewel of the Mediterranean
                                    </h1>
                                    <p className="text-center text-2xl font-medium w-2/3 mx-auto text-white">El Alamein is one of the most famous coastal cities in Egypt, located on the beautiful Mediterranean Sea</p>
                                    <Link href="" className="m-auto mt-5 flex justify-center w-fit">
                                        <button className="btn bg-transparent">Explor Alamein</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Slider