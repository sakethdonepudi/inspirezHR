import React from 'react';

function HiringHelp() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Hiring Assistance</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Job Profile</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job profile"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Number of Positions</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number of positions"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job description"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HiringHelp;
