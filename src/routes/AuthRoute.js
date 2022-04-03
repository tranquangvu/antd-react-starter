/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { AuthLayout } from '@/components/Layouts';
import { useAuth } from '@/hooks';

function AuthRoute({ component: Component, ...rest }) {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
        }
        return (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        );
      }}
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

export default AuthRoute;
