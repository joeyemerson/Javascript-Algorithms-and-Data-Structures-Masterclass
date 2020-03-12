# Graph Traversal

## Graph Traversal Uses

- Peer to peer networking
- Web crawlers
- Finding "closest" matches/recommendations
- Shortest path problems
  - GPS navigation
  - Solving mazes
  - AI (shortest path to win game)

## Implementation

The same principles apply to breadth first and depth first searching in graphs as they did in binary trees. I did this example in a JS file, so all code is below. We did three search types:

1. Depth First Search Recursive
2. Depth First Search Iterative
3. Breadth First Search

**All 3 use the same example graph for input**

**Reusing Node, Stack, and Queue classes from previous sections**

![Graph Example](./img/graph-example.png 'Graph Example')

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

class Queue {
  constructor() {
    this.size = 0;
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.front) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }

    this.back = newNode;
    return ++this.size;
  }

  dequeue() {
    if (!this.front) return null;

    const oldfront = this.front;

    if (this.size === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = oldfront.next;
    }

    this.size--;
    return oldfront;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList.hasOwnProperty(vertex)) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.bothValidVertices(vertex1, vertex2)) {
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.bothValidVertices(vertex1, vertex2)) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.hasOwnProperty(vertex)) {
      this.adjacencyList[vertex].forEach(adjacentVertex => {
        this.removeEdge(vertex, adjacentVertex);
      });
    }
    delete this.adjacencyList[vertex];
  }

  // prettier-ignore
  bothValidVertices(vertex1, vertex2) {
    return (
      this.adjacencyList.hasOwnProperty(vertex1) &&
      this.adjacencyList.hasOwnProperty(vertex2)
      )
  }

  dfsRecursive(start) {
    const res = [];
    const seen = new Set();

    const dfs = vertex => {
      if (!vertex) return;
      res.push(vertex);
      seen.add(vertex);
      this.adjacencyList[vertex].forEach(adjacentVertex => {
        if (!seen.has(adjacentVertex)) dfs(adjacentVertex);
      });
    };

    dfs(start);
    return res;
  }

  dfsIterative(start) {
    const res = [];
    const stack = new Stack();
    const seen = new Set();

    stack.push(start);

    while (stack.size) {
      const vertex = stack.pop().val;
      if (!seen.has(vertex)) {
        res.push(vertex);
        seen.add(vertex);
        this.adjacencyList[vertex].forEach(adjacentVertex => {
          stack.push(adjacentVertex);
        });
      }
    }

    return res;
  }

  bfs(start) {
    const res = [];
    const queue = new Queue();
    const seen = new Set();

    queue.enqueue(start);
    seen.add(start);

    while (queue.size) {
      const vertex = queue.dequeue().val;
      res.push(vertex);
      this.adjacencyList[vertex].forEach(adjacentVertex => {
        if (!seen.has(adjacentVertex)) {
          seen.add(adjacentVertex);
          queue.enqueue(adjacentVertex);
        }
      });
    }

    return res;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dfsRecursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.dfsIterative('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(g.bfs('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```
