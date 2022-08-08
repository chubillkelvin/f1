import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Box, CircularProgress, Typography } from "@mui/material";

import MainContainer from "../components/common/MainContainer";
import OverallStandingsTable from "../components/overall/OverallStandingsTable";
import PageTitle from "../components/common/PageTitle";
import { useStandingsData } from "../hooks/useStandingsData";
import RaceResultsMenu from "../components/overall/RaceResultsMenu";

const OverallStandings: NextPage = () => {
  const { data, error } = useStandingsData();

  return (
    <MainContainer component={<RaceResultsMenu />}>
      <Head>
        <title>F1 - Overall Standings</title>
      </Head>
      <PageTitle title="Overall Standings" />
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        {data ? (
          <OverallStandingsTable data={data} />
        ) : error ? (
          <Typography color="red">Error - results not found!</Typography>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </MainContainer>
  );
};

export default OverallStandings;
