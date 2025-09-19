import React, { useState } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Box
} from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import IconRenderer from '../IconRenderer';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ item, isMobile, onClose }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = location.pathname === item.path;
  const hasActiveSubItem = item.subItems?.some(subItem => location.pathname === subItem.path);

  const handleClick = () => {
    if (item.hasSubItems) {
      setOpen(!open);
    } else {
      navigate(item.path);
      if (isMobile) {
        onClose();
      }
    }
  };

  const handleSubItemClick = (subItemPath) => {
    navigate(subItemPath);
    if (isMobile) {
      onClose();
    }
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleClick}
          className={`${styles.listItemButton} ${isActive || hasActiveSubItem ? styles.listItemButtonActive : ''}`}
        >
          <ListItemIcon className={styles.listItemIcon}>
            <IconRenderer 
              iconName={item.icon} 
              sx={{ fontSize: '20px' }}
            />
          </ListItemIcon>
          <ListItemText 
            primary={item.label}
            className={styles.listItemText}
            primaryTypographyProps={{
              className: `${styles.listItemTextPrimary} ${isActive || hasActiveSubItem ? styles.listItemTextPrimaryActive : ''}`
            }}
          />
          {item.hasSubItems && (
            <IconRenderer 
              iconName={open ? 'ExpandMore' : 'ChevronRight'} 
              className={`${styles.expandIcon} ${open ? styles.expandIconOpen : ''}`}
            />
          )}
        </ListItemButton>
      </ListItem>
      
      {item.hasSubItems && (
        <Collapse in={open} timeout="auto" unmountOnExit className={styles.collapse}>
          <List component="div" disablePadding className={styles.subItemList}>
            {item.subItems.map((subItem) => {
              const isSubItemActive = location.pathname === subItem.path;
              return (
                <ListItem key={subItem.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleSubItemClick(subItem.path)}
                    className={`${styles.subItemButton} ${isSubItemActive ? styles.subItemButtonActive : ''}`}
                  >
                    <ListItemIcon className={styles.subItemIcon}>
                      <IconRenderer 
                        iconName={subItem.icon} 
                        sx={{ fontSize: '18px' }}
                      />
                    </ListItemIcon>
                    <ListItemText 
                      primary={subItem.label}
                      className={styles.subItemText}
                      primaryTypographyProps={{
                        className: `${styles.subItemTextPrimary} ${isSubItemActive ? styles.subItemTextPrimaryActive : ''}`
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NavigationItem;
