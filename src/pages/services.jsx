import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const handleJobOpportunities = () => {
    navigate('/job-opportunities');
  };

  const handleHiringHelp = () => {
    navigate('/hiring-help');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-700 mb-4">
          At InpirezHR, we offer a range of services to help both job seekers and employers.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Job Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Explore a wide range of job opportunities that match your skills and interests. Click the button below to view the latest job openings.
          </p>
          <button
            onClick={handleJobOpportunities}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            View Job Opportunities
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Hiring Assistance</h2>
          <p className="text-gray-700 mb-4">
            Get help with hiring the right talent for your organization. Specify the job profiles you're looking to fill and we will assist you in finding the best candidates.
          </p>
          <button
            onClick={handleHiringHelp}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
          >
            Get Hiring Assistance
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
