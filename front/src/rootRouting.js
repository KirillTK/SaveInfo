import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import MainMenu from './components/main-menu';
import Profile from './profile';
import PrivateRoute from './utils/components/private-route';
import PublicRoute from './utils/components/public-route';
import SignIn from './auth/containers/sign-in';
import SignUp from './auth/containers/sign-up';

const { Content } = Layout;


const Root = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainMenu/>
      <Content>
        <Router>
          <Switch>
            <PrivateRoute path='/profile' component={Profile}/>
            <PublicRoute path='/login' component={SignIn}/>
            <PublicRoute path='/registration' component={SignUp}/>
            <Redirect to='/profile' />
          </Switch>
        </Router>
      </Content>
    </Layout>
  );
};


export default Root;