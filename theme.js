import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    divider: '#E6E7E8',
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),

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
      fontSize: '12px',
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
