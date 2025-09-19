import React from 'react';
import {
  PieChart,
  TrendingUp,
  Visibility,
  Assessment,
  Lightbulb,
  Inventory,
  List,
  Category,
  Warehouse,
  Add,
  ShoppingCart,
  Schedule,
  CheckCircle,
  Cancel,
  People,
  PersonAdd,
  Star,
  Campaign,
  AdsClick,
  Email,
  Share,
  AttachMoney,
  SwapHoriz,
  Receipt,
  ReceiptLong,
  Settings,
  Tune,
  Security,
  Notifications,
  Extension,
  ExpandMore,
  ChevronRight
} from '@mui/icons-material';

const IconRenderer = ({ iconName, ...props }) => {
  const iconMap = {
    PieChart,
    TrendingUp,
    Visibility,
    Assessment,
    Lightbulb,
    Inventory,
    List,
    Category,
    Warehouse,
    Add,
    ShoppingCart,
    Schedule,
    CheckCircle,
    Cancel,
    People,
    PersonAdd,
    Star,
    Campaign,
    AdsClick,
    Email,
    Share,
    AttachMoney,
    SwapHoriz,
    Receipt,
    ReceiptLong,
    Settings,
    Tune,
    Security,
    Notifications,
    Extension,
    ExpandMore,
    ChevronRight
  };

  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default IconRenderer;
