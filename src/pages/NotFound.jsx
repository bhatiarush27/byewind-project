import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper
} from '@mui/material';
import { Warning, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          borderRadius: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <Box mb={4}>
          <Warning 
            sx={{ 
              fontSize: '4rem', 
              opacity: 0.8,
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          />
        </Box>
        
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 'bold',
            mb: 2,
            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 3,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            fontWeight: '600'
          }}
        >
          Page Not Found
        </Typography>
        
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
          Oops! The page you're looking for doesn't exist. 
          Don't worry, our development team is working hard to bring you amazing new features. 
          This page will be available soon!
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleGoHome}
            startIcon={<Home />}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: 3,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.3)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Go to Dashboard
          </Button>
        </Box>
        
        <Box mt={4}>
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.7,
              fontSize: '0.9rem'
            }}
          >
            Coming Soon: More amazing features and pages are on their way! 🚀
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFound;
