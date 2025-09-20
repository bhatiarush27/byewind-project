import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import KPIBox from "../components/lib/KPIBox/KPIBox";
import ProjectionsChart from "../components/ProjectionsChart";
import RevenueChart from "../components/RevenueChart";
import NotificationsList from "../components/NotificationsList";
import ActivitiesList from "../components/ActivitiesList";
import RevenueByLocation from "../components/RevenueByLocation";
import ProductsTable from "../components/ProductsTable";
import TotalSalesChart from "../components/TotalSalesChart";
import ContactsList from "../components/ContactsList";
import { KEY_METRICS } from "../constants/dashboardData";

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: "14px",
        }}
      >
        eCommerce
      </Typography>

      <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={2} mb={4}>
        <Grid container spacing={{ xs: 2, sm: '28px' }} xs={12} lg={6}>
          {KEY_METRICS.map((metric) => (
            <Grid item xs={12} lg={6} key={metric.id}>
              <KPIBox
                title={metric.title}
                value={metric.value}
                change={metric.change}
                growthStatus={metric.isPositive ? "positive" : "negative"}
                semantic={metric.semantic}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} lg={8} sx={{ height: "100%" }}>
          <ProjectionsChart />
        </Grid>
      </Box>
    

      {/* Revenue and Activities Row */}
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <RevenueChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "column" },
              gap: 2,
              height: "100%",
            }}
          >
            <RevenueByLocation />
            {/* <ActivitiesList /> */}
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Row */}
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} lg={6}>
          <ProductsTable />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "column" },
              gap: 2,
              height: "100%",
            }}
          >
            <TotalSalesChart />
            {/* <ContactsList /> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
