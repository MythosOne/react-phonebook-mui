import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarExample } from '../components/AppBar/AppBar';
import { LinearProgress, Box } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
      <AppBarExample />
      <Suspense
        fallback={
          <Box
            sx={{
              width: '100%',
            }}
          >
            <LinearProgress color="primary" />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
