import { createBrowserRouter } from 'react-router-dom';
import Dependent from '../pages/dependent';
import FetchDataForm from '../pages/fetch-data-form';
import Home from '../pages/home';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/fetchForm', Component: FetchDataForm },
  { path: '/dependent', Component: Dependent },
]);

export default router;
