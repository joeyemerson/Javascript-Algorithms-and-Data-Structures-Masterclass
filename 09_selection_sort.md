# Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position. It only makes one swap for each pass through the array.

Time Complexity: O(_n_<sup>2</sup>)

#### Selection Sort Pseudocode

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "min" and continue until the end of the array
- If the "min" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

#### Selection Sort

```js
function selectionSort(arr) {
  const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (arr[min] !== arr[i]) swap(min, i, arr);
  }

  return arr;
}
```
