import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  // HTML reset
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline'
    },
  }
}));

export default useStyles;
