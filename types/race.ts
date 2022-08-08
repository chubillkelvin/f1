import { Driver } from "./driver";

export interface Location {
  country: string;
  lat: string;
  locality: string;
  long: string;
}

export interface Circuit {
  Location: Location;
  circuitId: string;
  circuitName: string;
  url: string;
}

export interface Time {
  time: string;
  millis?: string;
}

export interface Lap {
  AverageSpeed: {
    speed: string;
    units: string;
  };
  Time: Time;
  lap: string;
  rank: string;
}

export interface RaceResult {
  Constructor: {
    constructorId: string;
    name: string;
    nationality: string;
    url: string;
  };
  Driver: Driver;
  FastestLap: Lap;
  Time: Time;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
}

export interface Race {
  Circuit: Circuit;
  Results: RaceResult[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface RaceTable {
  Races: Race[];
  driverId: string;
  season: string;
}

export interface RaceData {
  MRData: {
    RaceTable: RaceTable;
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
    xmlns: string;
  };
}
