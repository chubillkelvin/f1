import useSWR from "swr";

import { fetcher } from "../utils/fetcher";

const OVERALL_STANDINGS_URL =
  "https://ergast.com/api/f1/current/driverStandings.json";

export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
}

export interface StandingList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

export interface OverallStandingsData {
  MRData: {
    StandingsTable: {
      StandingsLists: StandingList[];
      season: string;
    };
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
    xmlns: string;
  };
}

export const useStandingsData = () =>
  useSWR<OverallStandingsData>(OVERALL_STANDINGS_URL, fetcher);
