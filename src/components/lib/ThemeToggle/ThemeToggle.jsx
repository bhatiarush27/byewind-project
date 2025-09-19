import React from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../../../contexts/ThemeContext';
import IconButton from '../IconButton/IconButton';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ className = '', ...props }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${className}`}
      variant="ghost"
      size="medium"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      {...props}
    >
      {isDarkMode ? (
        <LightMode className={styles.icon} />
      ) : (
        <DarkMode className={styles.icon} />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
