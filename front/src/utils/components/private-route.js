import React from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../auth/selectors';

const PrivateRoute = props => {
  const { location, component: Component, ...otherProps } = props;

  const user = useSelector(selectUser);

  return user ? (
    <Component {...otherProps} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: location },
      }}
    />
  );
};

export default withRouter(PrivateRoute);