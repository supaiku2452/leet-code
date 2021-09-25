import { isValid } from "./index";

describe("valid-parentheses test", () => {
  it.each([
    {
      input: "()",
      expected: true,
    },
    {
      input: "()[]{}",
      expected: true,
    },
    {
      input: "(]",
      expected: false,
    },
    {
      input: "([)]",
      expected: false,
    },
    {
      input: "{[]}",
      expected: true,
    },
  ])("$1", ({ input, expected }) => {
    expect(isValid(input)).toEqual(expected);
  });
});
