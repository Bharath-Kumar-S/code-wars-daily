// https://leetcode.com/problems/two-sum/

import assert from "assert";

const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    else map.set(nums[i], i);
  }
  return [];
};

assert.deepEqual(twoSum([2, 7, 1, 6], 7), [2, 3]);
assert.deepEqual(twoSum([1, 2, 3, 4, 5], 8), [2, 4]);
