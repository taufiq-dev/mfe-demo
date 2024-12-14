import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router';
import Home from './pages/home';

const microFrontends: RouteObject[] = [
  {
    path: '/mfe_client_a/*',
    async lazy() {
      const module = await import('mfe_client_a/routes');
      return { Component: module.default };
    },
  },
  {
    path: '/mfe_client_b/*',
    async lazy() {
      const module = await import('mfe_client_b/routes');
      return { Component: module.default };
    },
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  ...microFrontends,
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
