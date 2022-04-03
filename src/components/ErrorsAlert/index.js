import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import './index.scss';

function ErrorsAlert({ message, details, className }) {
  return (
    <Alert
      description={
        <>
          {details.map((detail) => (
            <Fragment key={detail}>
              {detail}
              <br />
            </Fragment>
          ))}
        </>
      }
      showIcon
      type="error"
      message={message || 'Error'}
      className={classNames('errors-alert', className)}
    />
  );
}

ErrorsAlert.propTypes = {
  message: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default ErrorsAlert;
