import React from 'react';
import { Header, Footer } from '../';
import { createStyles, withStyles } from '@material-ui/core';

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

export interface AppProps {
  logo?: string
}

const App: React.FC<AppProps> = ({ logo }) => (
  <>
    <Header logo={logo} />
    <Footer />
  </>
);

export default withStyles(globalStyles)(App);
