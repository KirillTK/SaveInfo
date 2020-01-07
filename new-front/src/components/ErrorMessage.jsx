import React from 'react';
import { FormHelperText } from "@material-ui/core";

export const ErrorMessage = ({hasError, message}) => {
  return hasError && <FormHelperText error={hasError}>{message}</FormHelperText>;
};
