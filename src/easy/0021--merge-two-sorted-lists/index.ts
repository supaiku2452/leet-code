// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

import { createListNodes, toAry } from "./utils";
import { ListNode } from "./ListNode";

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }
  let ary: number[] = [];
  ary = toAry(l1, toAry(l2, ary)).sort((a, b) => a - b);

  return createListNodes(ary);
}

export { mergeTwoLists };
