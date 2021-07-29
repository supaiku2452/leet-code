export function isPalindrome(x: number): boolean {
  if (x < 0 || x > 2 ** 31 - 1) {
    return false;
  }

  let left = 0;
  const chars = x.toString().split("");
  let right = chars.length - 1;
  let result = true;
  while (left < right) {
    if (chars[left] === chars[right]) {
      left++;
      right--;
    } else {
      result = false;
      left = right;
    }
  }

  return result;
}

export function isPalindromeNumberApproach(x: number): boolean {
  if (x < 0 || x % 10 === 0) {
    return false;
  }
  let rev = 0;
  const yy = x;
  while (yy > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return yy === rev;
}
