import React from 'react';
import image from '../assets/donations-2.jpg'


const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6 lg:p-12 font-poppins">
      {/* Left side: Image */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 h-full">
        <img src={image} alt="Donate Image" className="rounded-lg shadow-lg h-full mt-10" />
      </div>

      {/* Right side: Text content */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          At Real-Monitoring, we are revolutionizing donation tracking across various sectors with transparency, efficiency, and impact.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-4">
          Our mission is to empower donors and organizations with a real-time system that tracks donations from start to finish.
        </p>

        <h2 className="text-2xl font-semibold mb-3">How We Help</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Supporting economic sectors like education, healthcare, and infrastructure.</li>
          <li>Providing real-time updates and comprehensive reports for transparency.</li>
          <li>Streamlining donations to reduce overhead and increase efficiency.</li>
          <li>Reaching global users for a significant impact worldwide.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Join Us</h2>
        <p>
          Join us in creating a more transparent, efficient, and impactful donation ecosystem for everyone.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
