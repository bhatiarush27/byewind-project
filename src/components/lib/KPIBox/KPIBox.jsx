import { Card, CardContent, Typography, Box } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import PropTypes from "prop-types";
import styles from "./KPIBox.module.css";

const KPIBox = ({ title, value, change, growthStatus, semantic }) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "16px",
        boxShadow: "0",
        minHeight: { xs: "120px", sm: "140px", md: "160px", lg: "180px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        className={styles[semantic]}
        sx={{
          gap: "8px",
          padding: { xs: "16px", sm: "20px", md: "24px" },
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
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
            color: "#000000",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={{ xs: "8px", sm: "10px", md: "12px" }}
          flexWrap="wrap"
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              color: "#000000",
              lineHeight: { xs: "24px", sm: "28px", md: "36px" },
              flex: "1 1 auto",
              minWidth: 0,
            }}
          >
            {value}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5} flexShrink={0}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                color: "#000000",
              }}
            >
              {change}
            </Typography>
            {growthStatus === "positive" ? (
              <TrendingUp
                sx={{ 
                  color: "#000000", 
                  fontSize: { xs: 14, sm: 15, md: 16 } 
                }}
              />
            ) : (
              <TrendingDown
                sx={{ 
                  color: "#000000", 
                  fontSize: { xs: 14, sm: 15, md: 16 } 
                }}
              />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

KPIBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  growthStatus: PropTypes.oneOf(['positive', 'negative']).isRequired,
  semantic: PropTypes.string.isRequired,
};

export default KPIBox;
