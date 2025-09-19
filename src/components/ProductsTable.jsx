import React from 'react';
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
  Paper
} from '@mui/material';
import { TOP_SELLING_PRODUCTS } from '../constants/dashboardData';

const ProductsTable = () => {
  return (
    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Top Selling Products
        </Typography>
        <TableContainer 
          component={Paper} 
          elevation={0} 
          sx={{ 
            boxShadow: 'none',
            overflowX: 'auto'
          }}
        >
          <Table size="small" sx={{ minWidth: 400 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  Name
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  Price
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  Quantity
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TOP_SELLING_PRODUCTS.map((product, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    maxWidth: { xs: '150px', sm: 'none' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: { xs: 'nowrap', sm: 'normal' }
                  }}>
                    {product.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    {product.price}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    {product.quantity}
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }, 
                    fontWeight: 'bold' 
                  }}>
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
