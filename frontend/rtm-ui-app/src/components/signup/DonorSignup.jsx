import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for redirection
// import jwt_decode from "jwt-decode"
// import { useContext } from "react"
// import dayjs from "day"



const DonorSignup = () => {
  // Form state
  const [formData, setFormData] = useState({
    username: '', // Add username
    full_name: '', // Make sure full_name matches backend
    email: '',
    password: '',
    password2: '', // Add password2 for confirmation
    strategicFocus: '', // You might need to rename this if it's not handled by the backend
    annual_donation_capacity: '', // Ensure this matches the backend
    headquarters_location: '', // Match this with backend's field
    geographical_focus: '', // Match this with backend's field
  });

  const [error, setError] = useState(null); // State to hold error messages
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/rtm/register/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Sign up successful:', response.data); 
      navigate('/dashboard'); // Navigate to dashboard or another page on success
    } catch (error) {
      console.error('Sign up failed:', error.response);
      setError(error.response.data); // Set the error message from server response
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Donor Signup</h1>
        <p className="text-lg mb-8 text-gray-600">
          Register as a donor to fund projects or programs with specific outcomes.
        </p>
        {error && (
          <div className="text-red-600 text-center mb-4">
            {Object.keys(error).map((key) => (
              <p key={key}>{error[key]}</p>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username" // Added username field
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter username"
              required
            />
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="full_name" // Changed name to full_name
              value={formData.full_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              name="password2" // Added password confirmation
              value={formData.password2}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Strategic Focus */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="strategicFocus">
              Strategic Focus
            </label>
            <input
              type="text"
              id="strategicFocus"
              name="strategicFocus"
              value={formData.strategicFocus}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter strategic focus"
              required
            />
          </div>

          {/* Annual Donation Capacity */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="annualDonationCapacity">
              Annual Donation Capacity
            </label>
            <input
              type="number"
              id="annualDonationCapacity"
              name="annual_donation_capacity" // Ensure this matches backend field
              value={formData.annual_donation_capacity}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter donation capacity"
              required
            />
          </div>

          {/* HQ Location */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hqLocation">
              HQ Location
            </label>
            <input
              type="text"
              id="hqLocation"
              name="headquarters_location" // Ensure this matches backend field
              value={formData.headquarters_location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter HQ location"
              required
            />
          </div>

          {/* Geographical Focus */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="geoFocus">
              Geographical Focus
            </label>
            <input
              type="text"
              id="geoFocus"
              name="geographical_focus" // Ensure this matches backend field
              value={formData.geographical_focus}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter geographical focus"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login/donor" className="text-green-600 hover:text-green-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorSignup;
