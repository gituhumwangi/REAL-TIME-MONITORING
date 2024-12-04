import { useState, useEffect } from 'react';

// Simulated API data
const fetchTrendsData = async () => {
  return [
    {
      id: 1,
      title: "Increased focus on climate change projects",
      description: "Donors are prioritizing climate resilience and renewable energy projects.",
      category: "Climate Change",
      date: "2024-09-15",
      region: "Global",
    },
    {
      id: 2,
      title: "More funds directed to education programs",
      description: "There has been a significant shift in donations towards education in low-income countries.",
      category: "Education",
      date: "2024-08-30",
      region: "Sub-Saharan Africa",
    },
    {
      id: 3,
      title: "Healthcare funding spike due to pandemic after-effects",
      description: "Donors are increasing contributions to healthcare, particularly in underfunded regions.",
      category: "Healthcare",
      date: "2024-07-21",
      region: "South Asia",
    },
    {
      id: 4,
      title: "Rising investments in digital education platforms",
      description: "Digital education platforms are seeing growing investments as the digital divide is addressed.",
      category: "Technology",
      date: "2024-09-01",
      region: "North America",
    },
  ];
};

const DonorTrends = () => {
  const [trends, setTrends] = useState([]);
  const [filter, setFilter] = useState(""); // Filter by category

  useEffect(() => {
    const fetchTrends = async () => {
      const trendsData = await fetchTrendsData();
      setTrends(trendsData);
    };
    fetchTrends();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter trends based on selected category
  const filteredTrends = filter
    ? trends.filter((trend) => trend.category === filter)
    : trends;

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Latest Donor Funding Trends</h2>

      {/* Filter by Category */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="mr-2 font-semibold">Filter by Category:</label>
        <select
          id="categoryFilter"
          className="p-2 border rounded"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Climate Change">Climate Change</option>
          <option value="Education">Education</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Technology">Technology</option>
        </select>
      </div>

      {/* Trend List */}
      <ul>
        {filteredTrends.map((trend) => (
          <li key={trend.id} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{trend.title}</h3>
            <p className="text-gray-600 mb-1">{trend.description}</p>
            <div className="text-gray-500 text-sm">
              <p>Category: <span className="font-medium">{trend.category}</span></p>
              <p>Date: <span className="font-medium">{new Date(trend.date).toLocaleDateString()}</span></p>
              <p>Region: <span className="font-medium">{trend.region}</span></p>
            </div>
          </li>
        ))}
      </ul>

      {/* Call to Action */}
      <div className="mt-8 bg-green-600 text-white p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Support a Trend</h3>
        <p>Interested in contributing to one of these trends? Click below to donate to a cause that aligns with your values!</p>
        <a href="/donate" className="inline-block mt-4 bg-white text-green-600 px-4 py-2 rounded-lg">Donate Now</a>
      </div>
    </section>
  );
};

export default DonorTrends;
