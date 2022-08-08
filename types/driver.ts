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

interface Time {
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

export interface Result {
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
  Results: Result[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface DriverData {
  MRData: {
    RaceTable: {
      Races: Race[];
      driverId: string;
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
