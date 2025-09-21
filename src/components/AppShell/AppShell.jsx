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
  TextField,
  Tooltip,
  useTheme as useMuiTheme,
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
  StarOutline as StarIconOutlined,
} from "@mui/icons-material";
import { ThemeToggle } from "../lib";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./AppShell.module.css";
import SidePanel from "../SidePanel/SidePanel";
import { RIGHT_PANEL_DATA } from "../../constants/rightPanelData.js";
import { LEFT_PANEL_DATA } from "../../constants/leftPanelData.jsx";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";


const getPageTitleFromPath = (path) => {
  switch (path) {
    case "/default":
        return "Dashboards / Default";
      case "/ecommerce/orders":
        return "Ecommerce / Orders";
      case "/projects/alpha":
        return "Projects / Alpha";
      case "/projects/beta":
        return "Projects / Beta";
      case "/projects/gamma":
        return "Projects / Gamma";
      case "/projects/delta":
        return "Projects / Delta";
      case "/courses":
        return "Courses / Web Development";
      case "/courses/web-dev":
        return "Courses / Web Development";
      case "/courses/data-science":
        return "Courses / Data Science";
      case "/courses/design":
        return "Courses / UI/UX Design";
      case "/products":
        return "Products";
      case "/analytics":
        return "Analytics";
      case "/contacts":
        return "Contacts";
      case "/activities":
        return "Activities";
      case "/notifications":
        return "Notifications";
      case "/settings":
        return "Settings";
      case "/profile":
        return "Profile";
      case "/coming-soon":
        return "Coming Soon";
      case "/not-found":
        return "Not Found";
      case "/unauthorized":
        return "Unauthorized";
      case "/forbidden":
        return "Forbidden"; 
    default:
      return "Dashboard";
  }
};

const AppShell = ({ children }) => {
  const { theme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isDesktop = !isMobile && !isTablet;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const location = useLocation();
  const [isFavourite, setIsFavourite] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRightPanelToggle = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  const getIconFromNotificationType = (notificationType) => {
    switch (notificationType) {
      case "BUG":
        return <BugReportIcon fontSize="small" />;
      case "USER_REGISTERED":
        return <PersonAddIcon fontSize="small" />;
      case "USER_SUBSCRIPTION":
        return <PersonAddIcon fontSize="small" />;
      default:
        return <NotificationsIcon fontSize="small" />;
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
          width: { xs: "100%", md: `calc(100% - 280px - ${rightPanelOpen ? "320px" : "0px"})` },
          marginLeft: { xs: 0, md: "280px" },
          marginRight: { xs: 0, md: rightPanelOpen ? "320px" : 0 },
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          zIndex: 1200,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar className={styles.toolbar}>
          <MenuIcon
            className={`${styles.menuButton} ${
              isMobile || isTablet ? styles.menuButtonMobile : ""
            }`}
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          />
          <StarIconOutlined onClick={() => setIsFavourite(!isFavourite)} sx={{
            backgroundColor: isFavourite ? 'gold' : 'transparent',
            marginRight: '8px',
          }} />
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              fontSize: "18px",
              fontWeight: 600,
              flexGrow: 1,
              display: "block",
              lineHeight: "64px",
            }}
          >
            {getPageTitleFromPath(location.pathname)}
          </Typography>

          <Box className={styles.headerActions}>
            <TextField
              label="Search"
              size="small"
              sx={{ 
                width: 300, 
                borderRadius: '24px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '24px',
                }
              }}
            />
            <ThemeToggle />
            <Tooltip title="Refresh">
              <HistoryIcon />
            </Tooltip>
            <PanelRightIcon
              onClick={handleRightPanelToggle}
              sx={{
                cursor: "pointer",
                color: rightPanelOpen ? theme.palette.primary.main : theme.palette.text.secondary,
                transition: "color 0.2s ease",
                '&:hover': {
                  color: theme.palette.primary.main,
                },
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
              backgroundColor: theme.palette.background.paper,
              borderLeft: `1px solid ${theme.palette.divider}`,
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              transition: "all 0.3s ease",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "20px 10px",
              paddingTop: "80px",
            }}
          >
            {/* Notifications Section */}
            <Box sx={{ padding: "8px 12px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: theme.palette.text.primary,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: 2,
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
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
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
                          color: theme.palette.text.primary,
                          lineHeight: 1.4,
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "11px",
                          color: theme.palette.text.secondary,
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
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  marginBottom: 2,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
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
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
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
                          color: theme.palette.text.primary,
                          lineHeight: 1.4,
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "11px",
                          color: theme.palette.text.secondary,
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
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: 2,
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
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
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
                          color: theme.palette.text.primary,
                          lineHeight: 1.4,
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "11px",
                          color: theme.palette.text.secondary,
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
          padding: { xs: '16px', sm: '24px', md: '32px' },
          marginTop: "64px",
          marginRight: { xs: 0, md: rightPanelOpen ? "320px" : 0 },
          minHeight: "calc(100vh - 64px)",
          backgroundColor: theme.palette.background.default,
          transition: "all 0.3s ease-in-out",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppShell;
