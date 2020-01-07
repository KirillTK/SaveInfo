import React from 'react';
import { TextField } from '@material-ui/core';



export const Input = props => {
  const { input: { onChange } } = props;

  const handleChange = event => {
    const { target : { value } } = event;
    onChange(value);
  };

  return <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} {...props} />;
};