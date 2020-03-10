# Hash Tables

Hash tables are used to store _key-value_ pairs.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are _fast_ for all of the following operations:

- Finding values
- Adding new values
- Removing values

Nearly every language has some sort of hash table data structure.

- Python: dictionaries
- JavaScript: objects\* & maps
- Java, Go, Scala: maps
- Ruby: hashes

\* Objects have some limitations, but are basically hash tables.

## The Hash Part

This implementation will use an array.

In order to look up values by key, we need a way to convert keys into valid array indices.

A function that performs this task is called a _hash function_.

![Hash Table](./img/hash-table.png 'Hash Table')

### What Makes a Good Hash?

1. Fast (constant time)
2. Doesn't cluster outputs at specific indices (buckets), but distributes uniformly
3. Deterministic (same input yields same output always)

### First Hash Function

**This works on strings only**

```js
function hash(key, arrLen) {
  let total = 0;
  for (const char of key) {
    // map '1' to 1, 'b' to 2, 'c' to 3, etc.
    const value = char.charCodeAt(0) - 96;
    total += value;
  }
  return total % arrLen;
}
```

**Problems**

1. Only hashes strings
2. Not constant time - linear based on key length
3. Could be more random

### Improving the Hash Function

```js
function hash(key, arrLen) {
  const primeNum = 31;
  let total = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const val = char.charCodeAt(0) - 96;
    total = total * primeNum + val;
  }
  return total % arrLen;
}
```

The prime number is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a prime length.

### Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing

#### Separate Chaining

With _separate chaining_, at each index in our array we store values using a more sophisticated data structure (array or linked list).

This allows multiple key-value pairs at the same index.

![Seaparate Chaining](./img/separate-chaining.png 'Seaparate Chaining')

#### Linear Probing

With _linear probing_, when we find a collision, we search through the array to find the next empty slot.

Unlike separate chaining, this allows us to store a single key-value at each index.

![Linear Probing](./img/linear-probing.gif 'Linear Probing')

## Implementation

**This version uses separate chaining for collisions**

```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    const primeNum = 31;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const val = char.charCodeAt(0) - 96;
      total = total * primeNum + val;
    }
    return total % this.keyMap.length;
  }

  // prettier-ignore
  set(key, val) {
    //TODO: test for key and overwrite value if it exists
    const index = this.hash(key);
    this.keyMap[index] ?
      this.keyMap[index].push([key, val]) :
      this.keyMap[index] = [[key, val]];
  }

  get(key) {
    const index = this.hash(key);
    const kvPairs = this.keyMap[index];
    if (kvPairs) {
      // possible performance issue with filter if many clustered k-v pairs at given index
      const match = kvPairs.filter(pair => pair[0] === key);
      if (match.length) return match[0][1];
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    this.keyMap.forEach(bucket => {
      if (bucket) {
        bucket.forEach(item => {
          keysArr.push(item[0]);
        });
      }
    });
    return keysArr;
  }

  // only returns unique values
  values() {
    const valuesArr = [];
    this.keyMap.forEach(bucket => {
      if (bucket) {
        bucket.forEach(item => {
          if (!valuesArr.includes(item[1])) {
            valuesArr.push(item[1]);
          }
        });
      }
    });
    return valuesArr;
  }
}
```

## Big O

(average cases)

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)
