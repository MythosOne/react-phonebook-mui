import { Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from './SharedLayout';
import { LoadingContainer, LoadingText, Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth, useWindowSize } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { ErrorPage } from 'pages/ErrorPage';
import { GlobalErrorHandling } from './ErrorHandling/ErrorHandling';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const width = useWindowSize();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (width < 768) {
      // if (window.location.pathname !== '/error') {
        navigate('/error');
      // }
    } else {
      // if (window.location.pathname === '/error') {
        navigate('/');
      // }
    }
  }, [width, navigate]);

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
        <Route
          path="/error"
          element={
            <ErrorPage
              title="Mobile is not supported"
              message="Please use a desktop device to access this application"
              showLink={false}
            />
          }
        />
      </Routes>
      <GlobalErrorHandling />
    </Container>
  );
};
