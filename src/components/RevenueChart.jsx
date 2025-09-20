import React from "react";
import { Card, CardContent } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { REVENUE_TREND_DATA } from "../constants/dashboardData";

const RevenueChart = () => {
  const options = {
    chart: {
      type: "spline", // Change line to spline for curved lines
      backgroundColor: "transparent",
    },
    title: {
      text: "Revenue |",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
      x: 80,
      y: -10,
      floating: true,
    },
    xAxis: {
      categories: REVENUE_TREND_DATA.map((item) => item.month),
    },
    yAxis: {
      min: 0,
      max: 40,
      tickInterval: 10,
      labels: {
        format: "{value}M",
      },
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "Current Week",
        data: REVENUE_TREND_DATA.map((item) => item.current),
        color: "#4A90E2",
        lineWidth: 3,
      },
      {
        name: "Previous Week",
        data: REVENUE_TREND_DATA.map((item) => item.previous),
        color: "#94A3B8",
        lineWidth: 2,
        zoneAxis: "x",
        zones: [
          {
            value: Math.floor(REVENUE_TREND_DATA.length / 2), // Half of the data points
            dashStyle: "Solid",
          },
          {
            dashStyle: "Dot", // Dotted line for the second half
          },
        ],
      },
    ],
    plotOptions: {
      spline: {
        // Change line to spline for curved lines
        marker: {
          enabled: true,
          radius: 4,
        },
      },
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        boxShadow: "0",
        backgroundColor: "var(--color-background-graph-light)",
      }}
    >
      <CardContent>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
