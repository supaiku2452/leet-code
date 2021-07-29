import { isPalindrome, isPalindromeNumberApproach } from "./palindromeNumber";

describe("palindrome number test", () => {
  it.each([
    {
      input: 121,
      expected: true,
    },
    {
      input: 127454721,
      expected: true,
    },
    {
      input: -121,
      expected: false,
    },
    {
      input: 101,
      expected: true,
    },
    {
      input: 10,
      expected: false,
    },
    {
      input: -101,
      expected: false,
    },
  ])("$input ", ({ input, expected }) => {
    expect(isPalindrome(input)).toEqual(expected);
    expect(isPalindromeNumberApproach(input)).toEqual(expected);
  });
});
