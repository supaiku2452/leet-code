import { romanToInt, romanToIntegerSimply } from "./index";

describe("roman to integer tests.", () => {
  const pattern = [
    { input: "III", expected: 3 },
    { input: "IV", expected: 4 },
    { input: "IX", expected: 9 },
    { input: "LVIII", expected: 58 },
    { input: "MCMXCIV", expected: 1994 },
    { input: "MMMXLV", expected: 3045 },
  ];
  it.skip.each(pattern)("$input", ({ input, expected }) => {
    expect(romanToInt(input)).toEqual(expected);
  });
  it.each(pattern)("to simply $input", ({ input, expected }) => {
    expect(romanToIntegerSimply(input)).toEqual(expected);
  });
});
