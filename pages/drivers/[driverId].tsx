import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Box, CircularProgress } from "@mui/material";

import MainContainer from "../../components/common/MainContainer";
import { useDriverData } from "../../hooks/useDriverData";
import DriverDetail from "../../components/drivers/DriverDetail";
import DriverResultsTable from "../../components/drivers/DriverResultsTable";
import OverallStandingItem from "../../components/common/OverallStandingItem";

const DriverResults: NextPage = () => {
  const router = useRouter();
  const driverId = router.query.driverId as string;
  const { data } = useDriverData(driverId);
  const result = data?.MRData.RaceTable.Races[0]?.Results[0];

  return (
    <MainContainer component={<OverallStandingItem />}>
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
            <DriverResultsTable data={data} />
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </MainContainer>
  );
};

export default DriverResults;
