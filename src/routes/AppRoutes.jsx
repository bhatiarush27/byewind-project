import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ComingSoon from '../pages/ComingSoon';
import Orders from '../pages/Orders';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Dashboard Route */}
      <Route path="/" element={<Navigate to="/default" />} />
      <Route path="/default" element={<Dashboard />} />
      
      {/* Favourites Routes */}
      <Route path="/analytics" element={<ComingSoon pageName="Analytics" />} />
      
      {/* eCommerce Routes */}
      <Route path="/ecommerce" element={<ComingSoon pageName="eCommerce Dashboard" />} />
      <Route path="/ecommerce/products" element={<ComingSoon pageName="eCommerce Products" />} />
      <Route path="/ecommerce/orders" element={<Orders />} />
      <Route path="/ecommerce/customers" element={<ComingSoon pageName="eCommerce Customers" />} />
      <Route path="/ecommerce/analytics" element={<ComingSoon pageName="eCommerce Analytics" />} />
      
      {/* Projects Routes */}
      <Route path="/projects/alpha" element={<ComingSoon pageName="Project Alpha" />} />
      <Route path="/projects/beta" element={<ComingSoon pageName="Project Beta" />} />
      <Route path="/projects/gamma" element={<ComingSoon pageName="Project Gamma" />} />
      <Route path="/projects/delta" element={<ComingSoon pageName="Project Delta" />} />
      
      {/* Online Courses Routes */}
      <Route path="/courses" element={<ComingSoon pageName="Online Courses" />} />
      <Route path="/courses/web-dev" element={<ComingSoon pageName="Web Development Course" />} />
      <Route path="/courses/data-science" element={<ComingSoon pageName="Data Science Course" />} />
      <Route path="/courses/design" element={<ComingSoon pageName="UI/UX Design Course" />} />
      
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
      
      {/* Pages Routes - User Profile */}
      <Route path="/profile" element={<ComingSoon pageName="User Profile" />} />
      <Route path="/profile/personal" element={<ComingSoon pageName="Personal Information" />} />
      <Route path="/profile/settings" element={<ComingSoon pageName="Account Settings" />} />
      <Route path="/profile/privacy" element={<ComingSoon pageName="Privacy & Security" />} />
      
      {/* Pages Routes - Account */}
      <Route path="/account/billing" element={<ComingSoon pageName="Billing" />} />
      <Route path="/account/subscriptions" element={<ComingSoon pageName="Subscriptions" />} />
      <Route path="/account/invoices" element={<ComingSoon pageName="Invoices" />} />
      
      {/* Pages Routes - Corporate */}
      <Route path="/corporate/about" element={<ComingSoon pageName="About Us" />} />
      <Route path="/corporate/team" element={<ComingSoon pageName="Our Team" />} />
      <Route path="/corporate/careers" element={<ComingSoon pageName="Careers" />} />
      
      {/* Pages Routes - Blog */}
      <Route path="/blog/latest-posts" element={<ComingSoon pageName="Latest Posts" />} />
      <Route path="/blog/categories" element={<ComingSoon pageName="Categories" />} />
      <Route path="/blog/tags" element={<ComingSoon pageName="Tags" />} />

      {/* Pages Routes - User Profile */}
      <Route path="/user-profile/personal-info" element={<ComingSoon pageName="Personal Information" />} />
      <Route path="/user-profile/account-settings" element={<ComingSoon pageName="Account Settings" />} />
      <Route path="/user-profile/privacy" element={<ComingSoon pageName="Privacy & Security" />} />
      
      {/* Pages Routes - Social */}
      <Route path="/social" element={<ComingSoon pageName="Social" />} />
      <Route path="/social/feed" element={<ComingSoon pageName="Social Feed" />} />
      <Route path="/social/connections" element={<ComingSoon pageName="Connections" />} />
      <Route path="/social/messages" element={<ComingSoon pageName="Messages" />} />
      
      {/* Legacy Settings Routes */}
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
