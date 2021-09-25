import { ListNode } from "../../medium/0002--add-two-numbers/ListNode";

function toAry(l: ListNode | null, a: number[]): number[] {
  if (l === null) return a;
  a.push(l.val);
  if (l.next === null) return a;
  return toAry(l.next, a);
}

function createListNodes(input: number[]): ListNode | null {
  if (input.length === 0) return null;
  return input
    .map((v) => new ListNode(v, null))
    .reduceRight((previousValue, currentValue, currentIndex, array) => {
      currentValue.next = array[currentIndex + 1];
      return currentValue;
    });
}

export { toAry, createListNodes };
