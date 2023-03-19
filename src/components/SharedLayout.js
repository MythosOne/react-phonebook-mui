import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarExample } from '../components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBarExample />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
