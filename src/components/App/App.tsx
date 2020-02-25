import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { createStyles, withStyles } from '@material-ui/core';
import { Header, Footer, Canvas, GraphiQLContainer } from '..';
import useStyles from './useStyles';
import { usePlaygroundState } from '../../playground-context';
import { TypeLogo } from '../shared.types';

import Welcome from '../../routes/Welcome';

export interface AppProps {
  logo?: TypeLogo;
}

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
    }
  }
});

const App: React.FC<AppProps> = ({ logo }) => {
  const classes = useStyles();
  const { isLoggedIn } = usePlaygroundState();
  return (
    <Router>
      <Header logo={logo} />
      <main className={classes.main}>
        <Route path="/" exact>
          <Welcome />
        </Route>
        {isLoggedIn ? (
          <>
            <Route path="/canvas">
              <Canvas />
            </Route>
            <Route path="/graphiql">
              <GraphiQLContainer />
            </Route>
          </>
        ) : (
          <Redirect to="/" />
        )}
      </main>
      <Footer />
    </Router>
  );
};

export default withStyles(globalStyles)(App);
