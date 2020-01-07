import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';


export const FieldControl = ({name, component, ...otherProps}) => {
  return <Box><Field name={name} component={component} {...otherProps} /></Box>;
};

FieldControl.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};