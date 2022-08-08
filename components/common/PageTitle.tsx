import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => (
  <Typography variant="h3" component="h1" align="center" gutterBottom>
    {title}
  </Typography>
);

export default PageTitle;
