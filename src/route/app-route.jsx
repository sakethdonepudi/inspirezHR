import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';
import Services from '../pages/services';
import Navbar from '../component/navbar'; // Adjust the path as necessary
import Contact from '../pages/contact';
import JobOpportunities from '../services/JobOpportunities'; // Adjust the path as necessary
import HiringHelp from '../services/HiringHelp'; // Adjust the path as necessary
import Register from '../pages/register';

const AppRouter = () => {
  const routes = [
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar />
          <Register />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/job-opportunities",
      element: (
        <>
          <Navbar />
          <JobOpportunities />
        </>
      ),
    },
    {
      path: "/hiring-help",
      element: (
        <>
          <Navbar />
          <HiringHelp />
        </>
      ),
    },
    
  ];

  const routing = useRoutes(routes);
  return routing;
};

export default AppRouter;
