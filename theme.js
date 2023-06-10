import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    divider: '#E6E7E8',
    yellowButton: {
      main: '#BE8C00',
      contrastText: '#ffffff',
    },

    purpleButton: {
      main: '#724FBC',
      contrastText: '#ffffff',
    },

    orangeButton: {
      main: '#E16F38',
      contrastText: '#ffffff',
    },
  },

  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    textTransform: 'unset',

    h1: {
      fontFamily: ['Manrope', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '60px',
      lineHeight: '73px',
      color: '#000000',
    },

    h2: {
      fontFamily: ['Manrope', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '50px',
      lineHeight: '64px',
      color: '#000000',
    },
    body1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '28px',
      color: '#111827',
    },

    subtitle1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '27px',
      color: '#000000',
    },

    subtitle2: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '13px',
      lineHeight: '14px',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: '#000000',
    },

    price: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '26px',
      lineHeight: '39px',
      color: '#53B98B',
    },
    session: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '19px',
      color: '#747579',
    },
  },
});

export default theme;
