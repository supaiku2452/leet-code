import { mergeTwoLists } from "./mergeTwoSortedLists";
import { createListNodes, toAry } from "./utils";

describe("merge-two-sorted-lists test", () => {
  it.each([
    {
      input: {
        l1: [1, 2, 4],
        l2: [1, 3, 4],
      },
      expected: [1, 1, 2, 3, 4, 4],
    },
    {
      input: {
        l1: [],
        l2: [0],
      },
      expected: [0],
    },
  ])("$1", ({ input, expected }) => {
    expect(expected).toEqual(
      toAry(
        mergeTwoLists(createListNodes(input.l1), createListNodes(input.l2)),
        []
      )
    );
  });
});
