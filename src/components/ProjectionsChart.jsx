import { Card, CardContent, Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useTheme } from "../contexts/ThemeContext";

const ProjectionsChart = () => {
  const { theme } = useTheme();
  
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: "350px",
      // maxHeight: "100%",
      // spacing: [20, 20, 20, 20],
    },
    title: {
      text: "Projections vs Actuals",
      style: {
        color: theme.palette.text.primary,
      },
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          color: theme.palette.text.primary,
        },
      },
    },
    yAxis: [
      {
        min: 0,
        title: {
          text: "",
        },
        labels: {
          style: {
            color: theme.palette.text.primary,
          },
        },
        tickInterval: 10,
        max: 30,
      },
      {
        title: {
          text: "",
        },
        opposite: true,
      },
    ],
    legend: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0,
      },
    },
    credits: {
      enabled: false
  },
    series: [
      {
        name: "Actual",
        color: theme.palette.primary.light,
        data: [22, 25, 20, 26, 26, 30],
        pointPadding: 0.2,
        pointPlacement: 0.2,
        borderRadius: 10,
      },
      {
        name: "Projection",
        color: theme.palette.primary.main,
        data: [18, 20, 18, 24, 20, 28],
        pointPadding: 0.2,
        pointPlacement: 0.2,
      },
    ],
  };

  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: '12px',
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

export default ProjectionsChart;
