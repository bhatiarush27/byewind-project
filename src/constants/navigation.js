import { getAllRoutesItems } from "../utils/index.js";


// Quick Access sections (Favourites and Recents) - no icons, bullet points only
export const FAVOURITES_ITEMS = [
  {
    id: "default",
    label: "Default",
    path: "/default",
  },
  {
    id: "projects.alpha",
    label: "Project Alpha",
    path: "/projects/alpha",
  },
];

export const RECENTS_ITEMS = [
  {
    id: "user-profile.personal-info",
    label: "Personal Information",
    path: "/user-profile/personal-info",
  },
  {
    id: "user-profile.account-settings",
    label: "Account Settings",
    path: "/user-profile/account-settings",
  },
];

// Main navigation sections with icons
export const NAVIGATION_SECTIONS = [
  {
    id: "dashboards",
    title: "Dashboards",
    items: [
      {
        id: "default",
        label: "Default",
        icon: "Dashboard",
        path: "/default",
        hasSubItems: false,
      },
      {
        id: "ecommerce",
        label: "eCommerce",
        icon: "ShoppingCart",
        path: "/ecommerce",
        hasSubItems: true,
        subItems: [
          {
            id: "products",
            label: "Products",
            path: "/ecommerce/products",
            icon: "Inventory",
          },
          {
            id: "orders",
            label: "Orders",
            path: "/ecommerce/orders",
            icon: "Receipt",
          },
          {
            id: "customers",
            label: "Customers",
            path: "/ecommerce/customers",
            icon: "People",
          },
          {
            id: "analytics",
            label: "Analytics",
            path: "/ecommerce/analytics",
            icon: "Analytics",
          },
        ],
      },
      {
        id: "projects",
        label: "Projects",
        icon: "Folder",
        path: "/projects",
        hasSubItems: true,
        subItems: [
          {
            id: "alpha",
            label: "Project Alpha",
            path: "/projects/alpha",
            icon: "Circle",
          },
          {
            id: "beta",
            label: "Project Beta",
            path: "/projects/beta",
            icon: "Circle",
          },
          {
            id: "gamma",
            label: "Project Gamma",
            path: "/projects/gamma",
            icon: "Circle",
          },
        ],
      },
      {
        id: "online-courses",
        label: "Online Courses",
        icon: "School",
        path: "/online-courses",
        hasSubItems: true,
        subItems: [
          {
            id: "web-dev",
            label: "Web Development",
            path: "/courses/web-dev",
            icon: "Code",
          },
          {
            id: "data-science",
            label: "Data Science",
            path: "/courses/data-science",
            icon: "DataObject",
          },
          {
            id: "design",
            label: "UI/UX Design",
            path: "/courses/design",
            icon: "Palette",
          },
        ],
      },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    items: [
      {
        id: "user-profile",
        label: "User Profile",
        icon: "Person",
        path: "/user-profile",
        hasSubItems: true,
        subItems: [
          {
            id: "personal-info",
            label: "Personal Information",
            path: "/user-profile/personal-info",
            icon: "Info",
          },
          {
            id: "account-settings",
            label: "Account Settings",
            path: "/user-profile/account-settings",
            icon: "Settings",
          },
          {
            id: "privacy",
            label: "Privacy & Security",
            path: "/user-profile/privacy",
            icon: "Security",
          },
        ],
      },
      {
        id: "account",
        label: "Account",
        icon: "AccountCircle",
        path: "/account",
        hasSubItems: true,
        subItems: [
          {
            id: "billing",
            label: "Billing",
            path: "/account/billing",
            icon: "Payment",
          },
          {
            id: "subscriptions",
            label: "Subscriptions",
            path: "/account/subscriptions",
            icon: "Subscriptions",
          },
          {
            id: "invoices",
            label: "Invoices",
            path: "/account/invoices",
            icon: "Receipt",
          },
        ],
      },
      {
        id: "corporate",
        label: "Corporate",
        icon: "Business",
        path: "/corporate",
        hasSubItems: true,
        subItems: [
          {
            id: "about",
            label: "About Us",
            path: "/corporate/about",
            icon: "Info",
          },
          {
            id: "team",
            label: "Our Team",
            path: "/corporate/team",
            icon: "Groups",
          },
          {
            id: "careers",
            label: "Careers",
            path: "/corporate/careers",
            icon: "Work",
          },
        ],
      },
      {
        id: "blog",
        label: "Blog",
        icon: "Article",
        path: "/blog",
        hasSubItems: true,
        subItems: [
          {
            id: "latest-posts",
            label: "Latest Posts",
            path: "/blog/latest-posts",
            icon: "Newspaper",
          },
          {
            id: "categories",
            label: "Categories",
            path: "/blog/categories",
            icon: "Category",
          },
          {
            id: "tags",
            label: "Tags",
            path: "/blog/tags",
            icon: "LocalOffer",
          },
        ],
      },
      {
        id: "social",
        label: "Social",
        icon: "Share",
        path: "/social",
        hasSubItems: true,
        subItems: [
          {
            id: "feed",
            label: "Social Feed",
            path: "/social/feed",
            icon: "DynamicFeed",
          },
          {
            id: "connections",
            label: "Connections",
            path: "/social/connections",
            icon: "People",
          },
          {
            id: "messages",
            label: "Messages",
            path: "/social/messages",
            icon: "Message",
          },
        ],
      },
    ],
  },
];

export const ECOMMERCE_ITEMS = [
  {
    id: "ecommerce.products",
    label: "Products",
    path: "/ecommerce/products",
  },
  {
    id: "ecommerce.orders",
    label: "Orders",
    path: "/ecommerce/orders",
  },
  {
    id: "ecommerce.customers",
    label: "Customers",
    path: "/ecommerce/customers",
  },
];

export const PROJECTS_ITEMS = [
  {
    id: "projects.alpha",
    label: "Project Alpha",
    path: "/projects/alpha",
  },
  {
    id: "projects.beta",
    label: "Project Beta",
    path: "/projects/beta",
  },
  {
    id: "projects.gamma",
    label: "Project Gamma",
    path: "/projects/gamma",
  },
  {
    id: "projects.delta",
    label: "Project Delta",
    path: "/projects/delta",
  },
];

export const COURSES_ITEMS = [
  {
    id: "courses.web-dev",
    label: "Web Development",
    path: "/courses/web-dev",
  },
  {
    id: "courses.data-science",
    label: "Data Science",
    path: "/courses/data-science",
  },
  {
    id: "courses.design",
    label: "UI/UX Design",
    path: "/courses/design",
  },
];




// Legacy export for backward compatibility
export const NAVIGATION_ITEMS = NAVIGATION_SECTIONS.flatMap(
  (section) => section.items
);

export const ALL_ROUTES_ITEMS = getAllRoutesItems(NAVIGATION_ITEMS);

console.log(getAllRoutesItems, "getAllRoutesItems");
