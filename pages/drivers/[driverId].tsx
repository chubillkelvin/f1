import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import MainContainer from "../../components/MainContainer";
import PageTitle from "../../components/PageTitle";

const DriverResults: NextPage = () => {
  const router = useRouter();
  const { driverId } = router.query;

  return (
    <MainContainer>
      <PageTitle title={driverId as string} />
    </MainContainer>
  );
};

export default DriverResults;
