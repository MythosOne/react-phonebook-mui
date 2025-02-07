import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SharedLayout } from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { refreshUser } from 'redux/auth/operations';
import { useAuth, useWindowSize } from 'hooks';
import { ErrorPage } from 'pages/ErrorPage';
import { GlobalErrorHandling } from './ErrorHandling/ErrorHandling';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContainer, LoadingText, Container } from './App.styled';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const width = useWindowSize();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return width < 768 ? (
    <ErrorPage
      title="Mobile is not supported"
      message="Please use a desktop device to access this application"
      showLink={false}
    />
  ) : isRefreshing ? (
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
        <Route
          path="*"
          element={
            <ErrorPage
              title="404 - Page not found"
              message="We couldn't find the page you were looking for."
              showLink={true}
            />
          }
        />
      </Routes>
      <GlobalErrorHandling />
    </Container>
  );
};
