import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


const Root = () => {

  return (
    <Router>
      <Switch>
        <Router path='/' component={() => <div/>}/>
      </Switch>
    </Router>
  );
};


export default Root;
