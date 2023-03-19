import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
// import { Box } from '@mui/system';
// import { AppBar, Toolbar, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';

export const AppBarExample = () => {
  const { isLoggedIn } = useAuth();

  // const CssAppBar = styled(AppBar)({
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'spaceBetween',
  //   padding: '20px 10px',
  //   'box-shadow': '0px 15px 10px -15px #111',
  //   backdropFilter: 'blur(10px)',
  // });

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
      // <AppBar position='static'>
      // <Toolbar>
      //   <Typography sx={{ flexGrow: 1 }}>
      //     Hello
      //   </Typography>
      //     <Navigation />
      //     {isLoggedIn ? <UserMenu sx={{ flexGrow: 1 }}/> : <AuthNav />}
      //   </Toolbar>
      // </AppBar>
  );
};