import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InpirezHR</span>
        </a>
        <div className="items-center justify-between w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={() => navigate('/')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => navigate('/about')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/about') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </a>
            </li>
            
            <li className="relative">
              <button
                onClick={handleDropdownToggle}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/services') || isActive('/job-opportunities') || isActive('/hiring-help') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}
              >
                Services
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800 z-10">
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavigation('/job-opportunities')}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Job Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavigation('/hiring-help')}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Hiring Help
                    </a>
                  </li>
                </ul>
              )}
            </li>
            
            <li>
              <a
                href="#"
                onClick={() => navigate('/contact')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/contact') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => navigate('/login')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/login') ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}
                aria-current={isActive('/login') ? 'page' : undefined}
              >
                Login
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
