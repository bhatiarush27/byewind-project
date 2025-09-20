import * as React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import styles from "./KPIBox.module.css";

const KPIBox = ({ title, value, change, growthStatus, semantic }) => {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "16px",
        boxShadow: "0",
        minWidth: "fit-content",
      }}
    >
      <CardContent
        className={styles[semantic]}
        sx={{
          gap: "8px",
          padding: "24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={"12px"}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              color: "var(--color-text-primary)",
              lineHeight: "36px",
            }}
          >
            {value}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "12px",
                color: "var(--color-text-primary)",
              }}
            >
              {change}
            </Typography>
            {growthStatus === "positive" ? (
              <TrendingUp
                sx={{ color: "--color-text-primary", fontSize: 16 }}
              />
            ) : (
              <TrendingDown
                sx={{ color: "--color-text-primary", fontSize: 16 }}
              />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KPIBox;
