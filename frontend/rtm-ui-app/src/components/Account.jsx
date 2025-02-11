import React from "react";
import donor from "../assets/pexels-julia-m-cameron-6995106-sq.jpg";
import agency from "../assets/christina-wocintechchat-com-faEfWCdOKIg-unsplash-sq.jpg";

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
                <p className="mx-auto mb-0 mt-4 max-w-7xl text-base text-gray-500 md:mb-2 md:text-lg lg:mb-2">
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
                        <div className="flex flex-col gap-4 rounded-2xl p-10 sm:p-20">
                            <h2 className="text-3xl font-bold md:text-5xl">
                                As a donor
                            </h2>
                            <p className="text-base text-gray-500 sm:text-base">
                                As a donor, your generous support will directly fund essential
                                programs such as food distribution, healthcare
                                services, educational initiatives, and emergency
                                response efforts in crisis-affected regions.{" "}
                                <br />
                                <br />
                                Expect to see your impact firsthand through
                                regular updates and stories showcasing the lives
                                you touch and the communities you help uplift.<br/><br/>
                                Join us in this mission of compassion, where
                                every donation, no matter the size, creates
                                ripples of change and empowers individuals to
                                rebuild their lives with dignity and resilience.
                                Together, we can make a lasting difference.
                            </p>
                            <button className="btn mt-3">
                                Become a donor
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col gap-4 rounded-2xl p-10 sm:p-20">
                            <h2 className="text-3xl font-bold md:text-5xl">
                                As an implementing agency
                            </h2>
                            <p className="text-base text-gray-500 sm:text-base">
                                Aliquet risus feugiat in ante metus. Arcu dui
                                vivamus arcu felis bibendum ut. Vestibulum lorem
                                sed risus ultricies tristique nulla. Vitae et
                                leo duis ut diam quam. Bibendum arcu vitae
                                elementum curabitur vitae nunc. Dictumst
                                vestibulum rhoncus est pellentesque. Lectus
                                proin nibh nisl condimentum id. Ullamcorper
                                dignissim cras tincidunt lobortis feugiat
                                vivamus.
                                <br />
                                <br />
                                Massa id neque aliquam vestibulum morbi blandit.
                                Nulla pellentesque dignissim enim sit amet
                                venenatis.
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
