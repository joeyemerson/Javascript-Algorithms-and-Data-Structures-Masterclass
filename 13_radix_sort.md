# Radix Sort

## Comparison Sorts

**Average Time Complexity**

- Bubble Sort - O(_n_<sup>2</sup>)
- Insertion Sort - O(_n_<sup>2</sup>)
- Selection Sort - O(_n_<sup>2</sup>)
- Quick Sort - O(_n_ log _n_)
- Merge Sort - O(_n_ log _n_)

Can we do better? Yes, but not by making comparison.

## Overview

Radix sort is a special sorting algorithm that works on lists of numbers.

It never makes comparisons between elements.

It exploits the fact that information about the size of a number is encoded in the number of digits.

More digits means a bigger number.

## Radix Helper Methods

In order to implement radix sort, it's helpful to build a few helper functions.

### getDigit

This returns the digit in _n_ at the given position value (0 based).

```js
function getDigit(n, pos) {
  return Math.floor(Math.abs(n) / Math.pow(10, pos)) % 10;
}
```

### digitCount

Returns the number of digits in _n_.

```js
function digitCount(n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}
```

## Radix Sort Implementation

```js
function radixSort(arr) {
  const maxDigitCount = digitCount(Math.max(...arr));

  for (let k = 0; k < maxDigitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], k)].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}
```

## Big O

**Time Complexity**

- Best: O(_nk_)
- Average: O(_nk_)
- Worst: O(_nk_)

Space Complexity: O(_n_ + _k_)
