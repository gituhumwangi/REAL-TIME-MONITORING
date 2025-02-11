import React from "react";
import hero2 from "../assets/kevin-menya-aH1uiH-Ht_w-unsplash-slim.jpg";

function About() {
    return (
        <section className="bg-orange-900/0 text-black">
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                {/* Component */}
                <div className="flex flex-col gap-14 lg:gap-20">
                    {/* Content */}
                    <div className="flex flex-col gap-14 lg:gap-20">
                        <div className="flex flex-col md:flex-row gap-5">
                            <h2 className="text-3xl md:text-5xl font-bold flex-1">
                                Our Story
                            </h2>
                            <p className="flex-1">
                                Vivametrics is a technology company at nexus
                                between funding and livelihood transformation.
                                We integrate AI technology in monitoring and
                                evaluation designs, real time data collection
                                and seamless linkage between donors and funding
                                beneficiaries.
                            </p>
                        </div>
                        {/* Image */}
                        <img
                            src={hero2}
                            alt="image of a woman tailoring in a tailor shop"
                            className="w-full rounded-xl"
                        />
                        <div className="flex flex-col md:flex-row-reverse gap-5">
                            <h2 className="text-3xl md:text-5xl md:text-right font-bold flex-1">
                                Mission
                            </h2>
                            <p className="flex-1">
                                In today’s fast-paced world, impact must be
                                visible, actionable, and immediate. Delayed data
                                leads to missed opportunities, wasted resources,
                                and ineffective decision-making. At Vivametrics
                                Africa, we ensure that every effort counts by
                                providing real-time monitoring and evaluation
                                tools — because <b>"if it truly matters, it must be
                                measured NOW!"</b>
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            <h2 className="text-3xl md:text-5xl font-bold flex-1">
                                Vision
                            </h2>
                            <p className="flex-1">
                            We aim to create a world where impact is visible, decisions are data-driven, and progress is measured in real time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
