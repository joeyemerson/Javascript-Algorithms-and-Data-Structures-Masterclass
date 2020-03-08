# Binary Search Trees

## What is a Tree?

A data structure that consists of nodes in a **parent / chiled** relationship.

![Tree](./img/tree.png 'Tree')

Lists - **linear** \
Trees - **non linear**

A node can only point to a child -- not a sibling or parent. A child node can only have one parent. Parent nodes can have multiple children. Trees can only have one root node.

## Tree Terminology

- **Root** - Top node in a tree
- **Child** - Node directly connected to another node when moving away from the root
- **Parent** - The converse notion of a child
- **Siblings** - Group of nodes with the same parent
- **Leaf** - Node with no children
- **Edge** - Connection between one node and another

## How are Trees Used?

- DOM in the browser
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence
- Folders in Operating Systems

## Binary Trees

Binary tree nodes can have, at most, 2 children.

![Binary-Tree](./img/binary-tree.png 'Binary Tree')

## Binary Search Trees

Same as binary tree with the addition of being sorted in a particular order.

- Every parent has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

![Binary-Search-Tree](./img/binary-search-tree.gif 'Binary Search Tree')

## Implementation

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curNode = this.root;

    while (val !== curNode.val) {
      if (val < curNode.val) {
        // Add node to left if no left child
        if (!curNode.left) {
          curNode.left = newNode;
          return this;
        }
        // Else move on to left child for comparison
        curNode = curNode.left;
      } else {
        // newNode value > curNode value
        // Add node to right if no right child
        if (!curNode.right) {
          curNode.right = newNode;
          return this;
        }
        // Else move on to the right child for comparison
        curNode = curNode.right;
      }
    }
    // Assumes the value is already in the tree
    return undefined;
  }

  search(val) {
    if (!this.root) return false;

    let curNode = this.root;

    while (curNode.val !== val) {
      if (val < curNode.val) {
        // No left child - can't be in tree
        if (!curNode.left) {
          return false;
        }
        // Else move on to left child for comparison
        curNode = curNode.left;
      } else {
        // No right child - can't be in tree
        if (!curNode.right) {
          return false;
        }
        // Else move on to the right child for comparison
        curNode = curNode.right;
      }
    }
    // Getting past while loop means we found the value
    return true;
  }

  // Great recursive solution from another course student (Peter)
  // search(val, node=this.root) {
  //   if (!node) return false;

  //   if (node.val === val) return true;

  //   if (val < node.val) return this.find(val, node.left);
  //   else return this.find(val, node.right);
  // }
}
```

## Big O of BST

- Insertion - O(log _n_)
- Searching - O(log _n_)

(not guaranteed!)
