// Write a function 'minSubarrayLen' which accepts two parameters:
//    1. An array of positive integers
//    2. A positive integer

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed in.

// If there isn't one, return 0.

// Constraints: O(n) time, O(1) space

function minSubarrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Test Cases
console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7) === 2);
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9) === 2);
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1);
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3);
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5);
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2);
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0);
