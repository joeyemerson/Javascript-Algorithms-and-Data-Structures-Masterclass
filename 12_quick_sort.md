# Quick Sort

- Similar to merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivod should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## How does it work?

[ 5, 2, 1, 8, 4, 7, 6, 3]

Using 5 (index 0) as the pivot, all the elements that are less than 5 go to the left and all elements that are greater than 5 go to the right.

[ 2, 1, 4, 3, 5, 8, 7, 6]

Both sides are not sorted, but 5 is in the correct spot. The pivot can be any index -- will work regardless. Quick sort can be called recursively on both the left and right sides until the length of the array inputs are 0 or 1 in length.

quickSort([ 2, 1, 4, 3 ]) << sort left
quickSort([ 8, 7, 6 ]) << sort right

## Pivot Helper

- In order to implement quick sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter
- The helper should do this **in place**, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

### Picking a Pivot

- The runtime of quick sort depends in part on how you select the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, choose the pivot to be the first element to start

### Pivot Pseudocode

- It will accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (start index + 1 initially)
- Loop through array from (start index + 1) until end
  - If pivot value is greater than the current element value, increment the pivot index var and swap the current element with the element at the start index
- Swap the starting element (pivot in this case) with the pivot index
- Return the pivot index

### Pivot Example

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
```

## Quick Sort Pseudocode

- Base case occurs when you consider a subarray with less than 2 elements
- Call the pivot helper on the array
- When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index

## Quick Sort

```js
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
```

## Big O

**Time Complexity**

- Best: O(_n_ log _n_)
- Average: O(_n_ log _n_)
- Worst: O(_n_<sup>2</sup>)

**Space Complexity**

- O(log _n_)
