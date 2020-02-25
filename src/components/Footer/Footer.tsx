import React from 'react';
import { Toolbar, Link, Typography, Divider, Grid, Button, Tooltip } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import { usePlaygroundDispatch, usePlaygroundState } from '../../playground-context';

const Footer: React.FC = () => {
  const classes = useStyles();
  const { uri } = usePlaygroundState();

  const history = useHistory();
  const dispatch = usePlaygroundDispatch();

  const handleLogout = (): void => {
    dispatch({ type: 'removeWeaviateUri' });
    history.push('/');
  };

  return (
    <footer className={classes.footer}>
      <Divider />
      <Toolbar className={classes.toolbar}>
        <Grid container justify="flex-start" alignItems="center">
          <Grid xs={12} md="auto" item>
            <Typography variant="body2" className={classes.footerItem}>
              Copyright © 2019 SeMI Technologies B.V. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid xs={6} md="auto" item>
            <Grid container>
              <Grid item>
                <Typography variant="body2" className={classes.footerItem}>
                  <Link href="https://stackoverflow.com/questions/tagged/weaviate" target="_blank">
                    request help
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.footerItem}>
                  <Link
                    href="https://github.com/semi-technologies/weaviate-playground/issues"
                    target="_blank"
                  >
                    report an issue
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {uri && (
            <Grid xs={12} md="auto" item style={{ marginLeft: 'auto' }}>
              <Tooltip
                title={
                  <Button
                    className={classes.uriRemoveButton}
                    startIcon={<ExitToAppIcon />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                }
                placement="top"
                interactive
              >
                <Typography variant="body2" color="textSecondary">{uri}</Typography>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </footer>
  );
};

export default Footer;
