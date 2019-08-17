import React from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../auth/selectors';

const PublicRoute = props => {
  const { location, component: Component, ...otherProps } = props;

  const user = useSelector(selectUser);

  return !user ? (
    <Component {...otherProps} />
  ) : (
    <Redirect
      to={{
        pathname: '/profile',
        state: { from: location },
      }}
    />
  );
};

export default withRouter(PublicRoute);