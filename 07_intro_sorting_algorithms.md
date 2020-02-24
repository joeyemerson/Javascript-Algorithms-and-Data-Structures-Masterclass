# Intro to Sorting Algorithms

## What is Sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

**Examples**

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on the release year

**Why Learn?**

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages

[Sorting Algorigthms Animation](https://www.toptal.com/developers/sorting-algorithms)

## Built-In JavaScript Sort Method

**Array.sort()**

```js
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
// ['Algorithms', 'Colt', 'Data Structures', 'Steele']

[6, 4, 15, 10].sort();
// [10, 15, 4, 6] <== obviously not numerical sort
```

- The built-in sort method accepts an optional _comparator_ function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (_a_ and _b_), and determines their sort order based on the return value
  - If it returns a negative number, _a_ should come before _b_
  - If it returns a positive number, _a_ should come after _b_
  - If it returns 0, _a_ and _b_ are the same as far as the sort method is concerned

#### Sort by Numeric Value Ascending

```js
function numberCompare(n1, n2) {
  return n1 - n2;
}

[6, 4, 15, 10].sort();
// [4, 6, 10, 15]
```

#### Sort by Length

```js
function compareByLength(s1, s2) {
  return s1.length - s2.length;
}

['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
// ['Colt', 'Steele', 'Algorithms', 'Data Structures']
```
