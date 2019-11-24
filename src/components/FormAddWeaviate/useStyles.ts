import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  [theme.breakpoints.up('md')]: {
    input: {
      minWidth: '400px',
    },
  },
}));

export default useStyles;
