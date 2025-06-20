// https://www.greatfrontend.com/questions/javascript/compact

// Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).

// Arguments
// array (Array): The array to compact.
// Returns
// (Array): Returns the new array of filtered values.

// Examples
// compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
// compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]

import assert from "assert";

const compact = (array) => {
  let n = [false, null, 0, "", undefined, NaN];
  return array.filter((a) => !n.includes(a));
};

assert.deepStrictEqual(compact([0, 1, false, 2, "", 3, null]), [1, 2, 3]);
assert.deepStrictEqual(compact(["hello", 123, [], {}, function () {}]), [
  "hello",
  123,
  [],
  {},
  function () {},
]);
