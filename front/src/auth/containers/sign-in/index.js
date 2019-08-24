import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import { Form, Icon } from 'antd';
import { SignInSchema } from 'utils/validation/schamas';
import { AntInput } from 'utils/components/form-field';
import { signIn } from '../../actions';

const styles = ({
  form: {
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    padding: '30px',
    margin: '50px auto',
    maxWidth: '400px',
    backgroundColor: 'white',
  },
  icon: {
    color: 'rgba(0,0,0,.25)',
  },
  submitBtn: {
    margin: '0 auto',
    display: 'block',
  },
});


const SignIn = () => {
  const dispatch = useDispatch();
  const submitSignIn = (values) => dispatch(signIn(values));

  const renderForm = ({ handleSubmit, isValid }) => (
    <Form onSubmit={handleSubmit}>
      <Field
        component={AntInput}
        name="email"
        type="email"
        label="Email"
        prefix={<Icon type='user' style={styles.icon}/>}
        hasFeedback
      />
      <Field
        component={AntInput}
        name="password"
        type='password'
        label="password"
        prefix={<Icon type='lock' style={styles.icon}/>}
        hasFeedback
      />
      <div className="submit-container">
        <button className="ant-btn ant-btn-primary" type="submit" disabled={!isValid} style={styles.submitBtn}>
          Sign In
        </button>
      </div>
    </Form>
  );

  return (
    <section style={styles.form}>
      <Formik onSubmit={submitSignIn} render={renderForm} validationSchema={SignInSchema}/>
    </section>);
};

export default SignIn;
