# Doubly Linked Lists

**Almost** identical to singly linked lists, except every node has **another** pointer to the **previous** node.

![Linked List Comparison](./img/doubly-linked-list.jpeg 'Linked List Comparison')

More memory is required compared to SLL. More memory === more flexibility. It's **almost** always a tradeoff!

## Methods from This Implementation

| Method           | Description                      | Big O  |
| :--------------- | :------------------------------- | :----: |
| push(val)        | Insert at end                    |  O(1)  |
| pop()            | Remove from end                  |  O(1)  |
| shift()          | Remove from beginning            |  O(1)  |
| unshift()        | Add at beginning                 |  O(1)  |
| get(pos)         | Get node by position             | O(_n_) |
| set(pos, val)    | Set value at node by position    | O(_n_) |
| insert(pos, val) | Insert value at node by position | O(_n_) |
| remove(pos)      | Remove node by position          | O(_n_) |

## Implementation

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.length) return undefined;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(pos) {
    if (pos < 0 || this.length <= pos) return null;

    if (pos < Math.floor(this.length / 2)) {
      let curNode = this.head;
      let curIdx = 0;
      while (curIdx < pos) {
        curNode = curNode.next;
        curIdx++;
      }
    } else {
      let curNode = this.tail;
      let curIdx = this.length - 1;
      while (pos < curIdx) {
        curNode = curNode.prev;
        curIdx--;
      }
    }
    return curNode;
  }

  set(pos, val) {
    const targetNode = this.get(pos);
    if (!targetNode) return false;
    targetNode.val = val;
    return true;
  }

  insert(pos, val) {
    if (pos < 0 || this.length < pos) {
      return false;
    } else if (pos === 0) {
      return !!this.unshift(val);
    } else if (pos === this.length) {
      return !!this.push(val);
    } else {
      const prevNode = this.get(pos - 1);
      const newNode = new Node(val);
      const nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;

      this.length++;
      return true;
    }
  }

  remove(pos) {
    if (pos < 0 || this.length <= pos) {
      return undefined;
    } else if (pos === 0) {
      return this.shift();
    } else if (pos === this.length) {
      return this.pop();
    } else {
      const prevNode = this.get(pos - 1);
      const curNode = prevNode.next;
      const nextNode = curNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      newNode.next = null;
      newNode.prev = null;

      this.length--;
      return curNode;
    }
  }
}
```

## Recap

- Doubly linked lists are almost identical to singly linked lists except there is an additional pointer to previous nodes
- Better than SLL for finding nodes and can be done in half the time
- THey do take more memory because of the extra pointer to "previous"
