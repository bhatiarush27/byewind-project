// Navigation constants with hierarchy and sub-links
export const NAVIGATION_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'PieChart',
    path: '/',
    hasSubItems: false
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'TrendingUp',
    path: '/analytics',
    hasSubItems: true,
    subItems: [
      {
        id: 'overview',
        label: 'Overview',
        path: '/analytics/overview',
        icon: 'Visibility'
      },
      {
        id: 'reports',
        label: 'Reports',
        path: '/analytics/reports',
        icon: 'Assessment'
      },
      {
        id: 'insights',
        label: 'Insights',
        path: '/analytics/insights',
        icon: 'Lightbulb'
      }
    ]
  },
  {
    id: 'products',
    label: 'Products',
    icon: 'Inventory',
    path: '/products',
    hasSubItems: true,
    subItems: [
      {
        id: 'all-products',
        label: 'All Products',
        path: '/products/all',
        icon: 'List'
      },
      {
        id: 'categories',
        label: 'Categories',
        path: '/products/categories',
        icon: 'Category'
      },
      {
        id: 'inventory',
        label: 'Inventory',
        path: '/products/inventory',
        icon: 'Warehouse'
      },
      {
        id: 'add-product',
        label: 'Add Product',
        path: '/products/add',
        icon: 'Add'
      }
    ]
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: 'ShoppingCart',
    path: '/orders',
    hasSubItems: true,
    subItems: [
      {
        id: 'all-orders',
        label: 'All Orders',
        path: '/orders/all',
        icon: 'List'
      },
      {
        id: 'pending',
        label: 'Pending',
        path: '/orders/pending',
        icon: 'Schedule'
      },
      {
        id: 'completed',
        label: 'Completed',
        path: '/orders/completed',
        icon: 'CheckCircle'
      },
      {
        id: 'cancelled',
        label: 'Cancelled',
        path: '/orders/cancelled',
        icon: 'Cancel'
      }
    ]
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: 'People',
    path: '/customers',
    hasSubItems: true,
    subItems: [
      {
        id: 'all-customers',
        label: 'All Customers',
        path: '/customers/all',
        icon: 'List'
      },
      {
        id: 'new-customers',
        label: 'New Customers',
        path: '/customers/new',
        icon: 'PersonAdd'
      },
      {
        id: 'vip-customers',
        label: 'VIP Customers',
        path: '/customers/vip',
        icon: 'Star'
      }
    ]
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: 'Campaign',
    path: '/marketing',
    hasSubItems: true,
    subItems: [
      {
        id: 'campaigns',
        label: 'Campaigns',
        path: '/marketing/campaigns',
        icon: 'AdsClick'
      },
      {
        id: 'email-marketing',
        label: 'Email Marketing',
        path: '/marketing/email',
        icon: 'Email'
      },
      {
        id: 'social-media',
        label: 'Social Media',
        path: '/marketing/social',
        icon: 'Share'
      }
    ]
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: 'AttachMoney',
    path: '/finance',
    hasSubItems: true,
    subItems: [
      {
        id: 'transactions',
        label: 'Transactions',
        path: '/finance/transactions',
        icon: 'SwapHoriz'
      },
      {
        id: 'invoices',
        label: 'Invoices',
        path: '/finance/invoices',
        icon: 'Receipt'
      },
      {
        id: 'taxes',
        label: 'Taxes',
        path: '/finance/taxes',
        icon: 'ReceiptLong'
      }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'Settings',
    path: '/settings',
    hasSubItems: true,
    subItems: [
      {
        id: 'general',
        label: 'General',
        path: '/settings/general',
        icon: 'Tune'
      },
      {
        id: 'security',
        label: 'Security',
        path: '/settings/security',
        icon: 'Security'
      },
      {
        id: 'notifications',
        label: 'Notifications',
        path: '/settings/notifications',
        icon: 'Notifications'
      },
      {
        id: 'integrations',
        label: 'Integrations',
        path: '/settings/integrations',
        icon: 'Extension'
      }
    ]
  }
];

// Helper function to get all routes for router setup
export const getAllRoutes = () => {
  const routes = [];
  
  NAVIGATION_ITEMS.forEach(item => {
    routes.push(item.path);
    if (item.hasSubItems && item.subItems) {
      item.subItems.forEach(subItem => {
        routes.push(subItem.path);
      });
    }
  });
  
  return routes;
};

// Helper function to find navigation item by path
export const findNavigationItemByPath = (path) => {
  for (const item of NAVIGATION_ITEMS) {
    if (item.path === path) {
      return item;
    }
    if (item.hasSubItems && item.subItems) {
      for (const subItem of item.subItems) {
        if (subItem.path === path) {
          return { ...item, activeSubItem: subItem };
        }
      }
    }
  }
  return null;
};
