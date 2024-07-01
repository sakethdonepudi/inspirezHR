import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <div className="max-w-screen-xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to InpirezHR</h1>
        <p className="text-lg text-gray-400 mb-8 text-center">
          InpirezHR is your trusted partner in recruitment. Our mission is to connect the best talent with the right opportunities. We strive to make the hiring process seamless and efficient for both employers and job seekers.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Our Services</h2>
        <ul className="list-disc list-inside mb-8 text-gray-400 leading-relaxed">
          <li>Job Posting and Advertising</li>
          <li>Candidate Screening and Interviews</li>
          <li>Employee Onboarding</li>
          <li>HR Consulting</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Contact Us</h2>
        <p className="text-lg text-gray-400 mb-8">
          For more information, please visit our <a href="/contact" className="text-blue-500 hover:underline">Contact</a> page.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Customer Reviews</h2>
        <Slider {...settings}>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-2">"InpirezHR helped us find the perfect candidate for our company. The process was smooth and efficient."</p>
            <p className="text-right">- Sarah L., Hiring Manager</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-2">"I found my dream job through InpirezHR. Their team was very supportive throughout the entire process."</p>
            <p className="text-right">- Michael B., Job Seeker</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-2">"InpirezHR's HR consulting services have been invaluable to our company's growth."</p>
            <p className="text-right">- Amanda K., CEO</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-2">"InpirezHR's HR consulting services have been invaluable to our company's growth."</p>
            <p className="text-right">- Amanda K., CEO</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
