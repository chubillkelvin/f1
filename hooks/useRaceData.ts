import useSWR from "swr";

import { fetcher } from "../utils/fetcher";
import { RaceData } from "../types/race";

const getRaceResultURL = (round: string) =>
  `https://ergast.com/api/f1/current/${round}/results.json`;

export const useRaceData = (round: string) =>
  useSWR<RaceData>(getRaceResultURL(round), fetcher);
