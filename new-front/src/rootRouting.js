import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from './rootReducer';
import SignInContainer from './auth/sign-in-container';


const Root = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/login' component={SignInContainer}/>
      </Switch>
    </ConnectedRouter>
  );
};


export default Root;
