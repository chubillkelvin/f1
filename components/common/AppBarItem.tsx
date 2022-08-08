import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Link from "./Link";

interface Props {
  icon: React.ReactElement;
  title: string;
}

const AppBarItem = ({ icon, title }: Props) => {
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
      {icon}
      {!isSmallScreen && <Box ml={1}>{title}</Box>}
    </Link>
  );
};

export default AppBarItem;
