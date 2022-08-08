import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { QueryStats } from "@mui/icons-material";

import Link from "./Link";

const OverallStandingItem = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Link
      href="/"
      sx={{
        display: "flex",
        fontFamily: "monospace",
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <QueryStats />
      {!isSmallScreen && <Box ml={1}>Overall Standings</Box>}
    </Link>
  );
};

export default OverallStandingItem;
