import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { RefCallBack } from 'react-hook-form';

const defaultProps = {
  error: '',
  type: 'text',
  disabled: false,
};

type InputProps = {
  inputOptions: {
    name: string;
    onChange: (value: any) => void;
    onBlur: (value: any) => void;
    ref: RefCallBack;
  };
  label: string;
  valueWatcher?: string | number;
  disabled?: boolean;
  type?: string;
  error?: string;
} & typeof defaultProps;

export const Input = (props: InputProps) => {
  const { error, inputOptions, label, type, disabled, valueWatcher } = props;

  return (
    <TextField
      id="outlined-basic"
      type={type}
      label={label}
      disabled={disabled}
      size="small"
      error={Boolean(error)}
      helperText={error}
      variant="outlined"
      InputLabelProps={{ shrink: Boolean(valueWatcher) }}
      {...inputOptions}
    />
  );
};

Input.defaultProps = defaultProps;

Input.propTypes = {
  error: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  valueWatcher: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  inputOptions: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    ref: PropTypes.func.isRequired,
  }).isRequired,
};
