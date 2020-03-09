# Binary Heaps

## What is a Binary Heap?

**Very** similar to a binary search tree, but with some different rules.

In a **MaxBinaryHeap**, parent nodes are always larger than child nodes.

In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.

![Heap](./img/heap.jpg 'Heap')

## Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is **always** greater than its child nodes
- In a Max Binary Heap, the parent is greater than the childred, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible -- all children of each node are as ful as they can be and left children are filled out first

### Implementation

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [null];
  }

  insert(val) {
    this.values.push(val);

    let idx = this.values.length - 1;
    let parentIdx = Math.floor(idx / 2);

    while (0 < parentIdx) {
      const parent = this.values[parentIdx];
      if (val < parent) return this.values;
      this.values[idx] = parent;
      this.values[parentIdx] = val;
      idx = parentIdx;
      parentIdx = Math.floor(idx / 2);
    }

    return this.values;
  }

  extractMax() {
    let n = 1; // start index
    let temp = this.values[n];
    this.values[n] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;

    const max = this.values.pop();
    let swap;

    while (this.values[2 * n] > this.values[n] || this.values[2 * n + 1] > this.values[n]) {
      if (this.values[2 * n] > this.values[n] && this.values[2 * n + 1] > this.values[n]) {
        if (this.values[2 * n] > this.values[2 * n + 1]) {
          swap = 2 * n;
        } else {
          swap = 2 * n + 1;
        }
      } else if (this.values[2 * n] > this.values[n]) {
        swap = 2 * n;
      } else {
        swap = 2 * n + 1;
      }

      temp = this.values[n];
      this.values[n] = this.values[swap];
      this.values[swap] = temp;
      n = swap;
    }
    return max;
  }
}
```

## Priority Queue

A data structure where each element has a priority. Elements with a higher priorites are served before elements with lower priorities.

### Pseudocode

Same as binary heap with small changes:

- Node class added with properties (val, priority)
- Value doesn't matter, heap is constructed using priority

- Write a MinBinaryHeap - lower number means higher priority
- Each node has a val and priority. Use the priority to build the heap.
- **enqueue** method accepts a value and a priority, makes a new node, and puts it in the right spot based off of its priority
- **dequeue** method removes root element, returns it, and rearranges heap using priority

### Implementation

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    return min;
  }
}
```

## Big O Binary Heaps

**Time Complexity**

- Insertion - O(log _n_)
- Removal - O(log _n_)
- Search - O(_n_)

## Recap

- Binary Heaps are useful for sorting and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeap or MinBinaryHeap with parents either being smaller or larger than their children
- With just a little math, we can represent heaps using arrays
