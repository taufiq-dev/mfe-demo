import { Route, Routes } from 'react-router';
import ExtraPage from './pages/extra-page';
import Home from './pages/home';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/extra-page' element={<ExtraPage />} />
    </Routes>
  );
};

export default routes;
