import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { CONTACTS } from '../constants/dashboardData';

const ContactsList = () => {
  return (
    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contacts
        </Typography>
        <List dense>
          {CONTACTS.map((contact, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemAvatar>
                <Avatar sx={{ 
                  bgcolor: 'primary.main', 
                  width: 32, 
                  height: 32,
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}>
                  {contact.avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'text.primary'
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ContactsList;
