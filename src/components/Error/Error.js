import { Alert } from '@mui/material';
import React from 'react';

export const Error = (props) => {
  const { children } = props;

  return (
    <Alert variant="filled" severity="error">
      {children}
    </Alert>
  );
};
