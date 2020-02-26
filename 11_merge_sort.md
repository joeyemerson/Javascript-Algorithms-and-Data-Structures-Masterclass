# Merge Sort

- Bubble, Insertion, and Selection sort do not scale well
- Try bubble sort on an array of 100,000 elements. (Hint: it takes a while!)

**Faster Sorts**

- There is a family of sorting algorithms that can improve time complexity from O(_n_<sup>2</sup>) to O(_n_ log _n_)
- There is a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand

## What is Merge Sort?

- It's a combination of two things: merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

**How does it work?**

We start by dividing the array into smaller arrays until they are all 0 or 1 elements.

<!-- prettier-ignore-start -->
[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3, 5, 4] [7, 6, 1, 2]

[8, 3] [5, 4] [7, 6] [1, 2]

[8] [3] [5] [4] [7] [6] [1] [2]

Now we merge them back together.

[8] [3] [5] [4] [7] [6] [1] [2]

[3, 8] [4, 5] [6, 7] [1, 2]

[3, 4, 5, 8] [1, 2, 6, 7]

[1, 2, 3, 4, 5, 6, 7, 8]
<!-- prettier-ignore-end -->

## Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in O(_n_ + _m_) time and O(_n_ + _m_) space and **should not** modify the parameters passed to it

#### Pseudocode

- Create an empty array, take a look at the smallest values in each param array
- While there are still values we haven't looked at:
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our result array, and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into the result array, and move on to the next value in the second array
  - Once we finish one array, push in all remaining values from the other array

#### Merge Function

```js
function merge(arr1, arr2) {
  const res = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      res.push(arr1[idx1]);
      idx1++;
    } else if (arr2[idx2] < arr1[idx1]) {
      res.push(arr2[idx2]);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    res.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    res.push(arr2[idx2]);
    idx2++;
  }

  return res;
}

merge([1, 10, 50], [2, 14, 99, 100]); // [1, 2, 10, 14, 50, 99, 100]
```

## Implementation

#### Merge Sort Pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with the other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

#### Merge Sort

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

## Big O

**Time Complexity**

- Best: O(_n_ log _n_)
- Average: O(_n_ log _n_)
- Worst: O(_n_ log _n_)

Space Complexity: O(_n_)
