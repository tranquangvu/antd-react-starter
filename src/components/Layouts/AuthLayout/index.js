import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element,
};

export default AuthLayout;
