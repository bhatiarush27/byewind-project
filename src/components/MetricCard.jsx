import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

const MetricCard = ({ title, value, change, isPositive, icon }) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
        }
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Box fontSize="24px">{icon}</Box>
        </Box>
        
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {value}
        </Typography>
        
        <Box display="flex" alignItems="center" gap={0.5}>
          {isPositive ? (
            <TrendingUp sx={{ color: 'success.main', fontSize: 16 }} />
          ) : (
            <TrendingDown sx={{ color: 'error.main', fontSize: 16 }} />
          )}
          <Chip
            label={change}
            size="small"
            color={isPositive ? 'success' : 'error'}
            variant="outlined"
            sx={{ 
              fontWeight: 'bold',
              fontSize: '0.75rem'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
