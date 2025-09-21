import React from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "../../../contexts/ThemeContext";
import IconButton from "../IconButton/IconButton";
import styles from "./ThemeToggle.module.css";
import { Tooltip } from "@mui/material";

const ThemeToggle = ({ className = "", ...props }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${className}`}
      variant="ghost"
      size="medium"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      {...props}
    >
      {isDarkMode ? (
        <Tooltip title="Enable Light mode">
          <LightMode className={styles.icon} />
        </Tooltip>
      ) : (
        <Tooltip title="Enable Dark mode">
          <DarkMode className={styles.icon} />
        </Tooltip>
      )}
    </IconButton>
  );
};

export default ThemeToggle;
