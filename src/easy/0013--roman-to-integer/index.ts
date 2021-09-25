// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//   It is guaranteed that s is a valid roman numeral in the range [1, 3999].

export function romanToInt(s: string): number {
  let ary: string[] = [];
  const a = s.split("");
  for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
      case "I":
        if ("V" === a[i + 1]) {
          ary.push("IV");
          i++;
        } else if ("X" === a[i + 1]) {
          ary.push("IX");
          i++;
        } else {
          ary.push("I");
        }
        break;
      case "X":
        if ("L" === a[i + 1]) {
          ary.push("XL");
          i++;
        } else if ("C" === a[i + 1]) {
          ary.push("XC");
          i++;
        } else {
          ary.push("X");
        }
        break;
      case "C":
        if ("D" === a[i + 1]) {
          ary.push("CD");
          i++;
        } else if ("M" === a[i + 1]) {
          ary.push("CM");
          i++;
        } else {
          ary.push("C");
        }
        break;
      default:
        ary.push(a[i]);
        break;
    }
  }
  return ary.reduce(
    (prev, current) =>
      prev +
      current.split("").reduce((_prev, _current) => {
        return Math.abs(getNum(_current) - _prev);
      }, 0),
    0
  );
}

function getNum(s: string): number {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

let ROMAN_MAP = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
function getSafetyRomanNum(key: string): number {
  return ROMAN_MAP.get(key) ?? 0;
}
export function romanToIntegerSimply(s: string): number {
  const ary = s.split("");
  let sum = 0;
  for (let i = 0; i < ary.length - 1; i++) {
    const [left, right] = [
      getSafetyRomanNum(ary[i]),
      getSafetyRomanNum(ary[i + 1]),
    ];
    if (left < right) sum -= left;
    else sum += left;
  }
  sum += getSafetyRomanNum(ary[ary.length - 1]);
  return sum;
}
