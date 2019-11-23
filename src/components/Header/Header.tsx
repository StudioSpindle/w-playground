import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './useStyles';

export interface HeaderProps {
  logo?: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar variant="dense">
          <img
            className={classes.logo}
            src="https://www.semi.technology/img/logo-weaviate-horizontal-white.svg"
            alt="Logo"
          />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
