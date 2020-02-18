# Problem Solving Patterns

## Frequency Counter
This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(*n*<sup>2</sup>) operations with arrays/strings.

### Example
```js
// Write a function called 'same' which accepts two arrays.

// The function should return true if every value in the array
// has its corresponding value squared in the second array.

// The frequency of values must be the same.

// Naive Solution - O(n^2) Time Complexity
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// Refactored - O(n) Time Complexity
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// Test Cases
console.log(same([1, 2, 3], [4, 1, 9]) === true);
console.log(same([1, 2, 3], [1, 9]) === false);
console.log(same([1, 2, 1], [4, 4, 1]) === false);
```

### Anagram Example
```js
// Given two strings, write a function to determine if the second
// string is an anagram of the first.

// An anagram is a word, phrase, or name formed by rearranging the
// letters of another, such as 'cinema' formed from 'iceman.'

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < s1.length; i++) {
        let letter = s1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < s2.length; i++) {
        let letter = s2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

// Test Cases
console.log(isAnagram('', '') === true);
console.log(isAnagram('aaz', 'zza') === false);
console.log(isAnagram('anagram', 'nagaram') === true);
console.log(isAnagram('rat', 'car') === false);
console.log(isAnagram('awesome', 'awesom') === false);
console.log(isAnagram('qwerty', 'qeywrt') === true);
```

## Multiple Pointers
Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well.

### Example
```js
// Write a function called 'sumZero' which accepts a sorted array of integers.

// The function should find the first pair where the sum is 0.

// Return an array that includes both values that sum to zero or undefined
// if a pair does not exist.

// Naive Solution - O(n^2) Time Complexity
function sumZero(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i] + a[j] === 0) {
                return [a[i], a[j]];
            }
        }
    }
}

// Refactored - O(n) Time Complexity, O(1) Space Complexity
function sumZero(a) {
    let left = 0;
    let right = a.length - 1;
    while (left < right) {
        let sum = a[left] + a[right];
        if (sum === 0) {
            return [a[left], a[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// Test Cases
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
```

### Count Unique Values Example
```js
// Implement a function 'countUniqueValues' which accepts a sorted array,
// and counts the unique values in the array.

// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(a) {
    if (a.length === 0) return 0;
    let i = 0;
    for (j = 1; j < a.length; j++) {
        if (a[i] !== a[j]) {
            i++;
            a[i] = a[j];
        }
    }
    return i + 1;
}

// Test Cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]) === 2);
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7);
console.log(countUniqueValues([]) === 0);
console.log(countUniqueValues([-2, -1, -1, 0, 1]) === 4);
```

## Sliding Window
This pattern involves creating a window which can either be an array or number from on position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string.

### Example
```js
// Write a function 'maxSubarraySum' which accepts an array of integers
// and a number called n.

// The function should calculate the maximum sum of n consecutive
// elements in the array.

// Naive Solution - O(n^2) Time Complexity
function maxSubarraySum(a, n) {
    if (n > a.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < a.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += a[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// Refactored - O(n) Time Complexity
function maxSubarraySum(a, n) {
    if (arr.length < n) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < a.length; i++) {
        tempSum = tempSum - a[i-n] + a[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// Test Cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10);
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17);
console.log(maxSubarraySum([4, 2, 1, 6], 1) === 6);
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13);
console.log(maxSubarraySum([], 4) === null);
```

## Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.

This will be covered in depth during the sorting and searching algorithms sections.