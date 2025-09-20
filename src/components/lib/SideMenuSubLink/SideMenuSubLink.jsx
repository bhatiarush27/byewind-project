import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Box, Typography, Tooltip } from "@mui/material";
import { Icon } from "@mui/material"; // assuming you're using MUI Icon component or a custom one
import classNames from "classnames";

import css from "./SideMenuSubLink.module.css";
// import { TEXT_COLORS } from "../../../constants/styles/color.js";

export const SideMenuSubLink = ({
  pageNameKey,
  pageNameLabel,
  selectedValue,
  disabled = false,
  onSubLinkSelect,
  to,
  iconRight = "",
  isNested = false,
}) => {
  const selected = selectedValue === pageNameKey;

  const handleClick = (e) => {
    e.preventDefault();
    onSubLinkSelect(pageNameKey);
  };

  return (
    <Link
      component={RouterLink}
      to={to}
      key={pageNameKey}
      tabIndex={disabled ? -1 : 0}
      underline="none"
      color="inherit"
      onClick={handleClick}
      className={css.link}
    >
      <Box
        className={classNames(css.subLinkWrapper, {
          [css.selected]: selected,
          [css.disabled]: disabled,
          [css.nested]: isNested,
        })}
        tabIndex={-1}
        key={pageNameKey}
        data-qa-id={`side-menu-sub-link-${pageNameKey}`}
        display="flex"
        alignItems="center"
      > 
        {iconRight ? iconRight : null}
        <Tooltip
          title={pageNameLabel}
          placement="right"
          classes={{ tooltip: css.toolTip }}
        >
          <Typography
            variant="body2"
            className={css.menuText}
            noWrap
            sx={{
              paddingLeft: isNested ? "32px" : "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {pageNameLabel}
          </Typography>
        </Tooltip>
      </Box>
    </Link>
  );
};
