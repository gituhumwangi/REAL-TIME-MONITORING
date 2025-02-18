import React from 'react';

const EconomicInfo = () => {
  return (
    <section className="p-12">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-center">Economic Development</h2>
      
      {/* Introduction Section */}
      <p className="text-gray-700 mb-6">
        Explore the latest insights on global economic development trends and how they impact donor generosity, NGO operations, and the needs of beneficiaries.
      </p>
      
      {/* Global Economic Trends */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">OECD: Global Outlook on Financing for Sustainable Development 2025</h3>
        <p className="text-gray-700">
        The latest Global Outlook on Financing for Sustainable Development calls for a major overhaul of the global system to mobilise resources to build a sustainable future for all.
        </p>
        {/* Placeholder for chart or data visualization */}
        <div className="bg-gray-200 p-4 rounded-lg mt-4">
          <p className="text-center text-gray-500 italic">[Data Visualization: Global GDP Growth]</p>
        </div>
      </div>

      {/* Donor Economic Behavior */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Donor Economic Behavior</h3>
        <p className="text-gray-700">
          Explore how fluctuations in the economy affect donor contributions and trends in charitable giving.
        </p>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Impact of economic recessions on donation volumes</li>
          <li>Correlation between inflation and charitable giving</li>
          <li>Regional analysis of donor generosity</li>
        </ul>
      </div>

      {/* Economic Impact on Beneficiaries */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Economic Impact on Beneficiaries</h3>
        <p className="text-gray-700">
          Learn how shifts in economic development affect the needs of beneficiaries across different regions.
        </p>
        <div className="bg-gray-200 p-4 rounded-lg mt-4">
          <p className="text-center text-gray-500 italic">[Impact Analysis: How Economic Downturns Affect Beneficiaries]</p>
        </div>
      </div>

      {/* Call to Action: Link to Donation */}
      <div className="mt-8 bg-green-600 text-white p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Support Our Efforts</h3>
        <p>Economic challenges are ever-present. Your donations can help those most affected. Support a cause today!</p>
        <a href="/donate" className="inline-block mt-4 bg-white text-green-600 px-4 py-2 rounded-lg">Donate Now</a>
      </div>
    </section>
  );
};

export default EconomicInfo;
