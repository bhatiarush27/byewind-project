import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Box
} from '@mui/material';
import MetricCard from '../components/MetricCard';
import ProjectionsChart from '../components/ProjectionsChart';
import RevenueChart from '../components/RevenueChart';
import NotificationsList from '../components/NotificationsList';
import ActivitiesList from '../components/ActivitiesList';
import RevenueByLocation from '../components/RevenueByLocation';
import ProductsTable from '../components/ProductsTable';
import TotalSalesChart from '../components/TotalSalesChart';
import ContactsList from '../components/ContactsList';
import { KEY_METRICS } from '../constants/dashboardData';

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3 } }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          mb: 4,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
        }}
      >
        Dashboard
      </Typography>
      
      {/* Key Metrics */}
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: 4 }}>
        {KEY_METRICS.map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.id}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={metric.icon}
            />
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <ProjectionsChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <NotificationsList />
        </Grid>
      </Grid>

      {/* Revenue and Activities Row */}
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <RevenueChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'column' }, 
            gap: 2, 
            height: '100%' 
          }}>
            <RevenueByLocation />
            <ActivitiesList />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Row */}
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} lg={6}>
          <ProductsTable />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'column' }, 
            gap: 2, 
            height: '100%' 
          }}>
            <TotalSalesChart />
            <ContactsList />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
