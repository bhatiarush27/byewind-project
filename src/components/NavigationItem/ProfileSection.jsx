import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import styles from './ProfileSection.module.css';

const ProfileSection = () => {
  return (
    <Box className={styles.profileSection}>
      <Avatar 
        className={styles.avatar}
        src="/api/placeholder/40/40" // Placeholder avatar
        alt="ByeWind"
      >
        BW
      </Avatar>
      <Typography className={styles.profileText}>
        ByeWind
      </Typography>
    </Box>
  );
};

export default ProfileSection;
