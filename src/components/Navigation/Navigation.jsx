import { useAuth } from '../../hooks/useAuth';
import { Link, HomeIcon } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn, isRegistered } = useAuth();

  return (
    <nav>
      <Link to="/">
      <HomeIcon/>
        Home
      </Link>
      {isRegistered && <Link to="/login">Login</Link>}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
