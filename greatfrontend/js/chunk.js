// https://www.greatfrontend.com/questions/javascript/chunk

// Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

// Arguments
// array (Array): The array to process.
// [size=1] (number): The length of each chunk.
// Returns
// (Array): Returns the new array of chunks.

// Examples

// chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
// chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]

import assert from "assert";

function chunk(array, size = 1) {
  if (!Array.isArray(array) || size < 1) {
    return [];
  }

  const result = [];
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === size || i === array.length - 1) {
      result.push(chunk);
      chunk = [];
    }
  }

  return result;
}

assert.deepStrictEqual(chunk(["a", "b", "c", "d"]), [
  ["a"],
  ["b"],
  ["c"],
  ["d"],
]);
assert.deepStrictEqual(chunk([1, 2, 3, 4], 2), [
  [1, 2],
  [3, 4],
]);
assert.deepStrictEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
