import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ScrollToTop from '../../components/ScrollToTop';

const MyWishList = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }

  const { user } = authContextValue;
  return (
    <div className="my-12 min-h-screen">
      <ScrollToTop />
      <h2 className="font-serif text-2xl">
        Hello {user.name.firstName} {user.name.lastName}! Welcome to Your
        Wishlist.
      </h2>
    </div>
  );
};

export default MyWishList;
