// Implement a function 'areThereDuplicates' which accepts a variable number
// of arguments, and checks whether there are any duplicates among the
// arguments passed in.

// You can solve this using the frequency counter pattern OR the multiple
// pointers pattern.

// Must be O(n) time and O(n) space.
// Bonus for O(n log n) time and O(1) space.

// Frequency Counter Implementation
function areThereDuplicates() {
  if (arguments.length < 2) return false;
  const counter = {};
  for (let i = 0; i < arguments.length; i++) {
    if (counter[arguments[i]]) {
      return true;
    } else {
      counter[arguments[i]] = 1;
    }
  }
  return false;
}

// Multiple Pointers Implementation
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// One liner using a set
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// Test Cases
console.log(areThereDuplicates(1, 2, 3) === false);
console.log(areThereDuplicates(1, 2, 2) === true);
console.log(areThereDuplicates('a', 'b', 'c', 'a') === true);
