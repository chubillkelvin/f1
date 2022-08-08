import { Driver } from "../types/driver";

export const getFullName = (driver: Driver) =>
  `${driver.givenName} ${driver.familyName}`;
