import React from 'react';


function Home() {
  return (
    <div>
      
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to InspirzHR</h1>
          <p className="text-gray-700 mb-4">
          InspirzHR is your trusted partner in recruitment. Our mission is to connect the best talent with the right opportunities. We strive to make the hiring process seamless and efficient for both employers and job seekers.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Job Posting and Advertising</li>
            <li>Candidate Screening and Interviews</li>
            <li>Employee Onboarding</li>
            <li>HR Consulting</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            For more information, please visit our <a href="/contact" className="text-blue-500 hover:underline">Contact</a> page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
