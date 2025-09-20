import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TOTAL_SALES_DATA } from '../constants/dashboardData';

const TotalSalesChart = () => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Total Sales',
      style: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Sales',
      data: TOTAL_SALES_DATA.map(item => ({
        name: item.name,
        y: item.value,
        color: item.name === 'Direct' ? '#4A90E2' : 
               item.name === 'Affiliate' ? '#10B981' :
               item.name === 'Sponsored' ? '#F59E0B' : '#EF4444'
      }))
    }],
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'middle',
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
