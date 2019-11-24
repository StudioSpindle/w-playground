import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      light: '#ffbddc',
      main: '#fa0171',
      dark: '#95025c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#def8d3',
      main: '#38d611',
      dark: '#009c00',
      contrastText: '#fff'
    },
    error: {
      light: '#ffe8e7',
      main: '#ff1101',
      dark: '#800800',
      contrastText: '#fff'
    },
    grey: {
      '50': '#f7f7f7',
      '100': '#eaeaea',
      '200': '#d1d1d1',
      '300': '#bdbdbd',
      '400': '#ababab',
      '500': '#848484',
      '600': '#5e5e5e',
      '700': '#424242',
      '800': '#2b2b2b',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    text: {
      primary: 'rgba(0, 21, 43, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    }
  },
  typography: {
    fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em'
    },
    h2: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 300,
      fontSize: '1.875rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em'
    },
    h3: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.04,
      letterSpacing: '0em'
    },
    h4: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '1.35rem',
      lineHeight: 1.17,
      letterSpacing: '0.00735em'
    },
    h5: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.33,
      letterSpacing: '0em'
    },
    h6: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em'
    },
    subtitle1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    },
    subtitle2: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      lineHeight: '1.46429em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      lineHeight: '1.71429em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    button: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: ['Alegreya Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      lineHeight: '1.375em',
      color: 'rgba(0, 0, 0, 0.54)'
    }
  },
  shape: {
    borderRadius: 8
  },
  overrides: {}
});

export default {
  logo: 'https://www.semi.technology/img/logo-weaviate-horizontal-white.svg',
  theme
};
