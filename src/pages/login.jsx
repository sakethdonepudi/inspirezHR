import React from 'react';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to InpirezHR</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200 mb-3"
          >
            Sign in with Google
          </button>
          <button
            onClick={handleOutlookLogin}
            className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition duration-200"
          >
            Sign in with Outlook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
