Array.prototype.square = function () {
  if (!Array.isArray(this)) {
    throw new TypeError("This method can only be called on arrays");
  }

  return this.map((item) => {
    if (typeof item !== "number") {
      throw new TypeError("All elements must be numbers");
    }
    return item * item;
  });
};

import assert from "assert";
assert.deepStrictEqual(
  [1, 2, 3].square(),
  [1, 4, 9],
  "Square of [1, 2, 3] should be [1, 4, 9]"
);
assert.deepStrictEqual(
  [4, 5, 6].square(),
  [16, 25, 36],
  "Square of [4, 5, 6] should be [16, 25, 36]"
);
