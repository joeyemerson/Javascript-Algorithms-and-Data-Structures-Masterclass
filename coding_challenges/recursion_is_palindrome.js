// Write a recursive function 'isPalindrome' which returns true if the string
// passed to it is a palindrome (reads same forward and backward).
// Otherwise, return false.

function isPalindrome(s) {
  if (s.length <= 1) return true;
  if (s[0] !== s.slice(-1)) return false;
  return isPalindrome(s.slice(1, -1));
}

console.log(isPalindrome('awesome') === false);
console.log(isPalindrome('foobar') === false);
console.log(isPalindrome('tacocat') === true);
console.log(isPalindrome('amanaplanacanalpanama') === true);
console.log(isPalindrome('amanaplanacanalpandemonium') === false);
