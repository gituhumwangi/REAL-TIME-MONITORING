import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IASignup = () => {
  // Form state management 
  const [formData, setFormData] = useState({
    iaName: '',
    registrationStatus: '',
    registrationCertificate: null,
    areaOfFocus: '',
    hqLocation: '',
    geoCoverage: '',
    entitySize: {
      numberOfEmployees: '',
      annualTurnover: '',
      numberOfBeneficiaries: ''
    },
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });

  // Handle input change
  const handleChange = (e) => {  //responsible for  updating the state
    //Destructuring the (e) Event Object
    const { name, value } = e.target; // extracts the name and value  of the input field that triggered the change

    if (name in formData.entitySize) {
      setFormData((prevData) => ({
        ...prevData, //Spread operator copies all the properties of the formData 
        entitySize: { // Updates the  entitySize object
          ...prevData.entitySize,// Copies all the existing fields in entitySize
          [name]: value //Updates the fields corresponding to the name
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,// Copies all the existing fields in formData
        [name]: value //Updates only the field that corresponds to the name 
      }));
    }
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,// This spread operator ensures that only the registrationCertificate is updated while the other fields remain the same.
      registrationCertificate: e.target.files[0]
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., send data to backend)
    console.log('IA Signup Data Submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Implementing Agency Signup</h1>
        <p className="text-lg mb-8 text-gray-600">
          Register your organization as an Implementing Agency to manage funded projects.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Firstname */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter first name"
              required
            />
          </div>

          {/* Lastname */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter last name"
              required
            />
          </div>

          {/* IA Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iaName">
              Name of the IA
            </label>
            <input
              type="text"
              id="iaName"
              name="iaName"
              value={formData.iaName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter IA name"
              required
            />
          </div>

          {/* Registration Status */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registrationStatus">
              Registration Status
            </label>
            <input
              type="text"
              id="registrationStatus"
              name="registrationStatus"
              value={formData.registrationStatus}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter registration status (e.g., NGO, iNGO)"
              required
            />
          </div>

          {/* Registration Certificate */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registrationCertificate">
              Attach Registration Certificate
            </label>
            <input
              type="file"
              id="registrationCertificate"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Area of Focus */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="areaOfFocus">
              Area of Focus
            </label>
            <input
              type="text"
              id="areaOfFocus"
              name="areaOfFocus"
              value={formData.areaOfFocus}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter area of focus"
              required
            />
          </div>

          {/* HQ Location */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hqLocation">
              Geographical Location (HQ)
            </label>
            <input
              type="text"
              id="hqLocation"
              name="hqLocation"
              value={formData.hqLocation}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter HQ location"
              required
            />
          </div>

          {/* Geographical Areas of Coverage */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="geoCoverage">
              Geographical Areas of Coverage
            </label>
            <input
              type="text"
              id="geoCoverage"
              name="geoCoverage"
              value={formData.geoCoverage}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter geographical areas of coverage"
              required
            />
          </div>

          {/* Size of the Entity */}
          <h2 className="text-lg font-bold mb-4">Size of the Entity</h2>

          {/* Number of Employees */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfEmployees">
              Number of Employees
            </label>
            <input
              type="number"
              id="numberOfEmployees"
              name="numberOfEmployees"
              value={formData.entitySize.numberOfEmployees}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter number of employees"
              required
            />
          </div>

          {/* Annual Turnover */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="annualTurnover">
              Annual Turnover
            </label>
            <input
              type="number"
              id="annualTurnover"
              name="annualTurnover"
              value={formData.entitySize.annualTurnover}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter annual turnover"
              required
            />
          </div>

          {/* Number of Beneficiaries */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfBeneficiaries">
              Number of Beneficiaries
            </label>
            <input
              type="number"
              id="numberOfBeneficiaries"
              name="numberOfBeneficiaries"
              value={formData.entitySize.numberOfBeneficiaries}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter number of beneficiaries"
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
              placeholder="Enter email address"
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
              placeholder="Enter password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <Link 
              to="/login/ialogin"
              className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
            >
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IASignup;

