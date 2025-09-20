import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { TOP_SELLING_PRODUCTS } from "../constants/dashboardData";

const ProductsTable = () => {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        boxShadow: "0",
        backgroundColor: "var(--color-background-graph-light)",
      }}
    >
      <CardContent sx={{ backgroundColor: "inherit" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Top Selling Products
        </Typography>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            boxShadow: "none",
            overflowX: "auto",
            backgroundColor: "inherit",
          }}
        >
          <Table size="small" sx={{ minWidth: 400, backgroundColor: "inherit" }}>
            <TableHead>
              <TableRow sx={{ borderBottom: "1px solid var(--color-border)" }}>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "inherit" }}>
              {TOP_SELLING_PRODUCTS.map((product, index) => (
                <TableRow key={index} hover>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      maxWidth: { xs: "150px", sm: "none" },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: { xs: "nowrap", sm: "normal" },
                      borderBottom: "none",
                    }}
                  >
                    {product.name}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      borderBottom: "none",
                    }}
                  >
                    {product.price}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      borderBottom: "none",
                    }}
                  >
                    {product.quantity}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      fontWeight: "bold",
                      borderBottom: "none",
                    }}
                  >
                    {product.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ProductsTable;
