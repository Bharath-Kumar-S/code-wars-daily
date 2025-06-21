// https://www.greatfrontend.com/questions/javascript/cancellable-timeout

// Implement a function setCancellableTimeout, that acts like setTimeout but instead of returning a timer ID, it returns a function that when called, cancels the pending callback function. The setCancellableTimeout function should have the exact same signature as setTimeout:

// setCancellableTimeout(callback);
// setCancellableTimeout(callback, delay);
// setCancellableTimeout(callback, delay, param1);
// setCancellableTimeout(callback, delay, param1, param2);
// setCancellableTimeout(callback, delay, param1, param2, /* … ,*/ paramN);

import assert from "assert";

const setCancellableTimeout = (callback, delay, ...args) => {
  const timerId = setTimeout(callback, delay, ...args);
  return () => {
    clearTimeout(timerId);
  };
};

assert.strictEqual(
  typeof setCancellableTimeout(() => {}),
  "function",
  "setCancellableTimeout should return a function"
);
assert.strictEqual(
  typeof setCancellableTimeout(() => {}, 100),
  "function",
  "setCancellableTimeout with delay should return a function"
);

const cb = () => {};
const cancel = setCancellableTimeout(cb, 100);
assert.strictEqual(
  typeof cancel,
  "function",
  "Return value should be a function"
);
assert.notStrictEqual(
  cancel,
  cb,
  "Returned function should not be the callback itself"
);
