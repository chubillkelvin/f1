import React from "react";

import { QueryStats } from "@mui/icons-material";

import AppBarItem from "./AppBarItem";

const OverallStandingItem = () => {
  return <AppBarItem icon={<QueryStats />} title="Overall Standings" />;
};

export default OverallStandingItem;
