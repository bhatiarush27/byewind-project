import {
  PieChartOutlined as PieChartIconOutlined,
  ShoppingCartOutlined as ShoppingCartIconOutlined,
  FolderOutlined as FolderIconOutlined,
  BookOutlined as BookIconOutlined,
  PersonOutlined as PersonIconOutlined,
  AccountBalanceOutlined as AccountBalanceIconOutlined,
  ArticleOutlined as ArticleIconOutlined,
  GroupOutlined as GroupIconOutlined,
} from "@mui/icons-material";

export const LEFT_PANEL_DATA = [
  {
    title: "FAVOURITES",
    items: [
      {
        key: "default",
        label: "Default",
        path: "/default",
        icon: <PieChartIconOutlined fontSize="small" />,
      },
      {
        key: "project-alpha",
        label: "Project Alpha",
        path: "/project-alpha",
        icon: <FolderIconOutlined fontSize="small" />,
      },
    ],
  },
  {
    title: "RECENTS",
    items: [
      {
        key: "analytics",
        label: "Analytics",
        path: "/analytics",
        icon: <PieChartIconOutlined fontSize="small" />,
      },
      {
        key: "ecommerce-dashboard",
        label: "eCommerce Dashboard",
        path: "/ecommerce",
        icon: <ShoppingCartIconOutlined fontSize="small" />,
      },
    ],
  },
  {
    title: "DASHBOARDS",
    items: [
      {
        key: "default-dashboard",
        label: "Default",
        path: "/default",
        icon: <PieChartIconOutlined fontSize="small" />,
      },
      {
        key: "ecommerce",
        label: "Ecommerce",
        path: "/ecommerce",
        icon: <ShoppingCartIconOutlined fontSize="small" />,
        children: [
          {
            key: "ecommerce-dashboard",
            label: "Dashboard",
            path: "/ecommerce",
            icon: <PieChartIconOutlined fontSize="small" />,
          },
          {
            key: "ecommerce-products",
            label: "Products",
            path: "/ecommerce/products",
            icon: <ShoppingCartIconOutlined fontSize="small" />,
          },
          {
            key: "ecommerce-orders",
            label: "Orders",
            path: "/ecommerce/orders",
            icon: <ShoppingCartIconOutlined fontSize="small" />,
          },
          {
            key: "ecommerce-customers",
            label: "Customers",
            path: "/ecommerce/customers",
            icon: <PersonIconOutlined fontSize="small" />,
          },
          {
            key: "ecommerce-analytics",
            label: "Analytics",
            path: "/ecommerce/analytics",
            icon: <PieChartIconOutlined fontSize="small" />,
          },
        ],
      },
      {
        key: "projects",
        label: "Projects",
        path: "/projects",
        icon: <FolderIconOutlined fontSize="small" />,
        children: [
          {
            key: "projects-list",
            label: "Project List",
            path: "/projects",
            icon: <FolderIconOutlined fontSize="small" />,
          },
          {
            key: "projects-create",
            label: "Create Project",
            path: "/projects/create",
            icon: <FolderIconOutlined fontSize="small" />,
          },
        ],
      },
      {
        key: "courses",
        label: "Courses",
        path: "/courses",
        icon: <BookIconOutlined fontSize="small" />,
        children: [
          {
            key: "courses-list",
            label: "Course List",
            path: "/courses",
            icon: <BookIconOutlined fontSize="small" />,
          },
          {
            key: "courses-create",
            label: "Create Course",
            path: "/courses/create",
            icon: <BookIconOutlined fontSize="small" />,
          },
        ],
      },
    ],
  },
  {
    title: "PAGES",
    items: [
      {
        key: "user-profile",
        label: "User Profile",
        path: "/user-profile",
        icon: <PersonIconOutlined fontSize="small" />,
        children: [
          {
            key: "user-profile-view",
            label: "View Profile",
            path: "/user-profile",
            icon: <PersonIconOutlined fontSize="small" />,
          },
          {
            key: "user-profile-edit",
            label: "Edit Profile",
            path: "/user-profile/edit",
            icon: <PersonIconOutlined fontSize="small" />,
          },
        ],
      },
      {
        key: "account",
        label: "Account",
        path: "/account",
        icon: <AccountBalanceIconOutlined fontSize="small" />,
        children: [
          {
            key: "account-settings",
            label: "Settings",
            path: "/account/settings",
            icon: <AccountBalanceIconOutlined fontSize="small" />,
          },
          {
            key: "account-billing",
            label: "Billing",
            path: "/account/billing",
            icon: <AccountBalanceIconOutlined fontSize="small" />,
          },
        ],
      },
      {
        key: "corporate",
        label: "Corporate",
        path: "/corporate",
        icon: <AccountBalanceIconOutlined fontSize="small" />,
        children: [
          {
            key: "corporate-about",
            label: "About",
            path: "/corporate/about",
            icon: <AccountBalanceIconOutlined fontSize="small" />,
          },
          {
            key: "corporate-contact",
            label: "Contact",
            path: "/corporate/contact",
            icon: <AccountBalanceIconOutlined fontSize="small" />,
          },
        ],
      },
      {
        key: "blog",
        label: "Blog",
        path: "/blog",
        icon: <ArticleIconOutlined fontSize="small" />,
        children: [
          {
            key: "blog-list",
            label: "Blog List",
            path: "/blog",
            icon: <ArticleIconOutlined fontSize="small" />,
          },
          {
            key: "blog-create",
            label: "Create Post",
            path: "/blog/create",
            icon: <ArticleIconOutlined fontSize="small" />,
          },
        ],
      },
      {
        key: "social",
        label: "Social",
        path: "/social",
        icon: <GroupIconOutlined fontSize="small" />,
        children: [
          {
            key: "social-feed",
            label: "Feed",
            path: "/social",
            icon: <GroupIconOutlined fontSize="small" />,
          },
          {
            key: "social-connections",
            label: "Connections",
            path: "/social/connections",
            icon: <GroupIconOutlined fontSize="small" />,
          },
        ],
      },
    ],
  },
];
