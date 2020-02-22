// Write a function 'factorial' which accepts a number and returns the
// factorial of that number.

// A factorial is the product of an integer and all the integers below it;
// e.g., factorial 4 = 4! = 4 * 3 * 2 * 1 = 24

// 0! is always 1

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

// Gotta love the one liner...
const f = n => (n < 2 ? 1 : n * f(n - 1));

console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(4) === 24);
console.log(factorial(7) === 5040);
