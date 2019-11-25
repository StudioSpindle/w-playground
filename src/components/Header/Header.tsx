import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './useStyles';
import { TypeLogo } from '../shared.types';

export interface HeaderProps {
  logo?: TypeLogo;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar variant="dense">
        <img className={classes.logo} src={logo} alt="Logo" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
