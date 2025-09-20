import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import OrdersTable from '../components/ECommerce/OrdersTable';

const Orders = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: "12px", sm: "13px", md: "14px" },
        }}
      >
        Order List
      </Typography>

      <Box sx={{ width: '100%' }}>
        <OrdersTable />
      </Box>
    </Container>
  );
};

export default Orders;
