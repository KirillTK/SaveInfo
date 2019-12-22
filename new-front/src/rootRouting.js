import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from './rootReducer';
import SignIn from './auth/sign-in';


const Root = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/login' component={SignIn}/>
      </Switch>
    </ConnectedRouter>
  );
};


export default Root;
