import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
// import { LinearProgress, Box } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<AppBar isLoading={true} />}>
        <AppBar isLoading={false} />
        <Outlet />
      </Suspense>
    </>
  );
};
