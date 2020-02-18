// Write a function 'sameFrequency' which takes in 2 positive integers
// and returns if the 2 numbers have the same frequency of digits.

// Solution MUST have O(n) time complexity.

function sameFrequency(n1, n2) {
  let strNum1 = '' + n1;
  let strNum2 = '' + n2;
  if (strNum1.length !== strNum2.length) return false;

  const counter = {};
  for (let digit of strNum1) {
    counter[digit] ? (counter[digit] += 1) : (counter[digit] = 1);
  }

  for (let digit of strNum2) {
    if (!counter[digit]) return false;
    counter[digit] -= 1;
  }

  return true;
}

// Test Cases
console.log(sameFrequency(182, 182) === true);
console.log(sameFrequency(34, 14) === false);
console.log(sameFrequency(3589578, 5879385) === true);
console.log(sameFrequency(22, 222) === false);
