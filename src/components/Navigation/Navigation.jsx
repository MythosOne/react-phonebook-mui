import { useAuth } from '../../hooks/useAuth';
import { Link, HomeIcon } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
      <HomeIcon/>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
