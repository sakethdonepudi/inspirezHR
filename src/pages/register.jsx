import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-5xl w-full py-12 px-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-12">Register with InpirezHR</h1>
        
        <div className="space-y-12">
          {/* Candidate Registration Section */}
          <div className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-400">Candidate Registration</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Join InpirezHR to find the best job opportunities tailored for you. Upload your resume, fill in your details, and get matched with top employers.
            </p>
            <a
              href="/register/candidate"
              className="mt-4 inline-block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
            >
              Click here to register as a Candidate
            </a>
          </div>

          {/* Company Registration Section */}
          <div className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-400">Company Registration</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Register your company with InpirezHR to start hiring the best talent. Provide your company details, upload your logo, and get access to a vast pool of candidates.
            </p>
            <a
              href="/register/company"
              className="mt-4 inline-block rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400"
            >
              Click here to register your Company
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
