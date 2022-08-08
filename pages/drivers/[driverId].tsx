import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Box, CircularProgress } from "@mui/material";

import MainContainer from "../../components/MainContainer";
import { useDriverData } from "../../hooks/useDriverData";
import DriverDetail from "../../components/DriverDetail";
import RaceResultsTable from "../../components/RaceResultsTable";

const DriverResults: NextPage = () => {
  const router = useRouter();
  const driverId = router.query.driverId as string;
  const { data } = useDriverData(driverId);
  const result = data?.MRData.RaceTable.Races[0]?.Results[0];

  return (
    <MainContainer>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        {data && result ? (
          <>
            <DriverDetail result={result} />
            <RaceResultsTable data={data} />
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </MainContainer>
  );
};

export default DriverResults;
