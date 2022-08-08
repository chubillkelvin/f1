import React, { PropsWithChildren } from "react";

import { AppBar, Box, Container, Typography } from "@mui/material";
import Link from "./Link";
import Copyright from "./Copyright";

interface Props {
  component?: React.ReactElement;
}

export default function MainContainer({
  component,
  children,
}: PropsWithChildren<Props>) {
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
              {component}
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
