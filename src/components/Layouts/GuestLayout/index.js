import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function GuestLayout({ children }) {
  return (
    <div className="guest-layout">
      {children}
    </div>
  );
}

GuestLayout.propTypes = {
  children: PropTypes.element,
};

export default GuestLayout;
