import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PROJECTIONS_DATA } from '../constants/dashboardData';

const ProjectionsChart = () => {
  const options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 300
    },
    title: {
      text: 'Projections vs Actuals',
      style: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: PROJECTIONS_DATA.map(item => item.month),
      title: {
        text: 'Month'
      }
    },
    yAxis: {
      title: {
        text: 'Value (M)'
      },
      min: 0,
      max: 30
    },
    series: [
      {
        name: 'Actual',
        data: PROJECTIONS_DATA.map(item => item.actual),
        color: '#4A90E2'
      },
      {
        name: 'Projection',
        data: PROJECTIONS_DATA.map(item => item.projection),
        color: '#E2E8F0'
      }
    ],
    plotOptions: {
      column: {
        borderRadius: 4,
        groupPadding: 0.1,
        pointPadding: 0.1
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
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};

export default ProjectionsChart;
