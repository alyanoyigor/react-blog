import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const Input = (props) => {
  const { error, inputOptions, label, type, disabled, valueWatcher } = props;

  return (
    <TextField
      id="outlined-basic"
      type={type}
      label={label}
      disabled={disabled}
      size="small"
      error={Boolean(error)}
      helperText={(error && error.message) || ''}
      variant="outlined"
      InputLabelProps={{ shrink: Boolean(valueWatcher) }}
      {...inputOptions}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
};

Input.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  valueWatcher: PropTypes.any,
  inputOptions: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    ref: PropTypes.func,
  }).isRequired,
};