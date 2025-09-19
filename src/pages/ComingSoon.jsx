import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip
} from '@mui/material';
import { Rocket, Schedule, Code } from '@mui/icons-material';

const ComingSoon = ({ pageName = "This Page" }) => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          borderRadius: 3,
          background: 'linear-gradient(135deg, #4A90E2 0%, #10B981 100%)',
          color: 'white'
        }}
      >
        <Box mb={4}>
          <Rocket 
            sx={{ 
              fontSize: '4rem', 
              opacity: 0.8,
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          />
        </Box>
        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            mb: 2
          }}
        >
          {pageName}
        </Typography>
        
        <Chip
          icon={<Schedule />}
          label="Coming Soon"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            mb: 3,
            fontSize: '1rem',
            fontWeight: 'bold',
            px: 2,
            py: 1
          }}
        />
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            opacity: 0.9,
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          We're working hard to bring you this amazing feature! 
          Our development team is putting the finishing touches on this page.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Code />
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Powered by React & Material-UI
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ComingSoon;
