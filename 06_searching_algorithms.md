# Searching Algorithms

## Linear Search

**Time Complexity**

- Worst Case: O(_n_)
- Average Case: O(_n_)
- Best Case: O(1)

This is a standard approach for unsorted data. For sorted data, there are better ways.

JavaScript methods like find(), indexOf(), and includes() use linear search.

### Linear Search Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found return -1

### Linear Search Implementation

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

## Binary Search

- Binary search is a must faster form of search
- Rather than eliminating one element at a time, you can eliminate _half_ of the remaining elements at a time
- Binary search only works on _sorted_ arrays

**Time Complexity**

- Worst and Average Case: O(log _n_)
- Best Case: O(1)

### Divide and Conquer

Let's say we are trying to search for 15 in the array:

[ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]

Pick a middle point and determine if that is larger or smaller than the target value. Repeat until you find the value. This example takes only 3 steps rather than searching the entire array.

| Iteration |       Left       | Middle |         Right          |
| :-------- | :--------------: | :----: | :--------------------: |
| 1         | 1, 3, 4, 6, 8, 9 |   11   | 12, 15, 16, 17, 18, 19 |
| 2         |    12, 15, 16    |   17   |         18, 19         |
| 3         |        12        |   15   |           16           |

### Binary Search Pseudocode

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the target value, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

### Binary Search Example

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] < target) {
      left = middle + 1;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

## Naive String Search

Suppose you want to count the number of times a substring appears in a longer string. A straightforward approach involves checking pairs of characters individually.

String: "harold said haha in hamburg"
Pattern: "haha"

### Naive Search Pseudocode

- Loop over the longer string
- Loop over the shorter string
  - If the characters don't match, break out of the inner loop
  - If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

### Naive Search Example

```js
function naiveSearch(s, target) {
  if (s.length < target.length) return 0;

  let matchCount = 0;

  for (let i = 0; i < s.length - target.length + 1; i++) {
    for (let j = 0; j < target.length; j++) {
      if (s[i + j] !== target[j]) break;
      if (j === target.length - 1) matchCount++;
    }
  }
  return matchCount;
}
```

## KMP String Search (Knuth-Morris-Pratt)

Basically you need to understand 2 parts. One, building a pattern table and secondly, using that pattern table in the search algorithm. Here are some video resources:

**KMP Overview**
[![KMP Overview Video](http://img.youtube.com/vi/BXCEFAzhxGY/0.jpg)](http://www.youtube.com/watch?v=BXCEFAzhxGY 'KMP Overview')

**Building a Pattern Table**
[![Building a Pattern Table Video](http://img.youtube.com/vi/KG44VoDtsAA/0.jpg)](http://www.youtube.com/watch?v=KG44VoDtsAA 'Building a Pattern Table')

**Simple Pattern Table Creation and Use**
[![Simple Pattern Table Creation and Use Video](http://img.youtube.com/vi/GTJr8OvyEVQ/0.jpg)](http://www.youtube.com/watch?v=GTJr8OvyEVQ 'Simple Pattern Table Creation and Use')

### KMP Search Example

```js
function computePatternTable(pattern) {
  const table = new Array(pattern.length);
  table[0] = 0;
  let i = 1;
  let j = 0;

  while (i < table.length) {
    // Are the values at i and j equal inside the pattern?
    if (pattern[i] === pattern[j]) {
      // Yes, they are equal.

      // Set table value at position i to the index of j + 1.
      table[i] = j + 1;

      // Increment i and j;
      i++;
      j++;
    } else {
      // No, they are not equal.

      // Can we look at the table at index j - 1?
      if (j - 1 >= 0) {
        // Yes we can.

        // Get the value at j - 1
        const valAtjminus1 = table[j - 1];

        // Jump j to the position stored in the table at j - 1.
        j = valAtjminus1;
      } else {
        // No we cannot.

        // Set table value at position i to the index of j.
        table[i] = j;

        // Increment i;
        i++;
      }
    }
  }

  return table;
}

console.log(computePatternTable('acacabacacabacacac'));
// Output:
// [0, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 4]

function kmpSearch(str, pattern) {
  // Get our pattern table.
  const patternTable = computePatternTable(pattern);

  let i = 0; // A pointer into our str
  let j = 0; // A pointer into our patternTable

  while (i < str.length) {
    // Are the values at indexes i and j a match?
    if (str[i] === pattern[j]) {
      // Yes, they match.

      // Has j reached the end of our pattern table?
      if (j === pattern.length - 1) {
        // Yes, so we found a match starting at i - j.
        return i - j;
      }

      // Increment i and j.
      i++;
      j++;
    } else {
      // No, they do not match.

      // Can we look at the patternTable at index j - 1?
      if (j - 1 >= 0) {
        // Yes we can.

        // Get the value at j - 1 in the patternTable
        const valAtjminus1 = patternTable[j - 1];

        // Jump j to the position stored in the table at j - 1.
        j = valAtjminus1;
      } else {
        // No we cannot.

        // Increment i;
        i++;
      }
    }
  }

  // No match found.
  return -1;
}

console.log(kmpSearch('aaabbbccc', 'bbb')); // 3

// Unit tests (all should return true):
console.log(kmpSearch('aaabbbccc', 'bbb') === 3);
console.log(kmpSearch('aaabbbccc', 'xxx') === -1);
console.log(kmpSearch('This is a test', ' ') === 4);
console.log(kmpSearch('This is a test', 'st') === 12);
console.log(kmpSearch('abcabcabcdabcabc', 'abcd') === 6);
console.log(kmpSearch('a', 'a') === 0);
console.log(kmpSearch('', 'a') === -1);
console.log(kmpSearch('AAAbbbXXX', 'bbXX') === 4);
```
