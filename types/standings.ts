import { Driver } from "./driver";

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
