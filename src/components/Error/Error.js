import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

export const Error = (props) => {
  const { children } = props;

  return (
    <Alert data-testid="error" variant="filled" severity="error">
      {children}
    </Alert>
  );
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};
