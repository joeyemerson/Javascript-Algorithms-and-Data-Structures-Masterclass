// Write a function 'power' that accepts a base and an exponent.

// The function should return the power of the base to the exponent.

// This function should mimic the functionality of Math.pow()

// Do not worry about negative bases and exponents (or, you know... do.)

function power(n, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return n;
  return n * power(n, exp - 1);
}

console.log(power(2, 0) === 1);
console.log(power(2, 2) === 4);
console.log(power(2, 4) === 16);
