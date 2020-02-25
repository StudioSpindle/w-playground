import React from 'react';
import { AppBar, Toolbar, Grid, Link, Typography, Box } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import useStyles from './useStyles';
import { usePlaygroundState } from '../../playground-context';
import { TypeLogo } from '../shared.types';

export interface HeaderProps {
  logo?: TypeLogo;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const classes = useStyles();
  const { isLoggedIn } = usePlaygroundState();

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Link component={RouterLink} exact to="/">
                  <img className={classes.logo} src={logo} alt="Logo" />
                </Link>
              </Grid>
              <Grid item>
                <Box p={1}>
                  <Typography variant="body2" color="inherit">
                    (BETA)
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {isLoggedIn && (
            <Grid className={classes.headerMenu} item>
              <Link className={classes.headerLink} component={RouterLink} to="/canvas">
                Schema Editor
              </Link>
              <Link className={classes.headerLink} component={RouterLink} to="/graphiql">
                GraphiQL Editor
              </Link>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
