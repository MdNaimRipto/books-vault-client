import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayout';
import HomeMain from '../pages/Home/HomeMain';
import AllBooks from '../pages/Books/AllBooks';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomeMain />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/sign-in',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <Register />,
      },
    ],
  },
]);
