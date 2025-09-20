// Dashboard constants and mock data
export const KEY_METRICS = [
  {
    id: "customers",
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    isPositive: true,
    semantic: "information",
  },
  {
    id: "orders",
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    isPositive: false,
    semantic: "neutral",
  },
  {
    id: "revenue",
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    isPositive: true,
    semantic: "neutral",
  },
  {
    id: "growth",
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    isPositive: true,
    semantic: "tertiary",
  },
];

export const PROJECTIONS_DATA = [
  { month: "Jan", actual: 15, projection: 18 },
  { month: "Feb", actual: 22, projection: 20 },
  { month: "Mar", actual: 18, projection: 22 },
  { month: "Apr", actual: 25, projection: 24 },
  { month: "May", actual: 28, projection: 26 },
  { month: "Jun", actual: 30, projection: 28 },
];

export const REVENUE_TREND_DATA = [
  { month: "Jan", current: 12, previous: 18 },
  { month: "Feb", current: 22, previous: 8 },
  { month: "Mar", current: 24, previous: 10 },
  { month: "Apr", current: 16, previous: 20 },
  { month: "May", current: 18, previous: 22 },
  { month: "Jun", current: 22, previous: 18 },
];

export const REVENUE_BY_LOCATION = [
  { location: "New York", revenue: "72K" },
  { location: "San Francisco", revenue: "39K" },
  { location: "Sydney", revenue: "25K" },
  { location: "Singapore", revenue: "61K" },
];

export const NOTIFICATIONS = [
  { id: 1, message: "You have a bug that needs...", time: "Just now" },
  { id: 2, message: "New user registered", time: "59 minutes ago" },
  { id: 3, message: "You have a bug that needs...", time: "12 hours ago" },
  { id: 4, message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

export const ACTIVITIES = [
  { id: 1, message: "You have a bug that needs...", time: "Just now" },
  { id: 2, message: "Released a new version", time: "59 minutes ago" },
  { id: 3, message: "Submitted a bug", time: "12 hours ago" },
  { id: 4, message: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { id: 5, message: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

export const TOP_SELLING_PRODUCTS = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export const TOTAL_SALES_DATA = [
  { name: "Direct", value: 300.56, percentage: 38.6 },
  { name: "Affiliate", value: 135.18, percentage: 17.4 },
  { name: "Sponsored", value: 154.02, percentage: 19.8 },
  { name: "E-mail", value: 48.96, percentage: 6.3 },
];

export const CONTACTS = [
  { name: "Natali Craig", avatar: "NC" },
  { name: "Drew Cano", avatar: "DC" },
  { name: "Orlando Diggs", avatar: "OD" },
  { name: "Andi Lane", avatar: "AL" },
  { name: "Kate Morrison", avatar: "KM" },
  { name: "Koray Okumus", avatar: "KO" },
];

export const SIDEBAR_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "analytics", label: "Analytics", icon: "📈" },
  { id: "products", label: "Products", icon: "📦" },
  { id: "orders", label: "Orders", icon: "🛒" },
  { id: "customers", label: "Customers", icon: "👥" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export const DUMMY_PROJECTS = [
  "Landing Page",
  "CRM Admin pages",
  "Client Project",
  "Booking System",
  "Analytics Dashboard",
  "User Portal",
  "Freelance Platform",
  "Online Course",
  "Tutoring Platform",
  "Language Learning",
  "Music Streaming",
  "Photo Gallery",
  "Video Editor",
];

export const DUMMY_STATUSES = [
  "In Progress",
  "Complete",
  "Pending",
  "Approved",
  "Rejected",
  "Cancelled",
  "On Hold",
];

// Generate 100 orders with realistic data
const generateOrders = () => {
  const customers = [
    "Natali Craig",
    "Kate Morrison",
    "Drew Cano",
    "Orlando Diggs",
    "Andi Lane",
    "Koray Okumus",
    "Sarah Johnson",
    "Michael Chen",
    "Emily Rodriguez",
    "David Kim",
    "Lisa Thompson",
    "James Wilson",
    "Maria Garcia",
    "Robert Brown",
    "Jennifer Davis",
    "Christopher Lee",
    "Amanda White",
    "Daniel Martinez",
    "Jessica Taylor",
    "Matthew Anderson",
    "Ashley Thomas",
    "Joshua Jackson",
    "Stephanie Harris",
    "Andrew Clark",
    "Nicole Lewis",
    "Kevin Walker",
    "Samantha Hall",
    "Ryan Allen",
    "Brittany Young",
    "Tyler King",
    "Megan Wright",
    "Brandon Lopez",
    "Rachel Hill",
    "Justin Scott",
    "Lauren Green",
    "Zachary Adams",
    "Kayla Baker",
    "Nathan Gonzalez",
    "Hannah Nelson",
    "Caleb Carter",
    "Olivia Mitchell",
    "Ethan Perez",
    "Grace Roberts",
    "Noah Turner",
    "Chloe Phillips",
    "Liam Campbell",
    "Ava Parker",
    "Lucas Evans",
    "Sophia Edwards",
    "Mason Collins",
  ];

  const projects = DUMMY_PROJECTS;

  const statuses = DUMMY_STATUSES;

  const addresses = [
    "123 Main St, New York, NY",
    "456 Oak Ave, Los Angeles, CA",
    "789 Pine Rd, Chicago, IL",
    "321 Elm St, Houston, TX",
    "654 Maple Dr, Phoenix, AZ",
    "987 Cedar Ln, Philadelphia, PA",
    "147 Birch Way, San Antonio, TX",
    "258 Spruce St, San Diego, CA",
    "369 Willow Ave, Dallas, TX",
    "741 Poplar Rd, San Jose, CA",
    "852 Ash St, Austin, TX",
    "963 Hickory Ln, Jacksonville, FL",
    "159 Cherry Dr, Fort Worth, TX",
    "357 Walnut Ave, Columbus, OH",
    "468 Chestnut St, Charlotte, NC",
    "579 Sycamore Rd, Seattle, WA",
    "680 Dogwood Ln, Denver, CO",
    "791 Magnolia St, Washington, DC",
    "802 Redwood Ave, Boston, MA",
    "913 Cypress Dr, Nashville, TN",
    "024 Hemlock Rd, Baltimore, MD",
    "135 Fir St, Oklahoma City, OK",
    "246 Juniper Ave, Portland, OR",
    "357 Pinecone Dr, Las Vegas, NV",
    "468 Acorn Rd, Milwaukee, WI",
    "579 Seedling St, Albuquerque, NM",
    "680 Sprout Ave, Tucson, AZ",
    "791 Sapling Dr, Fresno, CA",
    "802 Branch Rd, Sacramento, CA",
    "913 Trunk St, Mesa, AZ",
  ];

  const timeAgoOptions = [
    "Just now",
    "A minute ago",
    "2 minutes ago",
    "5 minutes ago",
    "10 minutes ago",
    "30 minutes ago",
    "1 hour ago",
    "2 hours ago",
    "3 hours ago",
    "6 hours ago",
    "12 hours ago",
    "Yesterday",
    "2 days ago",
    "3 days ago",
    "1 week ago",
    "2 weeks ago",
    "1 month ago",
    "2 months ago",
    "3 months ago",
    "6 months ago",
  ];

  const orders = [];

  for (let i = 1; i <= 100; i++) {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const project = projects[Math.floor(Math.random() * projects.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const timeAgo =
      timeAgoOptions[Math.floor(Math.random() * timeAgoOptions.length)];

    // Generate order ID (6 digits)
    const orderId = String(100000 + i);

    // Generate total amount ($50 - $2000)
    const total = Math.floor(Math.random() * 1950) + 50;

    orders.push({
      id: i,
      orderId,
      customer,
      project,
      address,
      date: timeAgo,
      total: `$${total.toLocaleString()}`,
      status,
    });
  }

  return orders;
};

export const ORDERS = generateOrders();
