import useSWR from "swr";

import { fetcher } from "../utils/fetcher";
import { OverallStandingsData } from "../types/standings";

const OVERALL_STANDINGS_URL =
  "https://ergast.com/api/f1/current/driverStandings.json";

export const useStandingsData = () =>
  useSWR<OverallStandingsData>(OVERALL_STANDINGS_URL, fetcher);
