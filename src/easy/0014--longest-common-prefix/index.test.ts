import { longestCommonPrefix } from "./index";

describe("longest common prefix test", () => {
  it.each([
    {
      input: ["flower", "flow", "flight"],
      expected: "fl",
    },
    {
      input: ["dog", "racecar", "car"],
      expected: "",
    },
    {
      input: ["dog", "", "car"],
      expected: "",
    },
  ])("$1 ", ({ input, expected }) => {
    expect(longestCommonPrefix(input)).toEqual(expected);
  });
});
