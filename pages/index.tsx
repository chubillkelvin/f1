import React from "react";
import type { NextPage } from "next";

import { Box, CircularProgress } from "@mui/material";

import MainContainer from "../components/common/MainContainer";
import OverallStandingsTable from "../components/overall/OverallStandingsTable";
import PageTitle from "../components/common/PageTitle";
import { useStandingsData } from "../hooks/useStandingsData";

const OverallStandings: NextPage = () => {
  const { data } = useStandingsData();

  return (
    <MainContainer>
      <PageTitle title="Overall Standings" />
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        {data ? <OverallStandingsTable data={data} /> : <CircularProgress />}
      </Box>
    </MainContainer>
  );
};

export default OverallStandings;
