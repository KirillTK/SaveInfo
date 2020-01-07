export const validateSignIn = values => {
  const errors = {};

  if (values.email) {
    errors.email = 'Error';
  }

  return errors;
};