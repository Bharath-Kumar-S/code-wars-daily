// https://leetcode.com/problems/maximum-average-subarray-i

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000

import assert from "assert";

const findMaxAverage = (nums, k) => {
  let sum = 0,
    max;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  max = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    max = Math.max(sum, max);
  }

  return max / k;
};

assert.deepEqual(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75);

// T / C - O(N);
// S / C - O(1);
