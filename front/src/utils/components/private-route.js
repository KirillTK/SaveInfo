import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../auth/selectors';
import { getUser } from '../../auth/actions';

const PrivateRoute = props => {
  const { location, component: Component, ...otherProps } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=> {
    dispatch(getUser());
  }, []);

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