import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';
import Services from '../pages/services';
import Navbar from '../component/navbar'; 
import Contact from '../pages/contact';
import JobOpportunities from '../services/JobOpportunities'; 
import HiringHelp from '../services/HiringHelp'; 
import Register from '../pages/register';
import RegisterCandidate from '../pages/candidate'; 
import RegisterCompany from '../pages/company'; 

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
      path: "/register/candidate",
      element: (
        <>
          <Navbar />
          <RegisterCandidate />
        </>
      ),
    },
    {
      path: "/register/company",
      element: (
        <>
          <Navbar />
          <RegisterCompany />
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
