import React from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from '@/routes/AuthRoute';
import GuestRoute from '@/routes/GuestRoute';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import ProfilePage from '@/pages/ProfilePage';
import NotFoundPage from '@/pages/NotFoundPage';

function Routes() {
  return (
    <Switch>
      <GuestRoute
        exact
        path='/'
        component={HomePage}
      />
      <GuestRoute
        path='/login'
        component={LoginPage}
      />
      <AuthRoute
        path='/me'
        component={ProfilePage}
      />
      <GuestRoute
        path='*'
        component={NotFoundPage}
      />
    </Switch>
  );
}

export default Routes;
