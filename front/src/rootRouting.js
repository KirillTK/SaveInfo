import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import MainMenu from './components/main-menu';
import Login from './auth/components/login';


const Root = (props) => {
  const { user } = props;
  console.log('user', user);

  return (
    <Router>
      <MainMenu/>
      <Switch>
        <Route path="/" component={() => <Redirect to={user ? '/profile' : '/login'}/>}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.auth.user,
  };
};


export default connect(mapStateToProps)(Root);