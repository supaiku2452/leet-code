import { reverse, reverseSimply } from "./index";

describe("reverse integer test", () => {
  it.each([
    { input: 123, expected: 321 },
    { input: -123, expected: -321 },
    { input: 120, expected: 21 },
    { input: 0, expected: 0 },
    { input: -2147483412, expected: -2143847412 },
  ])("$input", ({ input, expected }) => {
    expect(reverse(input)).toEqual(expected);
    expect(reverseSimply(input)).toEqual(expected);
  });
});
