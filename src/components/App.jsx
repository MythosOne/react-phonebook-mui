import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from './SharedLayout';
import { LoadingContainer, LoadingText, Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { NotFound } from 'pages/NotFound';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoadingContainer>
      <LoadingText>Fetching user data...</LoadingText>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <CircularProgress size="60px" />
      </Stack>
    </LoadingContainer>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
