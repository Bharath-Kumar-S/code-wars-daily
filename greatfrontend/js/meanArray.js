// https://www.greatfrontend.com/questions/javascript/mean

// Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// Arguments
// array (Array): Array of numbers.
// Returns
// (Number): Returns the mean of the values in array.

// Examples
// mean([4, 2, 8, 6]); // => 5
// mean([1, 2, 3, 4]); // => 2.5
// mean([1, 2, 2]); // => 1.6666666666666667

import assert from "assert";

function mean(array) {
  return array.reduce((acc, val) => acc + val, 0) / array.length;
}

assert.strictEqual(mean([4, 2, 8, 6]), 5);
assert.strictEqual(mean([1, 2, 3, 4]), 2.5);
assert.strictEqual(mean([1, 2, 2]), 1.6666666666666667);
assert.strictEqual(mean([10, 20, 30]), 20);
