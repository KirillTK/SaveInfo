import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import App from './App';
import MainMenu from './components/main-menu';


const Root = () => (
    <Router>
      <MainMenu/>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </Router>
);


export default Root;