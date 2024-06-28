import React from 'react';
import InspirzHROfficeImage from '../images/1.jpg';

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-4xl px-6 py-12 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to InspirzHR</h2>
        <p className="text-lg text-gray-700 mb-4">Your trusted partner in recruitment.</p>
        <p className="text-lg text-gray-700 mb-8">Our mission is to connect the best talent with the right opportunities. We strive to make the hiring process seamless and efficient for both employers and job seekers.</p>
        <div className="flex justify-center">
          <img src={InspirzHROfficeImage} alt="InspirzHR Office" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default About;
