import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Box, CircularProgress } from "@mui/material";

import MainContainer from "../components/common/MainContainer";
import OverallStandingsTable from "../components/overall/OverallStandingsTable";
import PageTitle from "../components/common/PageTitle";
import { useStandingsData } from "../hooks/useStandingsData";
import RaceResultsMenu from "../components/overall/RaceResultsMenu";

const OverallStandings: NextPage = () => {
  const { data } = useStandingsData();

  return (
    <MainContainer component={<RaceResultsMenu />}>
      <Head>
        <title>F1 - Overall Standings</title>
      </Head>
      <PageTitle title="Overall Standings" />
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        {data ? <OverallStandingsTable data={data} /> : <CircularProgress />}
      </Box>
    </MainContainer>
  );
};

export default OverallStandings;
