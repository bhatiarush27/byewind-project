import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import styles from './IconButton.module.css';

const IconButton = ({ 
  variant = 'default', 
  size = 'medium', 
  children, 
  className = '', 
  ...props 
}) => {
  const buttonClasses = [
    styles.iconButton,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <MuiIconButton 
      className={buttonClasses}
      {...props}
    >
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
