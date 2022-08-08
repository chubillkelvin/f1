import useSWR from "swr";

import { fetcher } from "../utils/fetcher";
import { AllRacesData } from "../types/allRaces";

const ALL_RACES_URL = "https://ergast.com/api/f1/current/races.json";

export const useAllRacesData = () =>
  useSWR<AllRacesData>(ALL_RACES_URL, fetcher);
