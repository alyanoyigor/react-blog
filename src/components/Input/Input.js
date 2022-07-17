import React from 'react';
import { TextField } from '@mui/material';

export const Input = (props) => {
  const { error, inputOptions, label, type, disabled, value } = props;

  return (
    <TextField
      id="outlined-basic"
      type={type}
      label={label}
      disabled={disabled}
      size="small"
      error={error}
      helperText={error && 'This field is required'}
      variant="outlined"
      InputLabelProps={{ shrink: Boolean(value) }}
      {...inputOptions}
    />
  );
};

Input.defaultProps = {
  type: 'text',
};
