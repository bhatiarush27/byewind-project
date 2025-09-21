import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Collapse,
  IconButton,
  Divider,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  PieChartOutlined as PieChartIconOutlined,
  ShoppingCartOutlined as ShoppingCartIconOutlined,
  FolderOutlined as FolderIconOutlined,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { DEFAULT_USER } from "../../constants/rightPanelData.js";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./SidePanel.module.css";
import QuickAccessSection from "../NavigationItem/QuickAccessSection";

const SidePanel = ({
  isOpen,
  onClose,
  position = "left",
  panelType = "navigation", // "navigation" or "right"
  navigationData = null,
  rightPanelData = null,
}) => {
  const { theme } = useTheme();
  const [expandedItems, setExpandedItems] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleExpandClick = (itemKey) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const handleItemClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const isItemSelected = (path) => {
    return location.pathname === path;
  };

  const renderNavigationItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.key];
    const isSelected = isItemSelected(item.path);

    return (
      <React.Fragment key={item.key}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              if (hasChildren) {
                handleExpandClick(item.key);
              } else {
                handleItemClick(item.path);
              }
            }}
            className={`${styles.listItemButton} ${
              isSelected ? styles.selected : ""
            }`}
            sx={{
              pl: 2 + level * 2,
            }}
          >
            <ListItemIcon className={styles.listItemIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                className: isSelected ? styles.selectedText : styles.text,
                sx: { fontSize: "14px" },
              }}
            />
            {hasChildren && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpandClick(item.key);
                }}
                className={styles.expandButton}
              >
                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            )}
          </ListItemButton>
        </ListItem>
        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child) =>
                renderNavigationItem(child, level + 1)
              )}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  const drawerContent = () => {
    if (panelType === "navigation" && navigationData) {
      return (
        <Box className={styles.drawerContent}>
          <Box className={styles.brandSection}>
            <Box className={styles.brandText}>
              <Avatar src={DEFAULT_USER.avatar} alt="ByeWind" />
            </Box>
            <Typography className={styles.brandName}>
              ByeWind
            </Typography>
          </Box>

          <QuickAccessSection />

          {/* Navigation Content */}
          <Box className={styles.navigationContent}>
            {navigationData.map((section) => (
              <Box key={section.title} className={styles.navigationSection}>
                <Typography className={styles.sectionTitle}>
                  {section.title}
                </Typography>
                <List className={styles.navigationList}>
                  {section.items.map((item) => renderNavigationItem(item))}
                </List>
              </Box>
            ))}
          </Box>
        </Box>
      );
    }

    return null;
  };

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isDesktop = !isMobile && !isTablet;

  // For left panel: show on desktop always, or on mobile/tablet when isOpen
  // For right panel: show on desktop always, or on mobile/tablet when isOpen
  const shouldShow = isDesktop || isOpen;

  if (!shouldShow) return null;

  return (
    <Drawer
      variant={isDesktop ? "permanent" : "temporary"}
      anchor={position}
      open={isOpen}
      onClose={onClose}
      className={`${styles.drawer} ${
        position === "right" ? styles.rightDrawer : ""
      }`}
      sx={{
        width: position === "right" ? 320 : 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: position === "right" ? 320 : 280,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.paper,
          borderRight: position === "left" ? `1px solid ${theme.palette.divider}` : "none",
          borderLeft: position === "right" ? `1px solid ${theme.palette.divider}` : "none",
          ...(position === "right" && {
            right: 0,
            left: "auto",
          }),
        },
      }}
    >
      {drawerContent()}
    </Drawer>
  );
};

SidePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
  panelType: PropTypes.oneOf(["navigation", "right"]),
  navigationData: PropTypes.array,
  rightPanelData: PropTypes.object,
};

export default SidePanel;
