// * 0 <= nums.length <= 3 * 104
// * -100 <= nums[i] <= 100
// * nums is sorted in non-decreasing order.

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  const len = nums.length;
  let temp = nums[0];
  nums.push(temp);
  for (let i = 1; i < len; i++) {
    if (temp !== nums[i]) {
      nums.push(nums[i]);
    }
    temp = nums[i];
  }
  nums.splice(0, len);
  return nums.length;
}

export { removeDuplicates };
