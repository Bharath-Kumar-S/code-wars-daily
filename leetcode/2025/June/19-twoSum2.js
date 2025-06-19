// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

import assert from "assert";

const twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) right--;
    else left++;
  }
  return [];
};

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
