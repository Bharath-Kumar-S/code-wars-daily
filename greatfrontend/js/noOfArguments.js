const numberOfArguments = () => numberOfArguments.length;

import assert from "assert";
assert.strictEqual(
  numberOfArguments(),
  0,
  "Function should return 0 for no arguments"
);
assert.strictEqual(
  numberOfArguments(1),
  1,
  "Function should return 1 for one argument"
);
assert.strictEqual(
  numberOfArguments(1, 2),
  2,
  "Function should return 2 for two arguments"
);
