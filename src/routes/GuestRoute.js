/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { GuestLayout } from '@/components/Layouts';

function GuestRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <GuestLayout>
          <Component {...props} />
        </GuestLayout>
      )}
    />
  );
}

GuestRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

export default GuestRoute;
