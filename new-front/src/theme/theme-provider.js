import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
