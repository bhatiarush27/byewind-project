import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTheme } from '../contexts/ThemeContext';
import { TOTAL_SALES_DATA } from '../constants/dashboardData';

const TotalSalesChart = () => {
  const { theme } = useTheme();
  
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Total Sales',
      style: {
        color: theme.palette.text.primary
      }
    },
    plotOptions: {
      pie: {
        innerSize: '70%',
        borderRadius: '16px',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Sales',
      data: TOTAL_SALES_DATA.map(item => ({
        name: `${item.name} (${item.value})`,
        y: item.value,
        color: item.name === 'Direct' ? theme.palette.primary.main : 
               item.name === 'Affiliate' ? theme.palette.secondary.main :
               item.name === 'Sponsored' ? theme.palette.status.warning : theme.palette.status.error
      }))
    }],
    legend: {
      enabled: true,
      align: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
        color: theme.palette.text.primary
      },
      layout: 'vertical'
    },
    credits: {
      enabled: false
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        width: '100%',
        borderRadius: 2, 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent 
        sx={{ 
          // padding: { xs: "16px", sm: "20px", md: "24px" }, 
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalSalesChart;
