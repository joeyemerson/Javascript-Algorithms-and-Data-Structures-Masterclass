# Dijkstra's (Shortest Path) Algorithm

## What is it?

- One of the most famous and widely used algorithms
- Finds the shortest path between two vertices on a graph
- From Dutch programmer, Edsger Dijkstra

## Why is it Useful

- GPS - finding fastest route
- Network Routing - shortes open path for data
- Biology - model spread of viruses among humans
- Airline Tickets - cheapest route to destination

![Dijkstra's](./img/dijkstras.png "Dijkstra's")

## Implementation

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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList.hasOwnProperty(vertex)) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.bothValidVertices(vertex1, vertex2)) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  // prettier-ignore
  bothValidVertices(vertex1, vertex2) {
    return (
      this.adjacencyList.hasOwnProperty(vertex1) &&
      this.adjacencyList.hasOwnProperty(vertex2)
      )
  }

  dijkstraShortestPath(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};

    let path = [];
    let smallest;

    // build up initial state
    for (const vertex in this.adjacencyList) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      queue.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (queue.values.length) {
      smallest = queue.dequeue().val;

      if (smallest === end) {
        // build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        // path is built in reverse order
        path = path.reverse();
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(neighbor => {
          // calculate distance to neighboring node
          const candidate = distances[smallest] + neighbor.weight;

          if (candidate < distances[neighbor.node]) {
            // updating new smallest distance to neighbor
            distances[neighbor.node] = candidate;

            // updation previous - how we got to neighbor
            previous[neighbor.node] = smallest;

            // enqueue with new priority
            queue.enqueue(neighbor.node, candidate);
          }
        });
      }
    }
    return [start].concat(path);
  }
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.dijkstraShortestPath('A', 'E')); // [ 'A', 'C', 'D', 'F', 'E' ]
```
