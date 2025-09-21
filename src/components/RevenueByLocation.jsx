import React from "react";
import {
  Card,
  CardContent,
} from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_map from "highcharts/modules/map";
import { useTheme } from "../contexts/ThemeContext";

HC_map(Highcharts); // initialize map support

const RevenueByLocation = () => {
  const { theme } = useTheme();
  const [mapData, setMapData] = React.useState(null);

  React.useEffect(() => {
    const fetchMapData = async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/custom/world.topo.json"
      ).then((response) => response.json());
      setMapData(topology);
    };
    fetchMapData();
  }, []);

  const options = {
    chart: {
      map: mapData,
      backgroundColor: "transparent",
    },
    title: {
      text: "Revenue by Location",
      align: "left",
      style: {
        color: theme.palette.text.primary,
      },
    },
    credits: {
      enabled: true,
      href: "https://data.worldbank.org",
      text: "Data source: The World Bank",
    },
    legend: {
      enabled: true,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    colorAxis: {
      min: 60,
    },
    tooltip: {
      valueDecimals: 1,
      valueSuffix: " years",
    },
    series: [
      {
        name: "Revenue",
        mapData: mapData,
        joinBy: ["iso-a3", "code"],
        data: [
          ["USA", 78.5],
          ["IND", 69.7],
          ["CHN", 76.9],
          // add more countries as needed
        ],
      },
    ],
  };

  return (
    <Card sx={{ height: "100%", borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <CardContent>
        {mapData && (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"} // <-- important
            options={options}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default RevenueByLocation;
