import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router';
import Layout from './components/layout';

const microFrontends: RouteObject[] = [
  {
    path: '/mfe-client-a/*',
    async lazy() {
      const module = await import('mfe_client_a/routes');
      return { Component: module.default };
    },
  },
  {
    path: '/mfe-client-b/*',
    async lazy() {
      const module = await import('mfe_client_b/routes');
      return { Component: module.default };
    },
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...microFrontends],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
