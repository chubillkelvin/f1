import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Box, CircularProgress, Typography } from "@mui/material";

import MainContainer from "../../components/common/MainContainer";
import PageTitle from "../../components/common/PageTitle";
import { useRaceData } from "../../hooks/useRaceData";
import RaceResultsTable from "../../components/races/RaceResultsTable";

const RaceResults: NextPage = () => {
  const router = useRouter();
  const round = router.query.round as string;
  const { data } = useRaceData(round);
  const race = data?.MRData.RaceTable.Races[0];

  return (
    <MainContainer>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        {race ? (
          <>
            <PageTitle title={race.raceName} />
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Round {round}
            </Typography>
            <RaceResultsTable data={race.Results} />
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </MainContainer>
  );
};

export default RaceResults;
