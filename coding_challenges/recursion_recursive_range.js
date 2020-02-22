// Write a function 'recursiveRange' which accepts a number and adds up
// all the numbers from 0 to the number.

function recursiveRange(n) {
  if (n === 0) return n;
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(6) === 21);
console.log(recursiveRange(10) === 55);
