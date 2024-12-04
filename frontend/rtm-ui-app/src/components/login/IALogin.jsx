import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios for requests

const IALogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send login data to backend (adjust the URL as needed)
      const response = await axios.post('/api/login/', {
        username: formData.username,
        password: formData.password,
      });

      // Assuming the backend returns a token upon successful login
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Log the token to verify it's stored correctly
      console.log(localStorage.getItem('token'));

      // Navigate to the dashboard or a different page
      navigate('/ia_ui/onboard'); // Adjust the route as needed
    } catch (err) {
      // Handle login errors (e.g., incorrect credentials)
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Implementing Agency Login</h1>
        <p className="text-lg mb-8 text-gray-600">
          Log in to access your organization's dashboard and manage your projects.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
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
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Display error message if login fails */}
          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                <Link 
                to = "ia_ui/onboard"
                >
                Log In
                </Link>
            </button>
            <Link
              to="/signup/ia"
              className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IALogin;
