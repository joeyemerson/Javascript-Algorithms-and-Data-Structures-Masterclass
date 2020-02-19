// Write a function 'isSubsequence' which takes in two strings and checks
// whether the characters in the first string form a subsequence of the
// characters in the second string.

// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without
// their order changing.

// Solution MUST have at least O(n + m) time and O(1) space

// Iterative Solution
function isSubsequence(s1, s2) {
  if (!str1) return true;

  let i = 0;
  let j = 0;
  while (j < s2.length) {
    if (s1[i] === s2[j]) i++;
    if (i === s1.length) return true;
    j++;
  }
  return false;
}

// Recursive Solution (not O(1) space)
function isSubsequence(s1, s2) {
  if (s1.length === 0) return true;
  if (s2.length === 0) return false;
  if (s2[0] === s1[0]) return isSubsequence(s1.slice(1), s2.slice(1));
  return isSubsequence(s1, s2.slice(1));
}

// Test Cases
console.log(isSubsequence('hello', 'hello world') === true);
console.log(isSubsequence('sing', 'sting') === true);
console.log(isSubsequence('abc', 'abracadabra world') === true);
console.log(isSubsequence('abc', 'acb') === false);
