import "@testing-library/jest-dom";
import { Driver } from "../../types/driver";
import { getFullName } from "../getFullName";

describe("getFullName", () => {
  it("returns full name of driver", () => {
    const mockDriver: Driver = {
      givenName: "John",
      familyName: "Doe",
      driverId: "",
      url: "",
      nationality: "",
      code: "",
      dateOfBirth: "",
      permanentNumber: "",
    };

    expect(getFullName(mockDriver)).toEqual("John Doe");
  });
});
