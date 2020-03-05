# Singly Linked Lists

## What is a linked list?

It is a data structure that contains a **head**, **tail**, and **length property**.

Linked lists consist of nodes, and each **node** has a **value** (piece of data) and a **pointer** to another node or null.

There are no indexes. You always have to start at the beginning.

![Linked List](./img/Linkedlist.png 'Linked List')

## Comparisons with Arrays

**Lists**

- Do not have indexes!
- Connected via nodes with a **next** pointer
- Random access is not allowed

**Arrays**

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

## Methods from This Implementation

| Method           | Description                     | Big O  |
| :--------------- | :------------------------------ | :----: |
| push(val)        | Insert at end                   |  O(1)  |
| pop()            | Remove from end                 | O(_n_) |
| shift()          | Remove from beginning           |  O(1)  |
| unshift(val)     | Insert at beginning             |  O(1)  |
| get(pos)         | Get node by position            | O(_n_) |
| set(pos, val)    | Update value by position        | O(_n_) |
| insert(pos, val) | Add at specific position        | O(_n_) |
| remove(pos)      | Remove from a specific position | O(_n_) |

## Implementation

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return null;

    let newTail = null;
    let curNode = this.head;

    while (curNode.next) {
      newTail = curNode;
      curNode = curNode.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return curNode;
  }

  shift() {
    if (!this.head) return null;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;

    return this;
  }

  get(pos) {
    if (this.length <= pos || pos < 0) return null;
    if (this.length === pos) return this.tail;

    let curNode = this.head;
    let curPos = 0;

    while (curPos < pos) {
      curNode = curNode.next;
      curPos++;
    }

    return curNode;
  }

  set(pos, val) {
    const foundNode = this.get(pos);

    if (!foundNode) {
      return false;
    }

    foundNode.val = val;
    return true;
  }

  insert(pos, val) {
    if (this.length < pos || pos < 0) return false;
    if (pos === this.length) return !!this.push(val);
    if (pos === 0) return !!this.unshift(val);

    newNode = new Node(val);
    prevNode = this.get(pos - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  remove(pos) {
    if (this.length <= pos || pos < 0) return undefined;
    if (pos === this.length - 1) return this.pop();
    if (pos === 0) return this.shift();

    const prevNode = this.get(pos - 1);
    const curNode = prevNode.next;
    prevNode.next = curNode.next;
    this.length--;

    return curNode;
  }

  reverse() {
    if (this.length < 2) return this;

    let curNode = this.head;
    this.head = this.tail;
    this.tail = curNode;

    let prevNode = null;

    while (curNode) {
      curNode.next = prevNode;
      prevNode = curNode;
      curNode = prevNode.next;
    }

    return this;
  }
}

myList = new SinglyLinkedList();
```

## Recap

- Singly linked lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built-in index wheras linked lists do not
- The idea of a list data structure consisting of nodes is the foundation for other data structures like stacks and queues
