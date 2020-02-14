import React from 'react';
import { Toolbar, Link, Typography, Divider, Box } from '@material-ui/core';
import useStyles from './useStyles';

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Divider />
      <Toolbar>
        <Box display="flex" flexDirection="row" flexGrow="1">
          <Box p={1}>
            <Typography>Weaviate Playground BETA</Typography>
          </Box>
          <Box p={1}>
            <Typography>
              <Link href="https://stackoverflow.com/questions/tagged/weaviate" target="_blank">
                request help
              </Link>
            </Typography>
          </Box>
          <Box p={1}>
            <Typography>
              <Link
                href="https://github.com/semi-technologies/weaviate-playground/issues"
                target="_blank"
              >
                report an issue
              </Link>
            </Typography>
          </Box>
          <Box p={1} className={classes.copyright}>
            <Typography>Copyright © 2019 SeMI Technologies B.V. All Rights Reserved.</Typography>
          </Box>
        </Box>
      </Toolbar>
    </footer>
  );
};

export default Footer;
