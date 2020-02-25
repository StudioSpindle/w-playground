import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      marginTop: 'auto'
    },
    toolbar: {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`
    },
    footerItem: {
      marginRight: theme.spacing(2)
    },
    uriRemoveButton: {
      color: theme.palette.common.white
    }
  })
);

export default useStyles;
