// Dashboard constants and mock data
export const KEY_METRICS = [
  {
    id: 'customers',
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    isPositive: true,
    icon: '👥'
  },
  {
    id: 'orders',
    title: 'Orders',
    value: '1,219',
    change: '-0.03%',
    isPositive: false,
    icon: '📦'
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: '$695',
    change: '+15.03%',
    isPositive: true,
    icon: '💰'
  },
  {
    id: 'growth',
    title: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    isPositive: true,
    icon: '📈'
  }
];

export const PROJECTIONS_DATA = [
  { month: 'Jan', actual: 15, projection: 18 },
  { month: 'Feb', actual: 22, projection: 20 },
  { month: 'Mar', actual: 18, projection: 22 },
  { month: 'Apr', actual: 25, projection: 24 },
  { month: 'May', actual: 28, projection: 26 },
  { month: 'Jun', actual: 30, projection: 28 }
];

export const REVENUE_TREND_DATA = [
  { month: 'Jan', current: 45, previous: 50 },
  { month: 'Feb', current: 52, previous: 48 },
  { month: 'Mar', current: 48, previous: 55 },
  { month: 'Apr', current: 58, previous: 52 },
  { month: 'May', current: 62, previous: 58 },
  { month: 'Jun', current: 58, previous: 68 }
];

export const REVENUE_BY_LOCATION = [
  { location: 'New York', revenue: '72K' },
  { location: 'San Francisco', revenue: '39K' },
  { location: 'Sydney', revenue: '25K' },
  { location: 'Singapore', revenue: '61K' }
];

export const NOTIFICATIONS = [
  { id: 1, message: 'You have a bug that needs...', time: 'Just now' },
  { id: 2, message: 'New user registered', time: '59 minutes ago' },
  { id: 3, message: 'You have a bug that needs...', time: '12 hours ago' },
  { id: 4, message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
];

export const ACTIVITIES = [
  { id: 1, message: 'You have a bug that needs...', time: 'Just now' },
  { id: 2, message: 'Released a new version', time: '59 minutes ago' },
  { id: 3, message: 'Submitted a bug', time: '12 hours ago' },
  { id: 4, message: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
  { id: 5, message: 'Deleted a page in Project X', time: 'Feb 2, 2023' }
];

export const TOP_SELLING_PRODUCTS = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
];

export const TOTAL_SALES_DATA = [
  { name: 'Direct', value: 300.56, percentage: 38.6 },
  { name: 'Affiliate', value: 135.18, percentage: 17.4 },
  { name: 'Sponsored', value: 154.02, percentage: 19.8 },
  { name: 'E-mail', value: 48.96, percentage: 6.3 }
];

export const CONTACTS = [
  { name: 'Natali Craig', avatar: 'NC' },
  { name: 'Drew Cano', avatar: 'DC' },
  { name: 'Orlando Diggs', avatar: 'OD' },
  { name: 'Andi Lane', avatar: 'AL' },
  { name: 'Kate Morrison', avatar: 'KM' },
  { name: 'Koray Okumus', avatar: 'KO' }
];

export const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'products', label: 'Products', icon: '📦' },
  { id: 'orders', label: 'Orders', icon: '🛒' },
  { id: 'customers', label: 'Customers', icon: '👥' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];
