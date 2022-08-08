import * as React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import Link from "./Link";

import { Result } from "../types/driver";

interface Props {
  result: Result;
}

const DriverDetail = ({ result }: Props) => {
  const { Driver: driver } = result;

  return (
    <Card sx={{ minWidth: 360, mb: 3 }} elevation={3}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          {`${driver.givenName} ${driver.familyName}`}
        </Typography>
        <Typography align="center" gutterBottom>
          Nationality: {driver.nationality}
        </Typography>
        <Typography align="center" gutterBottom>
          Date of birth: {driver.dateOfBirth}
        </Typography>
        <Typography align="center" gutterBottom>
          <Link
            href={driver.url}
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            Wikipedia Page
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DriverDetail;
