import React from 'react';
import { makeStyles, Paper, Container } from '@material-ui/core';
import { SignInForm } from './components/sign-in-form';


const useStyles = makeStyles({
  root: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
});


const SignInContainer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <SignInForm/>
      </Paper>
    </Container>);
};

export default SignInContainer;