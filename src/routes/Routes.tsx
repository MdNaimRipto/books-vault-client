import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayout';
import HomeMain from '../pages/Home/HomeMain';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomeMain />,
      },
    ],
  },
]);
