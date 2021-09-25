import { removeDuplicates } from "./index";

describe("remove-duplicates-from-sorted-array test", () => {
  it.each([
    {
      input: [1, 1, 2],
      expected: 2,
    },
    {
      input: [1],
      expected: 1,
    },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      expected: 5,
    },
  ])("$1", ({ input, expected }) => {
    expect(removeDuplicates(input)).toEqual(expected);
  });
});
