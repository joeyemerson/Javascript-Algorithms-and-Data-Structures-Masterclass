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

**KMP Overview** \
[![KMP Overview Video](http://img.youtube.com/vi/BXCEFAzhxGY/0.jpg)](http://www.youtube.com/watch?v=BXCEFAzhxGY 'KMP Overview')

**Building a Pattern Table** \
[![Building a Pattern Table Video](http://img.youtube.com/vi/KG44VoDtsAA/0.jpg)](http://www.youtube.com/watch?v=KG44VoDtsAA 'Building a Pattern Table')

**Simple Pattern Table Creation and Use** \
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

### Another KMP Search...

```js
// Construct a table with table[i] as the length of the longest prefix of the substring 0..i
function longestPrefix(str) {
  // create a table of size equal to the length of `str`
  // table[i] will store the prefix of the longest prefix of the substring str[0..i]
  var table = new Array(str.length);
  var maxPrefix = 0;
  // the longest prefix of the substring str[0] has length
  table[0] = 0;

  // for the substrings the following substrings, we have two cases
  for (var i = 1; i < str.length; i++) {
    // case 1. the current character doesn't match the last character of the longest prefix
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      // if that is the case, we have to backtrack, and try find a character  that will be equal to the current character
      // if we reach 0, then we couldn't find a chracter
      maxPrefix = table[maxPrefix - 1];
    }
    // case 2. The last character of the longest prefix matches the current character in `str`
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      // if that is the case, we know that the longest prefix at position i has one more character.
      // for example consider `-` be any character not contained in the set [a-c]
      // str = abc----abc
      // consider `i` to be the last character `c` in `str`
      // maxPrefix = will be 2 (the first `c` in `str`)
      // maxPrefix now will be 3
      maxPrefix++;
      // so the max prefix for table[9] is 3
    }
    table[i] = maxPrefix;
  }
  return table;
}

// Find all the patterns that matches in a given string `str`
// this algorithm is based on the Knuth–Morris–Pratt algorithm. Its beauty consists in that it performs the matching in O(n)
function kmpMatching(str, pattern) {
  // find the prefix table in O(n)
  var prefixes = longestPrefix(pattern);
  var matches = [];

  // `j` is the index in `P`
  var j = 0;
  // `i` is the index in `S`
  var i = 0;
  while (i < str.length) {
    // Case 1.  S[i] == P[j] so we move to the next index in `S` and `P`
    if (str.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;
    }
    // Case 2.  `j` is equal to the length of `P`
    // that means that we reached the end of `P` and thus we found a match
    if (j === pattern.length) {
      matches.push(i - j);
      // Next we have to update `j` because we want to save some time
      // instead of updating to j = 0 , we can jump to the last character of the longest prefix well known so far.
      // j-1 means the last character of `P` because j is actually `P.length`
      // e.g.
      // S =  a b a b d e
      // P = `a b`a b
      // we will jump to `a b` and we will compare d and a in the next iteration
      // a b a b `d` e
      //     a b `a` b
      j = prefixes[j - 1];
    }
    // Case 3.
    // S[i] != P[j] There's a mismatch!
    else if (str.charAt(i) !== pattern.charAt(j)) {
      // if we have found at least a character in common, do the same thing as in case 2
      if (j !== 0) {
        j = prefixes[j - 1];
      } else {
        // otherwise, j = 0, and we can move to the next character S[i+1]
        i++;
      }
    }
  }

  return matches.length;
}
```
