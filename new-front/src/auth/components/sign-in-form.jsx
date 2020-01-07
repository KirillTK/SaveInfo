import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Form, FormSpy } from 'react-final-form';
import { Input } from '../../components/uncontrolled-inputs/Input';
import { FieldControl } from '../../components/FieldControl';

const useStyles = makeStyles({
  submitButton: {
    margin: '20px auto',
    width: 100,
    display: 'block',
  },
});

export const SignInForm = () => {
  const classes = useStyles();

  const onSubmit = values => {
    console.log(values);
  };

  const renderForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <FieldControl name="email" component={Input} placeholder="email" variant="outlined" />
      <FieldControl name="password" component={Input} placeholder="password" variant="outlined" />
      <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
        Sign in
      </Button>
    </form>
  );

  return (
    <Form onSubmit={onSubmit} render={renderForm}>
      <FormSpy subscription={{ values: true }} />
    </Form>
  );
};
