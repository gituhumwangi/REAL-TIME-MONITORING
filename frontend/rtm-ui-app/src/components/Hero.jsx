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
        <section className="relative w-full h-screen overflow-hidden">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 26000,
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
                                Welcome to Our Service
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                                Discover the best solutions for your needs. Join
                                us today!
                            </p>
                            <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
                                Get Started
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
                            <div className="flex justify-center space-x-4">
                                <button
                                    className={`btn ${
                                        activeRole === "donor"
                                            ? "bg-green-700"
                                            : "hover:bg-green-500"
                                    }`}
                                    onClick={() => handleRoleClick("donor")}>
                                    Join As Donor
                                </button>
                                <button
                                    className={`btn ${
                                        activeRole === "agency"
                                            ? "bg-orange-700"
                                            : "hover:bg-orange-500"
                                    }`}
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
                                Your Success, Our Priority
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                                Partner with us to achieve your dreams
                                effortlessly.
                            </p>
                            <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
