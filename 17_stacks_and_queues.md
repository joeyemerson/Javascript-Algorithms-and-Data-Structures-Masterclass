# Stacks and Queues

## Stacks

Stacks are a **LIFO** (Last in, First out) data structure.

The last element added to the stack will be the first element removed from the stack.

As you add items, the last thing (or topmost thing) is what gets removed first.

![Stack](./img/Stack.jpg 'Stack')

**There's more than one way to implement a stack**

### Implement with an Array

```js
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // 3
stack.pop(); // 2
```

### Stack from Scratch

This implementation will build off of a singly linked list structure and use the unshift() and shift() methods as the Stack push() and pop().

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.last) {
      this.first = newNode;
    } else {
      newNode.next = this.last;
    }

    this.last = newNode;
    return ++this.size;
  }

  pop() {
    if (!this.last) return null;

    const oldLast = this.last;

    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.last = oldLast.next;
    }

    this.size--;
    return oldLast;
  }
}
```

### Big O of Stacks

- Insertion: O(1)
- Removal: O(1)
- Searching: O(_n_)
- Access: O(_n_)

## Queues

Queues are a **FIFO** (First in, First out) data structure.

The first element added to the queue will be the first element removed from the stack.

![Queue](./img/Queue.png 'Queue')

### Implement with Array

```js
const queue = [];

queue.push('First');
queue.push('Second');
queue.push('Third');

queue.shift(); // 'First'
queue.shift(); // 'Second'
queue.shift(); // 'Third'
```

### Queue for Real

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.last) {
      this.last = newNode;
    } else {
      this.first.next = newNode;
    }

    this.first = newNode;
    return ++this.size;
  }

  dequeue() {
    if (!this.last) return null;

    const oldLast = this.last;

    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.last = oldLast.next;
    }

    this.size--;
    return oldLast;
  }
}
```

### Big O of Queues

- Insertion: O(1)
- Removal: O(1)
- Searching: O(_n_)
- Access: O(_n_)
