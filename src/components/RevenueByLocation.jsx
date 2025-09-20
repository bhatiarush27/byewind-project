import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Public as PublicIcon } from "@mui/icons-material";
import { REVENUE_BY_LOCATION } from "../constants/dashboardData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RevenueByLocation = () => {
  const options = {
    chart: {
      map: "custom/world",
    },
    title: {
      text: "Revenue by Location",
    },
    tooltip: {
      pointFormat: "{point.name}: <b>${point.revenue}</b>",
    },
    series: [
      {
        name: "Revenue",
        joinBy: ["name", "name"],
        data: [
          { name: "New York", revenue: 500000 },
          { name: "San Francisco", revenue: 300000 },
          { name: "Sydney", revenue: 450000 },
          { name: "Switzerland", revenue: 600000 },
        ],
        marker: {
          radius: 10,
          fillOpacity: 0.5,
        },
      },
    ],
    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
    },
  };

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent>
        
          <HighchartsReact highcharts={Highcharts} options={options} />
        

        {/* <List dense>
          {REVENUE_BY_LOCATION.map((location, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemText
                primary={location.location}
                secondary={location.revenue}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'text.primary'
                }}
                secondaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'primary.main',
                  fontWeight: 'bold'
                }}
              />
            </ListItem>
          ))}
        </List> */}
      </CardContent>
    </Card>
  );
};

export default RevenueByLocation;
