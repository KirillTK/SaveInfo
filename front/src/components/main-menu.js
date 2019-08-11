import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({
  bar: {
    backgroundColor: '#1976d2',
  },
});


const MainMenu = (props) => {
  const { classes } = props;

  return (<div>
    <AppBar className={classes.bar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Save Info
        </Typography>
      </Toolbar>
    </AppBar>
  </div>);
};

export default withStyles(styles)(MainMenu);