# Tree Traversal

## Breadth First Search (BFS)

In BFS, you visit every sibling node on the same level before moving down the tree.

### BFS Steps

- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeue, add it to the queue
  - If there is a right property on the node dequeued, add it to the queue
- Return the variable that stores the values

### Example

**Goal: Traverse example tree and return an array with all items in the tree.** \
![Example Tree](./img/example-binary-tree.png 'Example Tree')

**First, we set up a simple tree from the image above.**

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const tree = new Tree();
tree.root = new TreeNode(5);
tree.root.left = new TreeNode(15);
tree.root.left.left = new TreeNode(20);
tree.root.left.right = new TreeNode(30);
tree.root.right = new TreeNode(25);
tree.root.right.left = new TreeNode(2);
tree.root.right.right = new TreeNode(10);
```

**Tree Traversal (Queue is from Stacks and Queues notes)**

```js
function breadthFirstSearch(tree) {
  const queue = new Queue();
  const visitedNodeVals = [];

  queue.enqueue(tree.root);

  while (queue.size) {
    const curNode = queue.dequeue();
    visitedNodeVals.push(curNode.val);
    if (curNode.left) queue.enqueue(curNode.left);
    if (curNode.right) queue.enqueue(curNode.right);
  }

  return visitedNodeVals;
}

console.log(breadthFirstSearch(tree)); // [5, 15, 25, 20, 30, 2, 10]
```

## Depth First Search (DFS)

Visit nodes vertically down through the tree before visiting sibling nodes.

### DFS - PreOrder Steps

You visit the root first and visit all nodes as you traverse the tree before looking at children.

- Create variable to store the values of nodes visited
- Write a helper function that takes in a node as an argument
  - Push the value of the node to the visited array
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with tree.root
- Return array of visited values

### DFS - PreOrder Example

**Using the same simple tree.** \
![Example Tree](./img/example-binary-tree.png 'Example Tree')

```js
function dfsPreOrder(tree) {
  const visitedNodeVals = [];

  function traverse(node) {
    visitedNodeVals.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);
  return visitedNodeVals;
}

console.log(dfsPreOrder(tree)); // [ 5, 15, 20, 30, 25, 2, 10 ]
```

### DFS - PostOrder Steps

You explore all child nodes before actually visiting any nodes.

- Create a variable to store the values of visited nodes
- Write a helper function that accepts a node
  - If node has a left, call the helper function with node.left
  - If node has a right, call the helper function with node.right
  - Push node.val to visited nodes array
- Invoke helper function with the tree.root

### DFS - PostOrder Example

**Again, using the same simple tree.** \
![Example Tree](./img/example-binary-tree.png 'Example Tree')

```js
function dfsPostOrder(tree) {
  const visitedNodeVals = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visitedNodeVals.push(node.val);
  }

  traverse(tree.root);
  return visitedNodeVals;
}

console.log(dfsPostOrder(tree)); // [ 20, 30, 15, 2, 10, 25, 5 ]
```

### DFS - InOrder Steps

You explore the entire left side before moving onto the right. Nodes are visited after exploring an entire side as opposed to visiting ALL children first.

- Create a variable to store the values of visited nodes
- Write a helper function that accepts a node
  - If node has a left, call the helper function with node.left
  - Push node.val to visited nodes array
  - If node has a right, call the helper function with node.right
- Invoke helper function with the tree.root

### DFS - InOrder Example

**Still using the same damn tree.** \
![Example Tree](./img/example-binary-tree.png 'Example Tree')

```js
function dfsInOrder(tree) {
  const visitedNodeVals = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    visitedNodeVals.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);
  return visitedNodeVals;
}

console.log(dfsInOrder(tree)); // [ 20, 15, 30, 5, 2, 25, 10 ]
```

## BFS versus DFS

Breadth first has a much higher space complexity because it stores ALL nodes on a single level in a queue before visiting the nodes.

Depth first search only stores all nodes down a vertical line.

Time complexity is the same. You visit every node once in all searches.

### Use Cases

- DFS - InOrder returns data in order if used on a BST (Binary Search Tree)
- DFS - PreOrder would work well to flatten and store and be able to recreate the tree exactly
