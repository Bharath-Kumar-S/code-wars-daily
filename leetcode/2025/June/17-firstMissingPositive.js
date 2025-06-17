// https://leetcode.com/problems/first-missing-positive/
//

const firstMissingPositive = function (nums, target = 1) {
  const set = new Set(nums);
  while (set.has(target)) {
    target++;
  }
  return target;
};

// time complexity is O(n) because we iterate through the array once to create the set, and then we check for the first missing positive integer in a while loop that runs at most n times in the worst case.
// space complexity is O(n) because we use a set to store the elements of the array, which can take up to n space in the worst case.

// Example usage:
// console.log(firstMissingPositive([1, 2, 0])); // Output: 3
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
// console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1

const fistMissingPositive2 = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};
