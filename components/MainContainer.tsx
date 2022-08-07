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
import { DriveEta, Person, QueryStats } from "@mui/icons-material";

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
                  variant="h6"
                  noWrap
                  sx={{
                    ml: { xs: 0, sm: 1 },
                    fontFamily: "monospace",
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
              <AppBarItem
                href="/races"
                icon={<DriveEta />}
                title="Race Results"
              />
              <Box m={2} />
              <AppBarItem
                href="/drivers"
                icon={<Person />}
                title="Driver Results"
              />
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="lg">{children}</Container>
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
