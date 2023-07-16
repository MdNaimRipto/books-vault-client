import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayout';
import HomeMain from '../pages/Home/HomeMain';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import BooksDetail from '../pages/Books/BooksDetail';
import AllBooksLayout from '../layouts/AllBooksLayout';

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
        path: '/books-details/:id',
        element: <BooksDetail />,
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
  {
    path: '/all-books',
    element: <AllBooksLayout />,
  },
]);
