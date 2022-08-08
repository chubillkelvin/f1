import React, { PropsWithChildren } from "react";

import {
  AppBar,
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "./Link";
import { QueryStats } from "@mui/icons-material";
import Copyright from "./Copyright";

export default function MainContainer({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link href="/">
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    p: 1,
                    ml: { xs: 0, sm: 1 },
                    fontWeight: 700,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Formula One
                </Typography>
              </Box>
            </Link>
            <Box display="flex" alignItems="center">
              <AppBarItem
                href="/"
                icon={<QueryStats />}
                title="Overall Standings"
              />
              <Box m={2} />
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        {children}
        <Copyright />
      </Container>
    </>
  );
}

interface AppBarItemProps {
  href: string;
  icon: React.ReactElement;
  title: string;
}

const AppBarItem = ({ href, icon, title }: AppBarItemProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Link
      href={href}
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
