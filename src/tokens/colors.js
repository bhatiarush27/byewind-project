// Color tokens for the application
export const colors = {
  // Primary colors
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3', // Main primary
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  
  // Secondary colors
  secondary: {
    50: '#e8f5e8',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50', // Main secondary
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Semantic colors
  semantic: {
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
  },
  
  // Background colors
  background: {
    light: '#ffffff',
    dark: '#121212',
    paper: {
      light: '#ffffff',
      dark: '#1e1e1e',
    },
    default: {
      light: '#f5f5f5',
      dark: '#0a0a0a',
    },
  },
  
  // Text colors
  text: {
    primary: {
      light: '#212121',
      dark: '#ffffff',
    },
    secondary: {
      light: '#757575',
      dark: '#b3b3b3',
    },
    disabled: {
      light: '#bdbdbd',
      dark: '#666666',
    },
  },
  
  // Border colors
  border: {
    light: '#e0e0e0',
    dark: '#333333',
  },
  
  // Shadow colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.3)',
  },
};

// CSS custom properties for easy theming
export const cssVariables = {
  light: {
    '--color-primary': colors.primary[500],
    '--color-primary-light': colors.primary[300],
    '--color-primary-dark': colors.primary[700],
    '--color-secondary': colors.secondary[500],
    '--color-secondary-light': colors.secondary[300],
    '--color-secondary-dark': colors.secondary[700],
    '--color-background': colors.background.light,
    '--color-background-paper': colors.background.paper.light,
    '--color-background-default': colors.background.default.light,
    '--color-text-primary': colors.text.primary.light,
    '--color-text-secondary': colors.text.secondary.light,
    '--color-text-disabled': colors.text.disabled.light,
    '--color-border': colors.border.light,
    '--color-shadow': colors.shadow.light,
  },
  dark: {
    '--color-primary': colors.primary[300],
    '--color-primary-light': colors.primary[200],
    '--color-primary-dark': colors.primary[500],
    '--color-secondary': colors.secondary[300],
    '--color-secondary-light': colors.secondary[200],
    '--color-secondary-dark': colors.secondary[500],
    '--color-background': colors.background.dark,
    '--color-background-paper': colors.background.paper.dark,
    '--color-background-default': colors.background.default.dark,
    '--color-text-primary': colors.text.primary.dark,
    '--color-text-secondary': colors.text.secondary.dark,
    '--color-text-disabled': colors.text.disabled.dark,
    '--color-border': colors.border.dark,
    '--color-shadow': colors.shadow.dark,
  },
};
