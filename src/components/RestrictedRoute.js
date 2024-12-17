import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRegistered } = useAuth();

  return isLoggedIn || isRegistered ? <Navigate to={redirectTo} /> : <Component />;
};
