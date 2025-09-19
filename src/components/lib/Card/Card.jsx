import React from 'react';
import { Card as MuiCard } from '@mui/material';
import styles from './Card.module.css';

const Card = ({ 
  variant = 'default', 
  children, 
  className = '', 
  ...props 
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <MuiCard 
      className={cardClasses}
      {...props}
    >
      {children}
    </MuiCard>
  );
};

export default Card;
