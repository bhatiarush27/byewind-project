import * as React from "react";
import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Tooltip,
  Link,
  IconButton,
  Collapse,
  Badge as MuiBadge,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import css from "./SideMenuLinkGroup.module.css";

import { SideMenuSubLink } from "../SideMenuSubLink/SideMenuSubLink.jsx";

const pageNameKeyToPathnameMap = {};

const getPathFromPageNameKey = (pageNameKey) => {
  if (pageNameKey in pageNameKeyToPathnameMap) {
    return pageNameKeyToPathnameMap[pageNameKey];
  } else if (pageNameKey.includes(".")) {
    return `/${pageNameKey.replace(/\./g, "/")}`;
  } else {
    return `/${pageNameKey}`;
  }
};

export const SideMenuGroup = ({
  sideMenuLinkKey = "dashboard",
  expanded,
  onSubLinkSelect,
  subLinkOptions,
  customTitle,
  selectedValue,
  showStatusIndicator,
  iconRight,
  badgeTextDetails = {},
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  console.log(subLinkOptions, "subLinkOptions", selectedValue);

  const isChildSelected = React.useMemo(() => {
    return subLinkOptions.some((item) => item.key === selectedValue);
  }, [subLinkOptions, selectedValue]);

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return expanded ? (
    <Box key={`${sideMenuLinkKey}-group`} className={css.subMenuGroupWrapper}>
      <Box
        className={css.subMenuGroupLink}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={toggleCollapse}
        sx={{
          cursor: "pointer",
          p: 1,
          borderRadius: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <IconButton size="small" disableRipple>
            {isCollapsed ? <ChevronRightIcon fontSize="small" /> : <ExpandLessIcon fontSize="small" />}
          </IconButton>
          {iconRight ? iconRight : null}
          {customTitle}
        </Typography>
      </Box>

      <Collapse in={!isCollapsed}>
        <Box className={css.subMenuGroup}>
          {(subLinkOptions || []).map((option) => {
            const link = getPathFromPageNameKey(option.id);
            return (
              <SideMenuSubLink
                key={option.id}
                pageNameKey={option.id}
                pageNameLabel={option.label}
                selectedValue={selectedValue}
                onSubLinkSelect={onSubLinkSelect}
                to={link}
                badgeText={badgeTextDetails[option.id]}
                isNested
              />
            );
          })}
        </Box>
      </Collapse>
    </Box>
  ) : (
    // You can implement a MUI Popover or Menu for compact view if needed
    <Typography variant="caption">{customTitle}</Typography>
  );
};
