import { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  Typography,
  useMediaQuery,
  CssBaseline,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  PieChartOutlined as PieChartIconOutlined,
  ShoppingCartOutlined as ShoppingCartIconOutlined,
  FolderOutlined as FolderIconOutlined,
  // ImportContactsIcon as ImportContactsIconOutlined,
  // BookOpenIcon,
  // BookOpen as BookOpenIcon,
} from "@mui/icons-material";
// import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useNavigate, useLocation } from "react-router-dom";
import {
  ECOMMERCE_ITEMS,
  PROJECTS_ITEMS,
  COURSES_ITEMS,
} from "../../constants/navigation";
import ProfileSection from "../NavigationItem/ProfileSection";
import QuickAccessSection from "../NavigationItem/QuickAccessSection";
import { ThemeToggle } from "../lib";
import styles from "./AppShell.module.css";
import { SideMenuGroup } from "../lib/SideMenuLinkGroup/SideMenuLinkGroup";
import { SideMenuSubLink } from "../lib/SideMenuSubLink/SideMenuSubLink";
import PropTypes from "prop-types";

const AppShell = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isDesktop = !isMobile && !isTablet;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const routeToPathnameMap = {
    "ecommerce.products": "/ecommerce/products",
    "ecommerce.orders": "/ecommerce/orders",
    "ecommerce.customers": "/ecommerce/customers",
    "projects.alpha": "/projects/alpha",
    "projects.beta": "/projects/beta",
    "projects.gamma": "/projects/gamma",
    "projects.delta": "/projects/delta",
    "courses.web-dev": "/courses/web-dev",
    "courses.data-science": "/courses/data-science",
    "courses.design": "/courses/design",
    dashboard: "/default",
  };

  const pathnameToSelectedKeyMap = {
    "/ecommerce/products": "ecommerce.products",
    "/ecommerce/orders": "ecommerce.orders",
    "/ecommerce/customers": "ecommerce.customers",
    "/projects/alpha": "projects.alpha",
    "/projects/beta": "projects.beta",
    "/projects/gamma": "projects.gamma",
    "/projects/delta": "projects.delta",
    "/courses/web-dev": "courses.web-dev",
    "/courses/data-science": "courses.data-science",
    "/courses/design": "courses.design",
    "/default": "dashboard",
  };

  const getSelectedKeyFromPathname = (pathname) => {
    return pathnameToSelectedKeyMap[pathname];
  };

  const selectedKey = getSelectedKeyFromPathname(location.pathname);

  console.log(selectedKey, "selectedKey");

  const handleSubLinkSelect = (key) => {
    navigate(routeToPathnameMap[key]);
  };

  const drawer = (
    <Box className={styles.drawerContent}>
      <ProfileSection />
      <Box className={styles.drawerNavigation}>
        <QuickAccessSection />

        <List sx={{ px: 1 }}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                lineHeight: "1.5",
                px: 1,
                py: 2,
              }}
            >
              Dashboards
            </Typography>
            <SideMenuSubLink
              pageNameKey="dashboard"
              pageNameLabel="Default"
              selectedValue={selectedKey}
              onSubLinkSelect={handleSubLinkSelect}
              to="/default"
              iconRight={<PieChartIconOutlined fontSize="small" />}
            />
            <SideMenuGroup
              sideMenuLinkKey="ecommerce"
              expanded={true}
              customTitle="Ecommerce"
              onSubLinkSelect={handleSubLinkSelect}
              subLinkOptions={ECOMMERCE_ITEMS}
              iconRight={<ShoppingCartIconOutlined fontSize="small" />}
              selectedValue={selectedKey}
            />
            <SideMenuGroup
              sideMenuLinkKey="projects"
              expanded={true}
              customTitle="Projects"
              onSubLinkSelect={handleSubLinkSelect}
              subLinkOptions={PROJECTS_ITEMS}
              iconRight={<FolderIconOutlined fontSize="small" />}
              selectedValue={selectedKey}
            />
            <SideMenuGroup
              sideMenuLinkKey="courses"
              expanded={true}
              customTitle="Courses"
              onSubLinkSelect={handleSubLinkSelect}
              subLinkOptions={COURSES_ITEMS}
              // iconRight={<ImportContactsIcon fontSize="small" />}
              selectedValue={selectedKey}
            />
          </Box>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box className={styles.appShell}>
      <CssBaseline />

      {/* AppBar - Always visible */}
      <AppBar
        position="fixed"
        className={`${styles.appBar} ${
          isMobile || isTablet ? styles.appBarMobile : ""
        }`}
      >
        <Toolbar className={styles.toolbar}>
          <MenuIcon
            className={`${styles.menuButton} ${
              isMobile || isTablet ? styles.menuButtonMobile : ""
            }`}
            onClick={handleDrawerToggle}
          />
          <Typography className={styles.title}>Test </Typography>
          <Box className={styles.headerActions}>
            <ThemeToggle />
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
            <AccountCircleIcon />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        className={styles.navigation}
        aria-label="navigation"
      >
        {/* Mobile/Tablet Drawer - Temporary/Overlay */}
        <Drawer
          variant="temporary"
          open={mobileOpen && (isMobile || isTablet)}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className={`${styles.drawer} ${styles.drawerMobile}`}
          classes={{
            paper: styles.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer - Permanent */}
        {isDesktop && (
          <Drawer
            variant="permanent"
            className={`${styles.drawer} ${styles.drawerDesktop}`}
            classes={{
              paper: styles.drawerPaper,
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>

      <Box
        component="main"
        className={`${styles.main} ${isMobile ? styles.mainMobile : ""} ${
          isTablet ? styles.mainTablet : ""
        }`}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppShell;
