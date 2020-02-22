// Write a recursive function 'capitalizeFirst'.

// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(a) {
  if (a.length === 1) {
    return [a[0][0].toUpperCase() + a[0].slice(1)];
  }
  const res = capitalizeFirst(a.slice(0, -1));
  const string = a.slice(-1)[0][0].toUpperCase() + a.slice(-1)[0].slice(1);
  res.push(string);
  return res;
}

function arraysAreEqual(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

console.log(arraysAreEqual(capitalizeFirst(['car', 'taco', 'banana']), ['Car', 'Taco', 'Banana']));
