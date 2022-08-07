import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../components/Copyright";
import MainContainer from "../components/MainContainer";

const DriverResults: NextPage = () => {
  return (
    <MainContainer>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Driver Results
        </Typography>
        <Copyright />
      </Box>
    </MainContainer>
  );
};

export default DriverResults;
