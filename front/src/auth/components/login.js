import React from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { compose } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions';

const style = ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150px',
    justifyContent: 'space-between',
  },
});

const Login = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(signIn(values))
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button variant="outlined" size="medium" color="primary" type="submit">
              Sign In
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

const enhance = compose(
  withStyles(style),
  withRouter,
);

export default enhance(Login);