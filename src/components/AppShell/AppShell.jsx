import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  useMediaQuery,
  CssBaseline,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import NavigationItem from "../NavigationItem/NavigationItem";
import { ThemeToggle } from "../lib";
import styles from "./AppShell.module.css";

const drawerWidth = 280;

const AppShell = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box className={styles.drawerContent}>
      <Toolbar className={styles.drawerHeader}>
        <Typography className={styles.drawerTitle}>
          ByeWind
        </Typography>
      </Toolbar>
      <Divider />
      <Box className={styles.drawerNavigation}>
        <List sx={{ px: 1 }}>
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isMobile={isMobile}
              onClose={handleDrawerClose}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box className={styles.appShell}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`${styles.appBar} ${isMobile || isTablet ? styles.appBarMobile : ''}`}
      >
        <Toolbar className={styles.toolbar}>
          <MenuIcon
            className={`${styles.menuButton} ${isMobile || isTablet ? styles.menuButtonMobile : ''}`}
            onClick={handleDrawerToggle}
          />
          <Typography className={styles.title}>
            Home Page - Light
          </Typography>
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
        {/* Mobile Drawer - Overlay */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
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
      </Box>

      <Box
        component="main"
        className={`${styles.main} ${isMobile ? styles.mainMobile : ''} ${isTablet ? styles.mainTablet : ''}`}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AppShell;
