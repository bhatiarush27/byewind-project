import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ComingSoon from '../pages/ComingSoon';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Dashboard Route */}
      <Route path="/" element={<Dashboard />} />
      
      {/* Analytics Routes */}
      <Route path="/analytics" element={<ComingSoon pageName="Analytics" />} />
      <Route path="/analytics/overview" element={<ComingSoon pageName="Analytics Overview" />} />
      <Route path="/analytics/reports" element={<ComingSoon pageName="Analytics Reports" />} />
      <Route path="/analytics/insights" element={<ComingSoon pageName="Analytics Insights" />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ComingSoon pageName="Products" />} />
      <Route path="/products/all" element={<ComingSoon pageName="All Products" />} />
      <Route path="/products/categories" element={<ComingSoon pageName="Product Categories" />} />
      <Route path="/products/inventory" element={<ComingSoon pageName="Inventory Management" />} />
      <Route path="/products/add" element={<ComingSoon pageName="Add Product" />} />
      
      {/* Orders Routes */}
      <Route path="/orders" element={<ComingSoon pageName="Orders" />} />
      <Route path="/orders/all" element={<ComingSoon pageName="All Orders" />} />
      <Route path="/orders/pending" element={<ComingSoon pageName="Pending Orders" />} />
      <Route path="/orders/completed" element={<ComingSoon pageName="Completed Orders" />} />
      <Route path="/orders/cancelled" element={<ComingSoon pageName="Cancelled Orders" />} />
      
      {/* Customers Routes */}
      <Route path="/customers" element={<ComingSoon pageName="Customers" />} />
      <Route path="/customers/all" element={<ComingSoon pageName="All Customers" />} />
      <Route path="/customers/new" element={<ComingSoon pageName="New Customers" />} />
      <Route path="/customers/vip" element={<ComingSoon pageName="VIP Customers" />} />
      
      {/* Marketing Routes */}
      <Route path="/marketing" element={<ComingSoon pageName="Marketing" />} />
      <Route path="/marketing/campaigns" element={<ComingSoon pageName="Marketing Campaigns" />} />
      <Route path="/marketing/email" element={<ComingSoon pageName="Email Marketing" />} />
      <Route path="/marketing/social" element={<ComingSoon pageName="Social Media" />} />
      
      {/* Finance Routes */}
      <Route path="/finance" element={<ComingSoon pageName="Finance" />} />
      <Route path="/finance/transactions" element={<ComingSoon pageName="Transactions" />} />
      <Route path="/finance/invoices" element={<ComingSoon pageName="Invoices" />} />
      <Route path="/finance/taxes" element={<ComingSoon pageName="Taxes" />} />
      
      {/* Settings Routes */}
      <Route path="/settings" element={<ComingSoon pageName="Settings" />} />
      <Route path="/settings/general" element={<ComingSoon pageName="General Settings" />} />
      <Route path="/settings/security" element={<ComingSoon pageName="Security Settings" />} />
      <Route path="/settings/notifications" element={<ComingSoon pageName="Notification Settings" />} />
      <Route path="/settings/integrations" element={<ComingSoon pageName="Integrations" />} />
      
      {/* 404 Route - Must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
