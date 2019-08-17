import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainMenu from './components/main-menu';
import Login from './auth';
import Profile from './profile';
import PrivateRoute from './utils/components/private-route';
import PublicRoute from './utils/components/public-route'



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
            <PublicRoute path="/login" component={Login}/>
          </Switch>
        </Router>
      </main>
    </div>
  );
};


export default Root;