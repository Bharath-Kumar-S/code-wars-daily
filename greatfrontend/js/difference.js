// https://www.greatfrontend.com/questions/javascript/difference

// Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// Arguments
// array (Array): The array to inspect.
// values (Array): The values to exclude.
// Returns
// (Array): Returns the new array of filtered values.

// Examples
// difference([1, 2, 3], [2, 3]); // => [1]
// difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
// difference([1, 2, 3], [2, 3, 1, 4]); // => []
// difference([1, , 3], [1]); // => [3]

import assert from "assert";

function difference1(array, values) {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError("Both arguments must be arrays");
  }

  return array.filter((item) => !values.includes(item));
}

function difference2(array, values) {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError("Both arguments must be arrays");
  }

  const valueSet = new Set(values);
  return array.filter((item) => !valueSet.has(item) && item !== undefined);
}

assert.deepStrictEqual(difference1([1, 2, 3], [2, 3]), [1]);
assert.deepStrictEqual(difference1([1, 2, 3, 4], [2, 3, 1]), [4]);

assert.deepStrictEqual(difference2([1, 2, 3], [2, 3]), [1]);
assert.deepStrictEqual(difference2([1, 2, 3, 4], [2, 3, 1]), [4]);
