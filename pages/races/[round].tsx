import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Box } from "@mui/material";

import MainContainer from "../../components/MainContainer";
import PageTitle from "../../components/PageTitle";

const RaceResults: NextPage = () => {
  const router = useRouter();
  const round = router.query.round as string;

  return (
    <MainContainer>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        <PageTitle title={`Round ${round}`} />
      </Box>
    </MainContainer>
  );
};

export default RaceResults;
