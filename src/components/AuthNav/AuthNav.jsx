import { Link, NavBox } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <NavBox>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </NavBox>
  );
};
