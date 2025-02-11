import React from "react";

function Insights() {
    return (
        <>
        <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 md:pb-0">
                <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center md:mb-12 lg:mb-16">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Economic Insights
                    </h2>
                    <p className="mx-auto mb-0 mt-4 max-w-7xl text-base text-gray-500 md:mb-2 md:text-lg lg:mb-2">
                        Explore the latest insights on global economic
                        development trends and how they impact donor generosity,
                        NGO operations, and the needs of beneficiaries.
                    </p>
                </div>
                {/* Content */}
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
                    {/* Item */}
                    <div className="relative p-8 md:p-10">
                        <h3 className="mb-4 text-xl font-bold md:text-xl">
                            Global Economic Trends
                        </h3>
                        <p className="text-base text-gray-500">
                            Stay updated on global economic indicators such as
                            GDP growth, inflation rates, and unemployment
                            figures that shape the philanthropic landscape.
                        </p>
                        <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
                    </div>
                    {/* Item */}
                    <div className="relative p-8 md:p-10">
                        <h3 className="mb-4 text-xl font-bold md:text-xl">
                            Donor Economic Behavior
                        </h3>
                        <p className="text-base text-gray-500">
                            Explore how fluctuations in the economy affect donor
                            contributions and trends in charitable giving, the
                            impact of economic recessions on donation volumes,
                            correlation between inflation and charitable giving
                            and regional analysis of donor generosity
                        </p>
                        <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
                    </div>
                    {/* Item */}
                    <div className="p-8 md:p-10">
                        <h3 className="mb-4 text-xl font-bold md:text-xl">
                            Economic Impact on Beneficiaries
                        </h3>
                        <p className="text-base text-gray-500">
                            Learn how shifts in economic development affect the
                            needs of beneficiaries across different regions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
       
        </>
    );
}

export default Insights;
