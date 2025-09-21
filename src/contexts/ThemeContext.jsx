import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme color definitions
const lightTheme = {
  mode: 'light',
  palette: {
    primary: {
      main: '#2196f3',
      light: '#E3F5FF',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#fafafa',
    },
    text: {
      primary: '#212121',
      secondary: '#666666',
      tertiary: '#999999',
      disabled: '#bdbdbd',
    },
    divider: '#e0e0e0',
    border: {
      light: '#f0f0f0',
      main: '#e0e0e0',
      dark: '#cccccc',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(33, 150, 243, 0.12)',
    },
    status: {
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
      info: '#2196f3',
    },
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },
};

const darkTheme = {
  mode: 'dark',
  palette: {
    primary: {
      main: '#64b5f6',
      light: '#90caf9',
      dark: '#42a5f5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#81c784',
      light: '#a5d6a7',
      dark: '#66bb6a',
      contrastText: '#000000',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1e1e1e',
      secondary: '#121212',
      tertiary: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
      tertiary: '#808080',
      disabled: '#4d4d4d',
    },
    divider: '#333333',
    border: {
      light: '#2d2d2d',
      main: '#333333',
      dark: '#404040',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(100, 181, 246, 0.12)',
    },
    status: {
      success: '#66bb6a',
      warning: '#ffb74d',
      error: '#f44336',
      info: '#64b5f6',
    },
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.5)',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Memoize theme object to prevent unnecessary re-renders
  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply data-theme attribute for CSS variable support
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.palette.background.paper);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = theme.palette.background.paper;
      document.head.appendChild(meta);
    }
  }, [isDarkMode, theme.palette.background.paper]);

  const value = useMemo(() => ({
    isDarkMode,
    toggleTheme,
    theme,
    mode: theme.mode,
  }), [isDarkMode, theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
