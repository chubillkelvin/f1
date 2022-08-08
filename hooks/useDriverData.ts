import useSWR from "swr";

import { fetcher } from "../utils/fetcher";
import { DriverData } from "../types/driver";

const getDriverResultURL = (driverId: string) =>
  `https://ergast.com/api/f1/current/drivers/${driverId}/results.json`;

export const useDriverData = (driverId: string) =>
  useSWR<DriverData>(getDriverResultURL(driverId), fetcher);
