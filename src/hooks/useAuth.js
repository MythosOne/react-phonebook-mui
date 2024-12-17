import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRegistered,
  selectUser,
  selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRegistered,
    isRefreshing,
    user,
  };
};
