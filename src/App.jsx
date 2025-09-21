import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as CustomThemeProvider, useTheme } from './contexts/ThemeContext';
import AppShell from './components/AppShell/AppShell';
import AppRoutes from './routes/AppRoutes';

const createMuiTheme = (customTheme) => createTheme({
  palette: {
    mode: customTheme.mode,
    primary: customTheme.palette.primary,
    secondary: customTheme.palette.secondary,
    background: customTheme.palette.background,
    text: customTheme.palette.text,
    divider: customTheme.palette.divider,
    action: customTheme.palette.action,
    success: {
      main: customTheme.palette.status.success,
    },
    warning: {
      main: customTheme.palette.status.warning,
    },
    error: {
      main: customTheme.palette.status.error,
    },
    info: {
      main: customTheme.palette.status.info,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: customTheme.palette.text.primary,
    },
    h2: {
      color: customTheme.palette.text.primary,
    },
    h3: {
      color: customTheme.palette.text.primary,
    },
    h4: {
      color: customTheme.palette.text.primary,
    },
    h5: {
      color: customTheme.palette.text.primary,
    },
    h6: {
      color: customTheme.palette.text.primary,
    },
    body1: {
      color: customTheme.palette.text.primary,
    },
    body2: {
      color: customTheme.palette.text.secondary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: customTheme.palette.background.default,
          color: customTheme.palette.text.primary,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
          border: `1px solid ${customTheme.palette.border.main}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
          borderBottom: `1px solid ${customTheme.palette.divider}`,
          boxShadow: customTheme.shadows.md,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
          borderRight: `1px solid ${customTheme.palette.divider}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: customTheme.palette.background.paper,
            color: customTheme.palette.text.primary,
            '& fieldset': {
              borderColor: customTheme.palette.border.main,
            },
            '&:hover fieldset': {
              borderColor: customTheme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: customTheme.palette.primary.main,
            },
          },
          '& .MuiInputLabel-root': {
            color: customTheme.palette.text.secondary,
            '&.Mui-focused': {
              color: customTheme.palette.primary.main,
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: customTheme.palette.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: customTheme.palette.action.selected,
            '&:hover': {
              backgroundColor: customTheme.palette.action.selected,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.background.secondary,
          color: customTheme.palette.text.primary,
          border: `1px solid ${customTheme.palette.border.main}`,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <BrowserRouter>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </BrowserRouter>
    </ThemeProvider>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
