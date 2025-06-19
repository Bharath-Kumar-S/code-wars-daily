// https://leetcode.com/problems/container-with-most-water/

import assert from "assert";

const maxArea = (height) => {
  let left = 0,
    right = height.length - 1,
    maxima = 0;
  while (left < right) {
    let l = right - left;
    let h = Math.min(height[left], height[right]);
    let area = l * h;
    maxima = Math.max(area, maxima);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxima;
};

assert.deepEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
