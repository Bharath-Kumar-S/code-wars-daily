// https://www.greatfrontend.com/questions/javascript/from-pairs

// Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.

// fromPairs(pairs);
// Arguments
// pairs (Array): An array of key-value pairs.
// Returns
// (Object): Returns the object composed from the key-value pairs.

// Examples
// const pairs = [
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ];

// fromPairs(pairs); // => { a: 1, b: 2, c: 3 }

import assert from "assert";

function fromPairs(pairs) {
  const result = {};
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  return result;
}
assert.deepStrictEqual(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]),
  { a: 1, b: 2, c: 3 }
);
assert.deepStrictEqual(
  fromPairs([
    ["x", 10],
    ["y", 20],
  ]),
  { x: 10, y: 20 }
);
assert.deepStrictEqual(fromPairs([]), {});
