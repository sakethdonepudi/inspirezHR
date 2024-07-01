import React from 'react';

function Contact() {
  return (
    <div className="p-6 bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-400">Welcome to InpirezHR</h2>
          <p className="text-gray-400 leading-relaxed">
            Your trusted partner in recruitment.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to connect the best talent with the right opportunities. We strive to make the hiring process seamless and efficient for both employers and job seekers.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-indigo-400">Contact Information</h3>
            <p className="text-gray-400 mt-2">Email: contact@inpirezhr.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Address: 123 Recruitment Lane, Talent City, ST 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
