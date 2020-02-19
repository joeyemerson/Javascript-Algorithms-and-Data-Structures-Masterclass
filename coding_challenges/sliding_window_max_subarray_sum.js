// Given an array of integers and a number, write function 'maxSubarraySum'
// that finds the maximum sum of a subarray with the length of the number
// passed to the function.

// Note that a subarray must consist of consecutive elements from the
// original array.

// In the first example below, [100, 200, 300] is a subarray of the original
// array, but [100, 300] is not.

// Constraints: O(n) time, O(1) space

function maxSubarraySum(arr, len) {
  if (arr.length < len) return null;

  let largest = 0;
  for (let i = 0; i < len; i++) {
    largest += arr[i];
  }

  let curSum = largest;
  for (let i = len; i < arr.length; i++) {
    curSum += arr[i] - arr[i - len];
    largest = Math.max(largest, curSum);
  }
  return largest;
}

// Test Cases
console.log(maxSubarraySum([100, 200, 300, 400], 2) === 700);
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39);
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5);
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5);
console.log(maxSubarraySum([2, 3], 3) === null);
