import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  const handleOutlookLogin = () => {
    // Add your Outlook login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-md bg-gray-900 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Login to InpirezHR</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-400">Username</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Sign in with Google
          </button>
          <button
            onClick={handleOutlookLogin}
            className="flex items-center justify-center w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition duration-200"
          >
            <FontAwesomeIcon icon={faMicrosoft} className="mr-2" />
            Sign in with Outlook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
