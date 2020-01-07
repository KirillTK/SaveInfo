import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme  => ({
  root: {
    padding: theme.spacing(),
    '& .MuiFormControl-root': {
      width: '100%',
    }
  }
}));

export const FieldControl = ({ name, component, ...otherProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Field name={name} component={component} {...otherProps}  />
    </div>
  );
};

FieldControl.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
