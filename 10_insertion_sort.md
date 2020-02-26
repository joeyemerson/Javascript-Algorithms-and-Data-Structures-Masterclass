# Insertion Sort

Builds up the sort by gradually creating a larger left half of the array which is always sorted.

Time Complexity:

- Worst Case: O(_n_<sup>2</sup>)
- Best Case: O(_n_) with almost sorted data

#### Insertion Sort Pseudocode

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted

#### Insertion Sort

```js
function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (0 <= j && currentVal < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}
```

## Bubble, Insertion, and Selection Sort Big O Recap

| Algorithm      |    Time (Best)     |   Time (Average)   |    Time (Worst)    | Space |
| -------------- | :----------------: | :----------------: | :----------------: | :---: |
| Bubble Sort    |       O(_n_)       | O(_n_<sup>2</sup>) | O(_n_<sup>2</sup>) | O(1)  |
| Insertion Sort |       O(_n_)       | O(_n_<sup>2</sup>) | O(_n_<sup>2</sup>) | O(1)  |
| Selection Sort | O(_n_<sup>2</sup>) | O(_n_<sup>2</sup>) | O(_n_<sup>2</sup>) | O(1)  |
