import { useState } from 'react';
import { Link } from "react-router-dom"
import image_1 from '../assets/donation-3.jpg'
import image_2 from '../assets/donations-4.webp'

const Participation = () => {
  const [activeRole, setActiveRole] = useState(null); // Track which button (Donor or Agency) is clicked

  const handleRoleClick = (role) => {
    setActiveRole(role); // Set the active role to Donor or Agency
  };

  return (
    <section className="p-8 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Become a Member of Our Cause</h1>
        <p className="text-gray-700 mb-6">
          Whether you're a donor or an implementing agency, we invite you to join us in making a difference.
        </p>

        {/* Buttons for Donor and Implementing Agency */}
        <div className="flex justify-center space-x-4">
          <button
            className={`px-6 py-2 bg-green-600 text-white rounded-lg ${activeRole === 'donor' ? 'bg-green-700' : 'hover:bg-green-500'}`}
            onClick={() => handleRoleClick('donor')}
          >
            Donor
          </button>
          <button
            className={`px-6 py-2 bg-orange-600 text-white rounded-lg ${activeRole === 'agency' ? 'bg-orange-700' : 'hover:bg-orange-500'}`}
            onClick={() => handleRoleClick('agency')}
          >
            Implementing Agency
          </button>
        </div>
      </div>

      {/* Donor Section */}
      {activeRole === 'donor' && (
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 bg-white shadow-lg p-6 rounded-lg">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img
              src={ image_2 } // Replace with a relevant donor image
              alt="Donor image participation"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Join as a Donor</h2>
            <p className="text-gray-700 mb-6">
              As a donor, you can help us make a tangible impact in communities across the globe. Your contributions
              will directly fund programs that change lives for the better.
            </p>
            <Link
              to="/signup/donor"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      )}

      {/* Implementing Agency Section */}
      {activeRole === 'agency' && (
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 bg-white shadow-lg p-6 rounded-lg">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img
              src={ image_1 } // Replace with a relevant implementing agency image
              alt="Agency Participation"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Join as an Implementing Agency</h2>
            <p className="text-gray-700 mb-6">
              As an implementing agency, you will collaborate with us to put donor resources to work. Your expertise
              and on-the-ground efforts are vital in ensuring successful project outcomes.
            </p>
            <Link
              to="/signup/ia"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Participation;
