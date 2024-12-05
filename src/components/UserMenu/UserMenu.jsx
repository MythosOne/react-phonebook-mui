import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import {User, UserName, LogoutButton} from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log('User:', user.username);

  return (
    <User>
      <UserName>Welcome, {user.username}</UserName>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </User>
  );
};
