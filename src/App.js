import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Router from './router';

const theme = createTheme({

  typography: {
    
    fontFamily: [
      '"Montserrat"','sans-seriff',
    ].join(','),

    h1: {
      color:'#ffffff', 
      fontWeight: 900,
      fontSize: '4rem',
      '@media (min-width:800px)': {
        fontSize: '4rem',
      },
      '@media (max-width:800px)': {
        fontSize: 'rem',
      },
    },

    h2: {
      color:'#ffffff', 
      fontWeight: 500,
      fontSize: '3rem',
      '@media (min-width:800px)': {
        fontSize: '3rem',
      },
      '@media (max-width:800px)': {
        fontSize: '3rem',
      },
    },

    h3: {
      color:'#ffffff', 
      fontWeight: 500,
      fontSize: '2rem',
      '@media (min-width:800px)': {
        fontSize: '2rem',
      },
      '@media (max-width:800px)': {
        fontSize: '2rem',
      },
    },


    h6: {
      color:'#ffffff',
      fontWeight: 100, 
      fontSize: '1.5rem',
    },

  },

  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
  },
  
  palette: {
    mode: 'dark',

    primary: {
      main: '#761A1A',
      lighter: '#FE8888',
      darker: '#300606',
    },

    secondary: {
      main: '#ffffff',
    },
    info:{
      main: '#000000',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router />

    </ThemeProvider>

  );
}

export default App;
