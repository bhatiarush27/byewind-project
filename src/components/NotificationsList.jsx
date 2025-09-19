import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { NOTIFICATIONS } from '../constants/dashboardData';

const NotificationsList = () => {
  return (
    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Notifications
        </Typography>
        <List dense>
          {NOTIFICATIONS.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={notification.message}
                  secondary={notification.time}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: 'text.primary'
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.75rem',
                    color: 'text.secondary'
                  }}
                />
              </ListItem>
              {index < NOTIFICATIONS.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default NotificationsList;
