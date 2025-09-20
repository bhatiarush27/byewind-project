import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title }) => {
  return (
    <Box className={styles.sectionHeader}>
      <Typography className={styles.sectionTitle}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
