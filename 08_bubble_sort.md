# Bubble Sort

**A sorting algorithm where the largest values bubble to the top!**

Time complexity:

- Average: O(_n_<sup>2</sup>)
- Best Case: O(_n_) if nearly sorted

#### Swap Function Examples

```js
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

#### Bubble Sort Pseudocode

```
Start looping with a variable called i at the end of the array moving towards the beginning
  Start and inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values
Return the sorted array
```

#### Bubble Sort Code

```js
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; 0 < i; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
```

#### Bubble Sort Optimization

```js
// Returns sorted array if no swaps are made in a single pass
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let noSwaps;

  for (let i = arr.length; 0 < i; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```
