import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayout';
import HomeMain from '../pages/Home/HomeMain';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import BooksDetail from '../pages/Books/BooksDetail';
import AllBooksLayout from '../layouts/AllBooksLayout';
import AddNewBook from '../pages/Books/AddNewBook';
import EditBook from '../pages/Books/EditBook';
import PrivateRoute from './PrivateRoute';
import MyWishList from '../pages/MyWishList/MyWishlist';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
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
        path: '/add-new-book',
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/edit-book/:id',
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-wishlist',
        element: (
          <PrivateRoute>
            <MyWishList />
          </PrivateRoute>
        ),
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
    errorElement: <NotFound />,
  },
]);
