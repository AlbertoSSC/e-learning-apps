import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: Palette['primary'];
    greyColor: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    greyColor: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  shape: {
    borderRadius: 32,
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px 8px 0 0',
          },
          '& .MuiFilledInput-root': {
            borderRadius: '8px 8px 0 0',
          },
          '& .MuiInputBase-root': {
            borderRadius: '8px 8px 0 0',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow:
            '0 1px 2px 0 rgba(0, 0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0, 0.15)',
          '&:hover': {
            backgroundColor: '#257e9d',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.greyColor.main,
        }),
        button: {
          color: 'white',
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#219EBC',
      dark: '#023047',
      light: '#8ECAE6',
    },
    secondary: {
      main: '#ffc107',

      dark: '#ff8f00',
      light: '#ffe082',
      contrastText: '#242424',
    },
    tertiary: {
      main: '#7ae582',

      dark: '#25a18e',
      light: '#9fffcb',
      contrastText: '#242424',
    },
    success: {
      main: '#4caf50',

      dark: '#2d6930',
      light: '#a5d7a7',
      contrastText: '#242424',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',

      dark: '#556cd6',
      light: '#73c2fb',
      contrastText: '#fff',
    },

    greyColor: {
      main: '#656565',

      dark: '#242424',
      light: '#ededed',
    },
  },
});

export default theme;
