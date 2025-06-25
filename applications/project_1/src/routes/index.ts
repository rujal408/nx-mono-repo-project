import { createBrowserRouter } from 'react-router-dom';
import Dependent from '../pages/dependent';
import FetchDataForm from '../pages/fetch-data-form';
import Home from '../pages/home';
import Country from '../pages/country';
import FieldArrayDisablePage from '../pages/field-array-disable';
import IFrameForm from '../pages/iframe-form';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/fetchForm', Component: FetchDataForm },
  { path: '/dependent', Component: Dependent },
  { path: '/country', Component: Country },
  { path: '/field-array-disable', Component: FieldArrayDisablePage },
  { path: '/iframe-form', Component: IFrameForm },
]);

export default router;
