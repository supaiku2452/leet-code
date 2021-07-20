export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  let answers = new Set<string>();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
      if (sum === 0) {
        answers.add(
          [nums[i], nums[leftPointer], nums[rightPointer]].toString()
        );
        rightPointer--;
        leftPointer++;
        // break;
      } else if (sum > 0) {
        rightPointer--;
      } else {
        leftPointer++;
      }
    }
  }

  return Array.from(answers).map((v) => v.split(",").map((v) => Number(v)));
}

export function ngThreeSum(nums: number[]): number[][] {
  if (nums.length > 0 && nums.length > 3000) return [];
  let answers = new Set<string>();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          answers.add([nums[i], nums[j], nums[k]].toString());
        }
      }
    }
  }
  return Array.from(answers).map((v) => v.split(",").map((v) => Number(v)));
}
