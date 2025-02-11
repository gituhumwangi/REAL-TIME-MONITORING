import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { useState } from "react";

const Hero = () => {
    const [activeRole, setActiveRole] = useState(null); // Track which button (Donor or Agency) is clicked

    const handleRoleClick = (role) => {
        setActiveRole(role); // Set the active role to Donor or Agency
    };
    return (
        <section className="relative w-full h-screen overflow-hidden rounded-bl-2xl rounded-2xl rounded-br-2xl md:h-[85vh]">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                loop
                className="w-full h-full">
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={hero1}
                            alt="Hero Slide 1"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Empowering communities, changing lives.
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                            Together, we’re on a mission to uplift our community and create lasting change.
                            </p>
                            <button className="btn text-white text-lg shadow-lg transition">
                                Learn more
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={hero2}
                            alt="Hero Slide 2"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Become a Member of Our Cause
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                                Whether you're a donor or an implementing
                                agency, we invite you to join us in making a
                                difference.
                            </p>
                            {/* Buttons for Donor and Implementing Agency */}
                            <div className="flex justify-center flex-col md:flex-row gap-4">
                                <button
                                    className='btn'
                                    onClick={() => handleRoleClick("donor")}>
                                    Join As Donor
                                </button>
                                <button
                                    className='btn'
                                    onClick={() => handleRoleClick("agency")}>
                                    Join As Implementing Agency
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={hero3}
                            alt="Hero Slide 3"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                We believe in transparency
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                            You deserve to see how your contributions make an impact.
                            </p>
                            <button className="btn text-white text-lg shadow-lg transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
