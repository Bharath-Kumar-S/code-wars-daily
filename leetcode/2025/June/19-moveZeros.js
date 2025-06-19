// https://leetcode.com/problems/move-zeroes

import assert from "assert";

const moveZeros = (nums) => {
  let left = 0,
    right = 0;
  while (right <= nums.length - 1) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};

assert.deepEqual(moveZeros([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// T / C - O(N)
// S / C - O(1)
