// https://leetcode.com/problems/single-number/

const singleNumber = function (nums) {
  let a = 0;
  for (let i of nums) {
    a ^= i;
  }
  return a;
};

// time complexity is O(n) because we iterate through the array once.
// space complexity is O(1) because we use a constant amount of space for the variable `a`.

const singleNumber2 = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return [...set][0];
};

// time complexity is O(n) because we iterate through the array once to create the set, and then we convert the set to an array to get the single number.
// space complexity is O(n) because we use a set to store the elements of the array, which can take up to n space in the worst case.

const singleNumber3 = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }

  return [...map.keys()][0];
};

// time complexity is O(n) because we iterate through the array once to create the map, and then we convert the map keys to an array to get the single number.
// space complexity is O(n) because we use a map to store the elements of the array, which can take up to n space in the worst case.

// Example usage:
// console.log(singleNumber([2, 2, 1])); // Output: 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
// console.log(singleNumber([1])); // Output: 1
