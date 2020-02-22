# Recursion

## Why Use Recursion?
**Recursion**: A process (function in our case) that calls itself.

**It's EVERYWHERE!**
* JSON.parse / JSON.stringify
* document.getElementById and DOM traversal algorithms
* Object traversal
* We see it with more complex data structures (e.g. trees, graphs, etc.)
* Sometimes cleaner alternative to iteration

## Functions
In almost all programming languages, there is a built-in data structure that manages what happens when functions are invoked. In JavaScript, this is the **call stack**.

### Call Stack
* It's a **stack** data structure
* Any time a function is invoked, it is placed (pushed) on top of the call stack
* When JavaScript sees the **return** keyword (or when the function ends), the compiler will remove (pop)

Generally functions are pushed on the call stack and popped off when they are done. Recursive functions keep pushing new functions onto the call stack.

## How Recursive Functions Work
They invoke the **same** function with a different input until you reach your base case.

**Base Case**: The condition when the recursion ends.

**Two Essential Parts of a Recursive Function:**
1. Base case
2. Different input

### Example
```js
// Iterative Function
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log('All done!');
}

// Recursive Function
function countDown(n) {
    if (n <= 0) {
        console.log('All done!');
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}
```

### Another Example
```js
function sumRange(n) {
    if (n === 1) return 1;
    return n + sumRange(n - 1);
}
```

### Factorial Example
```js
// Factorial
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// Iterative Solution
function factorial(n) {
    let total = 1;
    for (let i = n; i > 1; i--) {
        total *= i;
    }
    return total;
}

// Recursive Solution
function factorial(n) {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

// One liner with ternary operator
function factorial(n) {return n < 2 ? 1 : factorial(n - 1)}
```

## Where Things Go Wrong
* No base case or base case is wrong
* Returning the wrong thing or forgetting to return at all
* Stack overflow (different engines have different limits)

## Helper Method Recursion
### Example - this doesn't do anything
```js
function outer(input) {

    var outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
    }

    helper(input);

    return outerScopedVariable;
}
```

This is used when the return value needs to be something that is collected (array, string, etc.).

### Collect Odds Example
```js
function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}
```

## Pure Recursion
### Collect Odds Example
```js
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```

### Tips
* For arrays, use methods like slice, spread operator, and concat that make copies of arrays so you don't mutate them
* Strings are immutable so you will need to use methods like slice, substr, or substring to make copies of the strings
* To make copies of objects, use Object.assign, or the spread operator