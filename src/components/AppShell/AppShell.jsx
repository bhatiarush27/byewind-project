import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  CssBaseline,
  Badge,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  ViewSidebar as PanelRightIcon,
  History as HistoryIcon,
  Contacts as ContactsIcon,
  BugReportOutlined as BugReportIcon,
  PersonAddOutlined as PersonAddIcon,
} from "@mui/icons-material";
import { ThemeToggle } from "../lib";
import styles from "./AppShell.module.css";
import SidePanel from "../SidePanel/SidePanel";
import { RIGHT_PANEL_DATA } from "../../constants/rightPanelData.js";
import { LEFT_PANEL_DATA } from "../../constants/leftPanelData.jsx";
import PropTypes from "prop-types";

const AppShell = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isDesktop = !isMobile && !isTablet;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRightPanelToggle = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  const getIconFromNotificationType = (notificationType) => {
    switch (notificationType) {
      case "BUG":
        return <BugReportIcon fontSize="small" color="primary" />;
      case "USER_REGISTERED":
        return <PersonAddIcon fontSize="small" color="primary" />;
      case "USER_SUBSCRIPTION":
        return <PersonAddIcon fontSize="small" color="primary" />;
      default:
        return <NotificationsIcon fontSize="small" color="primary" />;
    }
  };

  // Left panel is now handled by SidePanel component

  return (
    <Box className={styles.appShell}>
      <CssBaseline />

      {/* AppBar - Always visible */}
      <AppBar
        position="fixed"
        className={`${styles.appBar} ${
          isMobile || isTablet ? styles.appBarMobile : ""
        }`}
        sx={{
          width: { xs: "100%", md: "calc(100% - 280px)" },
          marginLeft: { xs: 0, md: "280px" },
          marginRight: { xs: 0, md: rightPanelOpen ? "320px" : 0 },
          backgroundColor: "#ffffff",
          color: "#212121",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
          borderBottom: "1px solid #e0e0e0",
          zIndex: 1200,
        }}
      >
        <Toolbar className={styles.toolbar}>
          <MenuIcon
            className={`${styles.menuButton} ${
              isMobile || isTablet ? styles.menuButtonMobile : ""
            }`}
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          />
          <div 
            style={{ 
              color: '#212121', 
              fontSize: '18px', 
              fontWeight: 600,
              flexGrow: 1,
              display: 'block',
              lineHeight: '64px'
            }}
          />
          <Box className={styles.headerActions}>
            <Tooltip title="Toggle Dark/Light Mode">
              <ThemeToggle />
            </Tooltip>
            <Tooltip title="Refresh">
              <HistoryIcon />
            </Tooltip>
            <PanelRightIcon
              onClick={handleRightPanelToggle}
              sx={{
                cursor: "pointer",
                color: rightPanelOpen ? "#2196f3" : "#666666",
                transition: "color 0.2s ease",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        className={styles.navigation}
        aria-label="navigation"
      >
        {/* Left Panel - Navigation */}
        <SidePanel
          isOpen={isDesktop || mobileOpen}
          onClose={handleDrawerToggle}
          position="left"
          panelType="navigation"
          navigationData={LEFT_PANEL_DATA}
        />
      </Box>

      {/* Right Panel - Notifications (Full-height like left panel) */}
      {rightPanelOpen && (
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: 320,
            flexShrink: 0,
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            zIndex: 1100,
            "& .MuiDrawer-paper": {
              width: 320,
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
              borderLeft: "1px solid #e0e0e0",
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "20px 10px",
            }}
          >
            {/* Notifications Section */}
            <Box sx={{ padding: "8px 12px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#333333",
                  letterSpacing: "0.5px",
                }}
              >
                Notifications
              </Typography>
              <List>
                {RIGHT_PANEL_DATA.notifications?.map((notification, index) => (
                  <ListItem key={index} sx={{ padding: "4px 0" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#e3f2fd",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      {getIconFromNotificationType(
                        notification.notificationType
                      )}
                    </Box>
                    <ListItemText
                      primary={notification.message}
                      secondary={notification.time}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "13px",
                          color: "#333333",
                          lineHeight: 1.4,
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "14px",
                          color: "#666666",
                          marginTop: "4px",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Activities Section */}
            <Box sx={{ padding: "8px 12px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#333333",
                  marginBottom: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                Activities
              </Typography>
              <List>
                {RIGHT_PANEL_DATA.activities?.map((activity, index) => (
                  <ListItem key={index} sx={{ padding: "4px 0" }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: "#e3f2fd",
                        color: "#1976d2",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginRight: "12px",
                      }}
                      src={activity.user.avatar}
                    />
                    <ListItemText
                      primary={activity.message}
                      secondary={activity.time}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "13px",
                          color: "#333333",
                          lineHeight: 1.4,
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "11px",
                          color: "#666666",
                          marginTop: "4px",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Contacts Section */}
            <Box sx={{ padding: "8px 12px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#333333",
                  letterSpacing: "0.5px",
                }}
              >
                Contacts
              </Typography>
              <List>
                {RIGHT_PANEL_DATA.contacts?.map((contact, index) => (
                  <ListItem key={index} sx={{ padding: "4px 0" }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: "#e3f2fd",
                        color: "#1976d2",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginRight: "12px",
                      }}
                      src={contact.user.avatar}
                    />
                    <ListItemText
                      primary={contact.name}
                      secondary={contact.status}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "13px",
                          color: "#333333",
                          lineHeight: 1.4,
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "11px",
                          color: "#666666",
                          marginTop: "4px",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // padding: { xs: '16px', sm: '24px', md: '32px' },
          marginTop: "64px",
          marginRight: { xs: 0, md: rightPanelOpen ? "320px" : 0 },
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "#ffffff",
          transition: "all 0.3s ease-in-out",
          position: "relative",
          zIndex: 1,
        }}
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
