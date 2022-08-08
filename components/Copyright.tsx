import React from "react";

import { Link as MuiLink, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography mb={2} variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink
        target="_blank"
        color="inherit"
        href="https://github.com/RageBill"
      >
        Kelvin Chu
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
