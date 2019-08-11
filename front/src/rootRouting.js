import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import MainMenu from './components/main-menu';
import Login from './auth/components/login';

const styles = ({
  mainContainer: {
    marginTop: '30px',
  },
});


const Root = (props) => {
  const { user, classes } = props;

  return (
    <div>
      <header>
        <MainMenu/>
      </header>
      <main className={classes.mainContainer}>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Redirect to={user ? Login : Login}/>}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps),
);

export default enhance(Root);