import * as Yup from 'yup';
import { MAX_LENGTH_PASSWORD, MIN_LENGTH_PASSWORD } from './constants';


export const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(MIN_LENGTH_PASSWORD, 'Too Short!')
    .max(MAX_LENGTH_PASSWORD, 'Too Long!')
    .required('Required'),
  password2: Yup.string()
    .min(MIN_LENGTH_PASSWORD, 'Too Short!')
    .max(MAX_LENGTH_PASSWORD, 'Too Long!')
    .oneOf([Yup.ref('password'), null], "Passwords don't match")
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(MIN_LENGTH_PASSWORD, 'Too Short!')
    .max(MAX_LENGTH_PASSWORD, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});