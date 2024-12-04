import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmitPerformanceIndicators = ({ beneficiaryId }) => {
  const [indicators, setIndicators] = useState([]);
  const [actualValues, setActualValues] = useState({});

  useEffect(() => {
    // Fetch all the project indicators related to the beneficiary's project
    const fetchIndicators = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/beneficiaries/${beneficiaryId}/indicators/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setIndicators(response.data);
      } catch (error) {
        console.error('Error fetching indicators:', error.response?.data);
      }
    };

    fetchIndicators();
  }, [beneficiaryId]);

  const handleChange = (indicatorId, value) => {
    setActualValues({
      ...actualValues,
      [indicatorId]: value,
    });
  };

  const submitIndicators = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/beneficiaries/${beneficiaryId}/indicators/`,
        actualValues,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log('Indicators submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting indicators:', error.response?.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitIndicators();
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Submit Performance Indicators</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {indicators.map((indicator) => (
          <div key={indicator.id}>
            <label className="block text-gray-700">{indicator.indicator_name}</label>
            <input
              type="number"
              name={indicator.id}
              value={actualValues[indicator.id] || ''}
              onChange={(e) => handleChange(indicator.id, e.target.value)}
              step="0.01"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={`Enter actual value (Baseline: ${indicator.baseline_value}, Target: ${indicator.target_value})`}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit Indicators
        </button>
      </form>
    </div>
  );
};

export default SubmitPerformanceIndicators;
