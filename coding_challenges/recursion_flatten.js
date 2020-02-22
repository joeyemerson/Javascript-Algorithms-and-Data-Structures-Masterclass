// Write a recursive function 'flatten' which accepts an array of arrays
// and returns a new array with all values flattened.

function flatten(oldArr) {
  let newArr = [];

  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }

  return newArr;
}

function arraysAreEqual(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

console.log(arraysAreEqual(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]));
console.log(arraysAreEqual(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]));
console.log(arraysAreEqual(flatten([[1], [2], [3]]), [1, 2, 3]));
console.log(arraysAreEqual(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]));
