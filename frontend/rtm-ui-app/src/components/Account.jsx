import React from "react";
import donor from "../assets/donor.jpg";
import agency from "../assets/agency.jpg";

function Account() {
    return (
        <section className="bg-neutral-500/10">
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                {/* Title */}
                <div className="flex justify-center flex-col items-center">

                <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-left md:text-center md:mb-12 lg:mb-16">
                <h2 className="text-3xl font-bold md:text-5xl w-full">
                    Join
                </h2>
                <p className="mx-auto mb-0 mt-4 max-w-7xl text-base text-gray-500 md:mb-2 lg:mb-2">
                    Become a part of our mission to create lasting change in the
                    lives of those in need. Together, we can amplify our efforts and ensure that we’re
                    making a meaningful impact. Explore the different ways you
                    can contribute and help us pave the way for a brighter
                    future.
                </p>
                </div>
                </div>
                <div className="flex flex-col gap-8 lg:gap-16">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                        <img
                            src={donor}
                            alt=""
                            className="inline-block h-full w-full rounded-2xl object-cover"
                        />
                        <div className="flex flex-col justify-center gap-8 rounded-2xl p-10 sm:p-20">
                            <h2 className="text-3xl font-bold md:text-5xl">
                                As a donor
                            </h2>
                            <p className="text-base text-gray-500 sm:text-base">
                            Are you a philanthropist, donor or aid provider? Join the platform to get access to real time project tracking tools, verified project implementers, and seamless contact with target beneficiaries.
                            </p>
                            <button className="btn mt-3">
                                Become a donor
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col gap-8 justify-center rounded-2xl p-10 sm:p-20">
                            <h2 className="text-3xl font-bold md:text-5xl">
                                As an implementing agency
                            </h2>
                            <p className="text-base text-gray-500 sm:text-base">
                            Do you implement funded projects or do you intend to start implementing projects? Join the platform to get noticed by donors and get access to available funding opportunities globally.
                            </p>
                            <button className="btn mt-3">
                                Join
                            </button>
                        </div>
                        <img
                            src={agency}
                            alt=""
                            className="inline-block h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;
