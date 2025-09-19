import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { Public as PublicIcon } from '@mui/icons-material';
import { REVENUE_BY_LOCATION } from '../constants/dashboardData';

const RevenueByLocation = () => {
  return (
    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <PublicIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Revenue by Location
          </Typography>
        </Box>
        <List dense>
          {REVENUE_BY_LOCATION.map((location, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemText
                primary={location.location}
                secondary={location.revenue}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'text.primary'
                }}
                secondaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'primary.main',
                  fontWeight: 'bold'
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RevenueByLocation;
