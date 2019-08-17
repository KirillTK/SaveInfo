import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainMenu from './components/main-menu';
import Profile from './profile';
import PrivateRoute from './utils/components/private-route';
import PublicRoute from './utils/components/public-route'
import SignIn from './auth/containers/sign-in';
import SignUp from './auth/containers/sign-up';



const Root = () => {

  return (
    <div>
      <header>
        <MainMenu/>
      </header>
      <main>
        <Router>
          <Switch>
            <PrivateRoute path="/profile" component={Profile}/>
            <PublicRoute path="/login" component={SignIn}/>
            <PublicRoute path="/registration" component={SignUp}/>
          </Switch>
        </Router>
      </main>
    </div>
  );
};


export default Root;