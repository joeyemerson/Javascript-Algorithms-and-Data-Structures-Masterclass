// Write a recursive function 'reverse' which accepts a string and returns
// a new string in reverse.

function reverse(s) {
  if (s.length <= 1) return s;
  return s.slice(-1) + reverse(s.slice(0, -1));
  // alternatively:
  // return reverse(s.slice(1)) + s[0]
}

console.log(reverse('awesome') === 'emosewa');
console.log(reverse('rithmschool') === 'loohcsmhtir');
