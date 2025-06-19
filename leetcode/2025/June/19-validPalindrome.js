// https://leetcode.com/problems/valid-palindrome/

// const isAlphabet = (s) => /^[a-zA-Z0-9]$/.test(s);

import assert from "assert";

const isAlphabet = (s) => {
  let charCode = s.charCodeAt();

  return (
    (charCode <= 122 && charCode >= 97) || (charCode <= 57 && charCode >= 48)
  );
};

const isPalindrome = (s) => {
  s = s.toLowerCase();

  for (let left = 0, right = s.length - 1; left <= right; ) {
    if (!isAlphabet(s[left])) {
      left++;
      continue;
    }
    if (!isAlphabet(s[right])) {
      right--;
      continue;
    }

    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};

assert.deepEqual(isPalindrome("race car"), true);
