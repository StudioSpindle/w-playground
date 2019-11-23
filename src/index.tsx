import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import themeSpec from './themes/default';

ReactDOM.render(
  <MuiThemeProvider theme={themeSpec.theme}>
    <App logo={themeSpec.logo} />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
