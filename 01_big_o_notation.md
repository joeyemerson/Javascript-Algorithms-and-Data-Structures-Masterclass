# Big O Notation

## What is the need?
Imagine there are multiple implementations of the same function. Which is best?

* It's important to have a precise vocabulary to talk about how our code performs
* Useful for discussing trade-offs between different approaches
* When your code slows down or crashes, identifying parts of the code that are inefficient can help find pain points in applications
* It comes up in interviews!

## An Example
Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number *n*.

```js
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

function addUpTo(n) {
    return n * (n + 1) / 2;
}
```

**Which is better?** \
The second solution will run *much* faster than the first (espcially with very large numbers). Rather than count the exact runtime of different solutions, count the number of simple operations the computer has to perform.

In the second solution, no matter how large the number, the computer only has to run 3 simple mathematical operations. In the first, it has to perform the addition and assignment operations *n* times.

Solution 1: O(*n*) time complexity \
Solution 2: O(1) time complexity

**Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.**

We say that an algorithm is **O(f(*n*))** if the number of simple operations the computer has to do is eventually less than a constant time **f(*n*)** as ***n*** increases.
* f(*n*) could be linear (f(*n*) = *n*)
* f(*n*) could be quadratic (f(*n*) = *n*<sup>2</sup>)
* f(*n*) could be constant (f(*n*) = 1)
* f(*n*) could be something entirely different!

![Big O Chart](./img/big_o_chart.png "Big O Chart")

In the below example, the first loop will have O(n) time complexity. The inner loop also has O(n) time complexity. Together they have O(n<sup>2</sup>) time complexity.
```js
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

## Simplifying Big O
**Constants Don't Matter**
* O(2*n*) = O(*n*)
* O(500) = O(1)
* O(13*n*<sup>2</sup>) = O(*n*<sup>2</sup>)

**Smaller Terms Don't Matter**
* O(*n* + 10) = O(*n*)
* O(1000*n* + 50) = O(*n*)
* O(*n*<sup>2</sup> + 5*n* + 8) = O(*n*<sup>2</sup>)

## Big O Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity
Big O notation can be used to analyze space complexity. How much additional memory do we need to allocate in order to run the code in our algorithm?

The term ***auxiliary space complexity*** is used to refer to space required by the algorithm, no including space taken up by the inputs. For this course, space complexity === auxiliary space complexity.

**Rules of Thumb**
* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(*n*) space (where *n* is the string length)
* Reference types are generally O(*n*), where *n* is the length (for arrays) or the number of keys (for objects)

In the example below, we're adding to a single primitive value. This is O(1) space complexity.
```js
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

The space here is directly proportionate to the size of the array. O(*n*) space complexity.
```js
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr
}
```

## Logarithms
Sometimes big O expressions involve more complex mathematical expressions. One of those is the logarithm.

**Logarithm**: The inverse of exponentiation. \
log<sub>2</sub>(8) = 3 --> 2<sup>3</sup> = 8
log<sub>2</sub>(*value*) = *exponent* --> 2<sup>*exponent*</sup> = *value*

For big O notation, log === log<sub>2</sub>.

The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one.**

**O(log *n*) time complexity is great!**

## Who Cares?
* Certain searching algorithms have logarithmic time complexity
* Efficient sorting algorithms involve logarithms
* Recursion sometimes involves logarithmic space complexity

## Recap
* To analyze the performance of an algorithm, we use Big O Notation
* Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
* Big O NOtation doesn't care about precision -- only about general trends (e.g. linear, quadratic, constant)
* The time or space complexity depends only on the algorithm, not the hardware used to run the algorithm
* Big O Notation is everywhere!