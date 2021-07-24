import { ListNode } from "./ListNode";
import { addTwoNumbers } from "./addTwoNumbers";

const createListNodes = (input: number[]): ListNode =>
  input
    .map((v) => new ListNode(v, null))
    .reduceRight((previousValue, currentValue, currentIndex, array) => {
      currentValue.next = array[currentIndex + 1];
      return currentValue;
    });

describe("add two numbers", () => {
  it.each([
    {
      input: {
        l1: [2, 4, 3],
        l2: [5, 6, 4],
      },
      expected: [7, 0, 8],
    },
    {
      input: {
        l1: [0],
        l2: [0],
      },
      expected: [0],
    },
    {
      input: {
        l1: [9, 9, 9, 9, 9, 9, 9],
        l2: [9, 9, 9, 9],
      },
      expected: [8, 9, 9, 9, 0, 0, 0, 1],
    },
    {
      input: {
        l1: [
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1,
        ],
        l2: [5, 6, 4],
      },
      expected: [
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
    },
  ])("$input", ({ input, expected }) => {
    const lNodes = createListNodes(input.l1);
    const rNodes = createListNodes(input.l2);
    const actualNodeList = addTwoNumbers(lNodes, rNodes);
    let actual: number[] = [];
    let aa = actualNodeList;
    do {
      actual.push(aa?.val ?? 0);
      aa = aa?.next ?? null;
    } while (aa !== null);
    expect(actual).toEqual(expected);
  });
});
