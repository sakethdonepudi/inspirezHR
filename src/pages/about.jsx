import React from 'react';
import InspirzHROfficeImage from '../images/1.jpg';
import FounderImage from '../images/founder.jpg';
import TeamMember1Image from '../images/teammember1.jpg';
import TeamMember2Image from '../images/teammember2.jpg';

const About = () => {
  return (
    <div className="p-6 bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to InpirezHR</h1>
        <p className="text-lg text-gray-400 mb-4 text-center">Your trusted partner in recruitment.</p>
        <p className="text-lg text-gray-400 mb-8 text-center">
          Our mission is to connect the best talent with the right opportunities. We strive to make the hiring process seamless and efficient for both employers and job seekers.
        </p>
        <div className="flex justify-center mb-8">
          <img src={InspirzHROfficeImage} alt="InspirzHR Office" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-400">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            At InpirezHR, we envision a world where top talent meets the best opportunities effortlessly. We aim to revolutionize the hiring process through innovative solutions and dedicated support.
          </p>
          <h2 className="text-3xl font-semibold text-indigo-400">Our Values</h2>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed">
            <li>Integrity: We maintain the highest standards of ethics and transparency in all our dealings.</li>
            <li>Excellence: We strive for excellence in every aspect of our service.</li>
            <li>Innovation: We embrace innovation to continuously improve our solutions and services.</li>
            <li>Collaboration: We believe in the power of collaboration with our clients and candidates.</li>
            <li>Respect: We treat everyone with respect and dignity.</li>
          </ul>
          <h2 className="text-3xl font-semibold text-indigo-400">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={FounderImage} alt="Founder" className="w-32 h-32 mx-auto rounded-full shadow-md mb-4" />
              <h3 className="text-xl font-bold text-indigo-400">John Doe</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img src={TeamMember1Image} alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full shadow-md mb-4" />
              <h3 className="text-xl font-bold text-indigo-400">Jane Smith</h3>
              <p className="text-gray-400">Head of Recruitment</p>
            </div>
            <div className="text-center">
              <img src={TeamMember2Image} alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full shadow-md mb-4" />
              <h3 className="text-xl font-bold text-indigo-400">Mike Johnson</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mt-8">
            Our team comprises experienced professionals dedicated to providing exceptional recruitment services. We work tirelessly to match the right talent with the right opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
