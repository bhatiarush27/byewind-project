import { Grid, Container, Typography, Box } from "@mui/material";
import KPIBox from "../components/lib/KPIBox/KPIBox";
import ProjectionsChart from "../components/ProjectionsChart";
import RevenueChart from "../components/RevenueChart";
import RevenueByLocation from "../components/RevenueByLocation";
import ProductsTable from "../components/ProductsTable";
import TotalSalesChart from "../components/TotalSalesChart";
import { KEY_METRICS } from "../constants/dashboardData";

const Dashboard = () => {
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
        eCommerce
      </Typography>

      {/* Top Row - KPI Boxes and Projections Chart */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {/* KPI Boxes Section - Flexible width */}
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={6} 
            xl={5}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(2, 1fr)',
                  xl: 'repeat(2, 1fr)',
                },
                gap: { xs: 1.5, sm: 2, md: 3 },
                height: 'fit-content',
                alignContent: 'start',
              }}
            >
              {KEY_METRICS.map((metric) => (
                <Box
                  key={metric.id}
                  sx={{
                    display: 'flex',
                    minHeight: { xs: '120px', sm: '140px', md: '160px', lg: '180px' },
                    width: '100%',
                  }}
                >
                  <KPIBox
                    title={metric.title}
                    value={metric.value}
                    change={metric.change}
                    growthStatus={metric.isPositive ? "positive" : "negative"}
                    semantic={metric.semantic}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Projections Chart Section - Match KPI height */}
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={6} 
            xl={7}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box 
              sx={{ 
                height: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                },
                width: '100%',
                maxHeight: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                }
              }}
            >
              <ProjectionsChart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    

      {/* Revenue and Activities Row */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={8} 
            xl={8}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box 
              sx={{ 
                height: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                },
                width: '100%',
                maxHeight: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                }
              }}
            >
              <RevenueChart />
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={4} 
            xl={4}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 },
                height: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                },
                width: "100%",
                maxHeight: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                }
              }}
            >
              <Box sx={{ flex: 1, minHeight: 0 }}>
                <RevenueByLocation />
              </Box>
              {/* <ActivitiesList /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Row */}
      <Box>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={6} 
            xl={6}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box 
              sx={{ 
                height: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                },
                width: '100%',
                maxHeight: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                }
              }}
            >
              <ProductsTable />
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={6} 
            xl={6}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 },
                height: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                },
                width: "100%",
                maxHeight: { 
                  xs: '300px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '400px',
                  xl: '400px'
                }
              }}
            >
              <Box sx={{ flex: 1, minHeight: 0 }}>
                <TotalSalesChart />
              </Box>
              {/* <ContactsList /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
