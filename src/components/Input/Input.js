import React from 'react';
import { TextField } from '@mui/material';

export const Input = (props) => {
  const { error, inputOptions, label, type } = props;

  return (
    <>
      <TextField
        id="outlined-basic"
        type={type || 'text'}
        label={label}
        size="small"
        error={error}
        helperText={error && 'This field is required'}
        variant="outlined"
        {...inputOptions}
      />
    </>
  );
};
