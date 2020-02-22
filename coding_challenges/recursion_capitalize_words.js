// Write a recursive function 'capitalizeWords'

// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(a) {
  if (a.length === 1) return [a[0].toUpperCase()];
  let res = capitalizeWords(a.slice(0, -1));
  res.push(a.slice(-1)[0].toUpperCase());
  return res;
}

function arraysAreEqual(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(arraysAreEqual(capitalizeWords(words), ['I', 'AM', 'LEARNING', 'RECURSION']));
console.log(capitalizeWords(words));
