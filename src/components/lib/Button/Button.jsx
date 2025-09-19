import React from 'react';
import { Button as MuiButton } from '@mui/material';
import styles from './Button.module.css';

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '', 
  ...props 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <MuiButton 
      className={buttonClasses}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
