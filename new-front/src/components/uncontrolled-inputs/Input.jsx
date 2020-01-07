import React from 'react';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';

export const Input = props => {
  const {
    input: { onChange },
    placeholder,
    meta,
    variant,
  } = props;

  const { error } = meta;

  const isInputHasError = Boolean(error);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <FormControl>
      <TextField
        label={placeholder}
        variant={variant}
        onChange={handleChange}
        error={isInputHasError}
        {...props}
      />
      <ErrorMessage message={error} hasError={isInputHasError}/>
    </FormControl>
  );
};

Input.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
  placeholder: PropTypes.string,
  variant: PropTypes.string,
};

Input.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  variant: 'outlined',
};
