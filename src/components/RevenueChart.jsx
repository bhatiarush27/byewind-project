import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { REVENUE_TREND_DATA } from '../constants/dashboardData';

const RevenueChart = () => {
  const options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: 300
    },
    title: {
      text: 'Revenue',
      style: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: REVENUE_TREND_DATA.map(item => item.month),
      title: {
        text: 'Month'
      }
    },
    yAxis: {
      title: {
        text: 'Revenue (K)'
      }
    },
    series: [
      {
        name: 'Current Week',
        data: REVENUE_TREND_DATA.map(item => item.current),
        color: '#4A90E2',
        lineWidth: 3
      },
      {
        name: 'Previous Week',
        data: REVENUE_TREND_DATA.map(item => item.previous),
        color: '#94A3B8',
        lineWidth: 2,
        dashStyle: 'dash'
      }
    ],
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 4
        }
      }
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top'
    },
    credits: {
      enabled: false
    }
  };

  return (
    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Box mb={2}>
          <Typography variant="body2" color="text.secondary">
            Current Week $58,211
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Previous Week $68,768
          </Typography>
        </Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
