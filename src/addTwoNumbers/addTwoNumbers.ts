import { ListNode } from "./ListNode";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1?.next === null && l1.val === 0 && l2?.next === null && l2.val === 0) {
    return l1;
  }
  let leftValues: number[] = [];
  let rightValues: number[] = [];

  let ll1 = l1;
  do {
    leftValues.push(ll1?.val ?? 0);
    ll1 = ll1?.next ?? null;
  } while (ll1 !== null);

  let ll2 = l2;
  do {
    rightValues.push(ll2?.val ?? 0);
    ll2 = ll2?.next ?? null;
  } while (ll2 !== null);

  let leftString = leftValues.reverse().toString();
  leftString = leftString.replace(/,/g, "");
  const left = BigInt(leftString);

  let rightString = rightValues.reverse().toString();
  rightString = rightString.replace(/,/g, "");
  const right = BigInt(rightString);
  const listNodes = (left + right)
    .toString()
    .split("")
    .reverse()
    .map((v) => new ListNode(Number(v), null));

  listNodes.reduceRight((previousValue, currentValue, currentIndex, array) => {
    currentValue.next = array[currentIndex + 1];
    return currentValue;
  });

  return listNodes[0] ?? null;
}
