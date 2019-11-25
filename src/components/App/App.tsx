import React from 'react';
import { Header, Footer } from '../';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStyles, withStyles } from '@material-ui/core';
import useStyles from './useStyles';
import { TypeLogo } from '../shared.types';

export interface AppProps {
  logo?: TypeLogo;
}

import Welcome from '../../routes/Welcome';

const globalStyles = createStyles({
  // Basic CSS reset for HTML
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline'
    },
    // Make the app full height
    'body, #root': {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      minHeight: '100vh'
    },
  }
});

const App: React.FC<AppProps> = ({ logo }) => {
  const classes = useStyles();
  return (
    <Router>
      <Header logo={logo} />
        <main className={classes.main}>
          <Route path="/" exact={true}>
            <Welcome />
          </Route>
        </main>
      <Footer />
    </Router>
  );
};

export default withStyles(globalStyles)(App);
