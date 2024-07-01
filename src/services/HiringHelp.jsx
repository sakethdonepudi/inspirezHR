import React, { useState } from 'react';

function HiringHelp() {
  const [experience, setExperience] = useState('');

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <div className="max-w-screen-xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Hiring Assistance</h1>
        <form>
          {/* Job Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Job Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-400 font-semibold">Job Profile</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter job profile"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 font-semibold">Number of Positions</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter number of positions"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold">Job Description</label>
              <textarea
                className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter job description"
                required
              ></textarea>
            </div>
          </div>

          {/* Candidate Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Candidate Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-400 font-semibold">Salary Range</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter salary range"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 font-semibold">Location</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter job location"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold">Skills Required</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter required skills"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold">Experience Level</label>
              <select
                className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={experience}
                onChange={handleExperienceChange}
                required
              >
                <option value="" className="text-white-700">Select experience level</option>
                <option value="fresher" className="text-white-700">Fresher</option>
                <option value="experienced" className="text-white-700">Experienced</option>
              </select>
            </div>
            {experience === 'experienced' && (
              <div className="mb-4">
                <label className="block text-gray-400 font-semibold">Previous Salary</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter previous salary"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold">Expected Salary</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-700 bg-gray-800 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter expected salary"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white p-3 rounded hover:bg-indigo-400 transition duration-200 w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HiringHelp;
