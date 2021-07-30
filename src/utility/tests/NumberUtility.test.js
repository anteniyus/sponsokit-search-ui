import { abbreviateNumber, formatWithComma } from "../NumberUtility";

describe("Influencer Slice", () => {
  test("Checks the abbreviateNumber result", () => {
    expect(abbreviateNumber(1000)).toEqual("1k");
    expect(abbreviateNumber(1150)).toEqual("1.1k");
    expect(abbreviateNumber(1000000)).toEqual("1m");
    expect(abbreviateNumber(1780000)).toEqual("1.8m");
    expect(abbreviateNumber(10000000)).toEqual("10m");
    expect(abbreviateNumber(10499999)).toEqual("10m");
    expect(abbreviateNumber(10500000)).toEqual("11m");
    expect(abbreviateNumber(399999999)).toEqual("0.4b");
    expect(abbreviateNumber(500000000)).toEqual("0.5b");
    expect(abbreviateNumber(1000000000)).toEqual("1b");
    expect(abbreviateNumber(3000000000)).toEqual("3b");
  });

  test("Checks the formatWithComma result", () => {
    expect(formatWithComma(1000)).toEqual("1,000");
    expect(formatWithComma(100000)).toEqual("100,000");
    expect(formatWithComma(1000000)).toEqual("1,000,000");
  });
});
