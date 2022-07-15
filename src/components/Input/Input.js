import React from 'react';
import { TextField } from '@mui/material';

export const Input = (props) => {
  const { error, inputOptions, label, type, disabled } = props;

  return (
    <>
      <TextField
        id="outlined-basic"
        type={type || 'text'}
        label={label}
        disabled={disabled}
        size="small"
        error={error}
        helperText={error && 'This field is required'}
        variant="outlined"
        {...inputOptions}
      />
    </>
  );
};
