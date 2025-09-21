import { Card, CardContent } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useTheme } from "../contexts/ThemeContext";
import { REVENUE_TREND_DATA } from "../constants/dashboardData";

const RevenueChart = () => {
  const { theme } = useTheme();
  
  const options = {
    chart: {
      type: "spline", // Change line to spline for curved lines
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      height: "350px",
    },
    title: {
      text: "Revenue |",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: theme.palette.text.primary,
      },
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
      itemStyle: {
        color: theme.palette.text.primary,
      },
      x: 80,
      y: -10,
      floating: true,
    },
    xAxis: {
      categories: REVENUE_TREND_DATA.map((item) => item.month),
      labels: {
        style: {
          color: theme.palette.text.primary,
        },
      },
    },
    yAxis: {
      min: 0,
      max: 40,
      tickInterval: 10,
      labels: {
        format: "{value}M",
        style: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "Current Week",
        data: REVENUE_TREND_DATA.map((item) => item.current),
        color: theme.palette.primary.main,
        lineWidth: 3,
      },
      {
        name: "Previous Week",
        data: REVENUE_TREND_DATA.map((item) => item.previous),
        color: theme.palette.text.secondary,
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
        width: "100%",
        borderRadius: 2,
        boxShadow: "0",
        backgroundColor: "var(--color-background-graph-light)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
