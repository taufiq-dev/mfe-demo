import { BrowserRouter } from 'react-router';
import MFERoutes from './routes';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <MFERoutes />
    </BrowserRouter>
  );
};

export default App;
