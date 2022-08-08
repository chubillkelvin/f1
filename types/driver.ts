import { RaceTable } from "./race";

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

export interface DriverData {
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
