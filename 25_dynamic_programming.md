# Dynamic Programming

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

It works on problems with:

1. Optimal Substructure
2. Overlapping Subproblems

## Overlapping Subproblems

A problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are reused multiple times.

## Optimal Substructure

A problem is said to have **optimal substructure** if an optimal solution can be constructed from optimal solutions of its subproblems.

## Fibonnaci Sequence Example

```js
// Simple recursive fibonnaci solution
// O(2^n) - Exponential... bad!
function fib(n) {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

// The recursive calls are repeating a lot of work recalculating
// the nth fib number more times as the sequence grows

// Memoized solution
// O(n) - much better!
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// Tabulated solution
function fib(n) {
  if (n < 3) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
```
