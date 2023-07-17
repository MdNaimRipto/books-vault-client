import { useContext } from 'react';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Loader from '../components/Loader';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error('AuthContext value is not available');
  }

  const { user } = authContextValue;

  const location = useLocation();
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <Loader />;
  }
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
