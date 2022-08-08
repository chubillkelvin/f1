import { Circuit } from "./race";

export interface DateAndTime {
  date: string;
  time: string;
}

export interface AllRace {
  Circuit: Circuit;
  FirstPractice: DateAndTime;
  Qualifying: DateAndTime;
  SecondPractice: DateAndTime;
  ThirdPractice: DateAndTime;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface AllRacesData {
  MRData: {
    RaceTable: {
      Races: AllRace[];
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
