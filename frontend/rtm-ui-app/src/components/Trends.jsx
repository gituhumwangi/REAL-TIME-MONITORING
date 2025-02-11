import React, { useState } from "react";

function Trends() {
    const [trends, setTrends] = useState([
        {
            id: 1,
            title: "Increased focus on climate change projects",
            description:
                "Donors are prioritizing climate resilience and renewable energy projects.",
            category: "Climate Change",
            date: "2024-09-15",
            region: "Global",
        },
        {
            id: 2,
            title: "More funds directed to education programs",
            description:
                "There has been a significant shift in donations towards education in low-income countries.",
            category: "Education",
            date: "2024-08-30",
            region: "Sub-Saharan Africa",
        },
        {
            id: 3,
            title: "Healthcare funding spike due to pandemic after-effects",
            description:
                "Donors are increasing contributions to healthcare, particularly in underfunded regions.",
            category: "Healthcare",
            date: "2024-07-21",
            region: "South Asia",
        },
        {
            id: 4,
            title: "Rising investments in digital education platforms",
            description:
                "Digital education platforms are seeing growing investments as the digital divide is addressed.",
            category: "Technology",
            date: "2024-09-01",
            region: "North America",
        },
    ]);

    function formatDate(dateStr) {
        // Create an array of month names.
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        // Create a Date object from the input string.
        const date = new Date(dateStr);

        // Extract the month, day, and year.
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        // Return the formatted date string.
        return `${monthName} ${day}, ${year}`;
    }

    return (
        <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 pt-0 md:px-10 md:pt-0">
                {/* Title */}
                <h2 className="text-center mb-8 text-3xl font-bold md:text-5xl">
                    {/* The latest and greatest news */}
                    Latest Donor Funding Trends
                </h2>
                {/* Content */}
                <div className="mx-auto grid max-w-xl gap-4">
                    {trends.map((trend) => {
                        return (
                            <a
                                href="#"
                                className="flex flex-col items-center pb-8 text-center border-b border-gray-300 sm:flex-row sm:text-left">
                                {/* <img
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=d199377e-16c1-4b00-b204-0a86c24d8e6a"
                                    alt=""
                                    className="h-40 w-40 max-w-32"
                                /> */}
                                <div className="px-8">
                                    <div className="mb-6 lg:mb-8">
                                        <p className="text-lg font-semibold sm:text-lg">
                                            {trend.title}
                                        </p>
                                        <p className="text-sm text-gray-500 pt-2">
                                            {trend.region}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {trend.category}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {/* November 12, 2022 */}
                                        {formatDate(trend.date)}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Trends;
