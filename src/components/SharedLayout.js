import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarExample } from '../components/AppBar/AppBar';
import { CircularProgress   , Box } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
      <AppBarExample />
      <Suspense
        fallback={
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <CircularProgress    color='primary' />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
