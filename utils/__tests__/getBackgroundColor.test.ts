import "@testing-library/jest-dom";
import { getBackgroundColor } from "../getBackgroundColor";

describe("getBackgroundColor", () => {
  it("returns gold, silver, bronze colors for positions 1, 2, 3 respectively, undefined for anything else", () => {
    expect(getBackgroundColor("1")).toEqual("gold");
    expect(getBackgroundColor("2")).toEqual("gainsboro");
    expect(getBackgroundColor("3")).toEqual("#E7CFAE");
    expect(getBackgroundColor("4")).toEqual(undefined);
    expect(getBackgroundColor("10")).toEqual(undefined);
    expect(getBackgroundColor("12345")).toEqual(undefined);
    expect(getBackgroundColor("-10000")).toEqual(undefined);
    expect(getBackgroundColor("random string")).toEqual(undefined);
  });
});
