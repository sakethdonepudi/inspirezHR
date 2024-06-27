import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/login';

const AppRouter = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ];

  const routing = useRoutes(routes);
  return routing;
};

export default AppRouter;
