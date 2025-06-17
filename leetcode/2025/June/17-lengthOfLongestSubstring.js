// https://leetcode.com/problems/longest-substring-without-repeating-characters

import assert from "assert";

const lengthOfLongestSubstring = (s) => {
  let left = 0,
    right = 0,
    max = 0;
  const set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right++]);
      max = Math.max(max, set.size);
    } else {
      set.delete(s[left++]);
    }
  }

  return max;
};

assert.deepEqual(lengthOfLongestSubstring("abcabcbb"), 3);
