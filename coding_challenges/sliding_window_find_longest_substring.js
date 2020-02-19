// Write a function 'findLongestSubstring' which accepts a string and
// returns the length of the longest substring with all distingct characters.

// Constraints: O(n) time

function findLongestSubstring(s) {
  let longest = 0;
  let seen = new Set();
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (seen[c]) {
      start = Math.max(start, seen[c]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[c] = i + 1;
  }
  return longest;
}

// Test Cases
console.log(findLongestSubstring('') === 0);
console.log(findLongestSubstring('rithmschool') === 7);
console.log(findLongestSubstring('thisisawesome') === 6);
console.log(findLongestSubstring('thecatinthehat') === 7);
console.log(findLongestSubstring('bbbbbb') === 1);
console.log(findLongestSubstring('longestsubstring') === 8);
console.log(findLongestSubstring('thisishowwedoit') === 6);
