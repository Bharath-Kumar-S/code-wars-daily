// https://www.greatfrontend.com/questions/javascript/make-counter

// Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

// Examples
// const counter = makeCounter();
// counter(); // 0
// counter(); // 1
// counter(); // 2
// With a custom initial value:

// const counter = makeCounter(5);
// counter(); // 5
// counter(); // 6
// counter(); // 7

const makeCounter = (initialValue = 0) => {
  let count = initialValue;
  return () => {
    return count++;
  };
};

import assert from "assert";
const counter1 = makeCounter();
assert.strictEqual(counter1(), 0);
assert.strictEqual(counter1(), 1);
assert.strictEqual(counter1(), 2);

const counter2 = makeCounter(5);
assert.strictEqual(counter2(), 5);
assert.strictEqual(counter2(), 6);
assert.strictEqual(counter2(), 7);
