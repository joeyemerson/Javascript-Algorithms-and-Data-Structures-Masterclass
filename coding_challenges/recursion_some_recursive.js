// Write a recursive function 'someRecursive' which accepts an array and a callback.

// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise, it returns false.

const isOdd = val => val % 2 !== 0;

function someRecursive(a, cb) {
  if (a.length === 0) return false;
  if (cb(a[0])) return true;
  return someRecursive(a.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], isOdd) === true);
console.log(someRecursive([4, 6, 8, 9], isOdd) === true);
console.log(someRecursive([4, 6, 8], isOdd) === false);
console.log(someRecursive([4, 6, 8], val => val > 10) === false);
