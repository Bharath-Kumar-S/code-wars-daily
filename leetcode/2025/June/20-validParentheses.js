// https://leetcode.com/problems/valid-parentheses/

import assert from "assert";

const isValid = (s) => {
  let stack = [];

  const tokens = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (tokens[s[i]]) {
      stack.push(s[i]);
    } else {
      if (tokens[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

assert.deepEqual(isValid("()"), true);

T / C - O(N);
S / C - O(N);
