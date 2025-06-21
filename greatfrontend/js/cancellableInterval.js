// https://www.greatfrontend.com/questions/javascript/cancellable-interval

// Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID, it returns a function that when called, cancels the interval. The setCancellableInterval function should have the exact same signature as setInterval:

// setCancellableInterval(callback);
// setCancellableInterval(callback, delay);
// setCancellableInterval(callback, delay, param1);
// setCancellableInterval(callback, delay, param1, param2);
// setCancellableInterval(callback, delay, param1, param2, /* … ,*/ paramN);

import assert from "assert";

const setCancellableInterval = (callback, delay, ...args) => {
  const intervalId = setInterval(callback, delay, ...args);
  return () => {
    clearInterval(intervalId);
  };
};

const cb = () => {};
const cancel = setCancellableInterval(cb, 100);
cancel(); // Call to cancel the interval
assert.strictEqual(
  typeof cancel,
  "function",
  "Return value should be a function"
);
