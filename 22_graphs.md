# Graphs

## What are Graphs?

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an **undirected graphs** or a set of ordered pairs for a **directed graph**.

(Nodes + Connections)

![Graph](./img/graph-2.gif 'Graph')

## Uses for Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Many More!

## Graphs Terminology

- Vertex: a node
- Edge: connection between nodes
- Weighted/Unweighted:
  - Unweighted graphs don't have values assigned to edges
- Directed/Undirected
  - All edges are two-way connections in undirected graphs
  - Directed graphs have edges with directions/polarity, often represented by arrows

![Graph](./img/graph.jpg 'Graph')

## Adjacency List vs. Adjacency Matrix

### List

- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

![Adjacency List](./img/adjacency-list.jpg 'Adjacency List')

### Matrix

- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

![Adjacency Matrix](./img/adjacency_matrix.gif 'Adjacency Matrix')

## Adjacency List Implementation

**This will be an undirected graph**

```js
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
      while (this.adjacencyList[vertex].length) {
        this.removeEdge(vertex, this.adjacencyList[vertex].pop());
      }
      delete this.adjacencyList[vertex];
    }
  }

  // prettier-ignore
  bothValidVertices(vertex1, vertex2) {
    return (
      this.adjacencyList.hasOwnProperty(vertex1) &&
      this.adjacencyList.hasOwnProperty(vertex2)
      )
  }
}
```
