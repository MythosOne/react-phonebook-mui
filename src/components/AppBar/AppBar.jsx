import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import { LinearProgress } from '@mui/material';

export const AppBar = ({ isLoading }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {isLoading && (
        <LinearProgress
          color="primary"
          sx={{ position: 'absolute', bottom: 0, left: 0, width: '99%' }}
        />
      )}
    </Header>
  );
};
