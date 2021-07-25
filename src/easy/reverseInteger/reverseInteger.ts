export function reverse(x: number): number {
  if (x === 0 || isRangeOver(x)) {
    return 0;
  }
  const isNegative = x < 0;
  const reversedNum = x
    .toString()
    .split("")
    .slice(isNegative ? 1 : 0)
    .reverse()
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });

  const r = isNegative ? Number(reversedNum) * -1 : Number(reversedNum);
  return isRangeOver(r) ? 0 : r;
}

function isRangeOver(x: number): boolean {
  return !(x >= 2 ** 31 * -1 && x <= 2 ** 31 - 1);
}
