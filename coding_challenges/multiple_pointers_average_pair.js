// Write a function 'averagePair' that takes in a sorted array of integers
// and a target average.

// Determine if there is a pair of values in the array where the average
// of the pair equals the target average.

// There may be more than one pair that matches the average target.

// Bonus Constraints: O(n) time, O(1) space

function averagePair(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const avg = (nums[start] + nums[end]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

// Test Cases
console.log(averagePair([1, 2, 3], 2.5) === true);
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true);
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false);
console.log(averagePair([], 4) === false);
