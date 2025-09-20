import * as React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Tab,
  Tabs,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { FAVOURITES_ITEMS, RECENTS_ITEMS } from "../../constants/navigation";
import { useFavouritesStore } from "../../hooks/useFavouritesStore";
import { ALL_ROUTES_ITEMS } from "../../constants/navigation";
import classNames from "classnames";
import styles from "./QuickAccessSection.module.css";


const QuickAccessSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const { favourites, toggleFavourite } = useFavouritesStore();

  const favouritesItems = Object.values(ALL_ROUTES_ITEMS).filter((item) =>
    favourites.includes(item.id)  );

  const [selectedQuickAccessTab, setSelectedQuickAccessTab] =
    React.useState("FAVOURITES");

  const items =
    selectedQuickAccessTab === "FAVOURITES" ? FAVOURITES_ITEMS : RECENTS_ITEMS;

  const handleItemClick = (path) => {
    navigate(path);
  };

  // React.useEffect(() => {
  //   toggleFavourite(ALL_ROUTES_ITEMS.default.id);
  // }, []);

  return (
    <Box className={styles.quickAccessSection}>
      <Tabs
        value={selectedQuickAccessTab}
        onChange={(event, newValue) => setSelectedQuickAccessTab(newValue)}
        TabIndicatorProps={{ style: { display: 'none' } }} // Remove default underline
      >
        <Tab
          label="Favourites"
          value="FAVOURITES"
          classNames={`tab ${selectedQuickAccessTab === "FAVOURITES" ? "selectedTab" : ""}`}
        />
        <Tab
          label="Recents"
          value="RECENTS"
          classNames={`tab ${selectedQuickAccessTab === "RECENTS" ? "selectedTab" : ""}`}
        />
      </Tabs>
      <List className={styles.itemsList}>
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.path)}
                className={classNames(styles.itemButton, {
                  [styles.itemButtonActive]: isActive,
                })}
              >
                <Box className={styles.bulletPoint} />
                <ListItemText
                  primary={item.label}
                  className={`${styles.itemText} ${
                    isActive ? styles.itemTextActive : styles.itemTextInactive
                  }`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default QuickAccessSection;
