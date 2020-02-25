import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      marginBottom: '1rem',
      marginTop: '1rem'
    },
    headerMenu: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(2)
      }
    },
    headerLink: {
      color: 'white',
      fontFamily: theme.typography.button.fontFamily,
      padding: '.5em .75em',
      transition: '.5s',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        borderRadius: '1em 0 1em 0'
      },
      '&.active': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black,
        borderRadius: '1em 0 1em 0',
        '&:hover': {
          textDecoration: 'none',
          cursor: 'default'
        }
      }
    }
  })
);

export default useStyles;
