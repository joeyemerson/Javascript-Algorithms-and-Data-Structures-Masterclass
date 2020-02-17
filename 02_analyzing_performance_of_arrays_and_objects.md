# Analyzing the Performance of Arrays and Objects

## Objects
**Object**: Unordered key: value pairs.

**When to use objects:**
* When you don't need order
* When you need fast access / insertion and removal

**Big O of Objects**
* Insertion - O(1)
* Removal - O(1)
* Searching - O(*n*)
* Access - O(1)

**Object Methods**
* Object.keys = O(*n*)
* Object.values = O(*n*)
* Object.entries = O(*n*)
* hasOwnProperty = O(1)

## Arrays
**Array**: Ordered list

**When to use arrrays:**
* When you need order
* When you need fast access / insertion and removal (sort of...)

**Big O of Arrays**
* Insertion - It depends...
* Removal - It depends...
* Searching - O(*n*)
* Access - O(1)

Insertion or removal will depend where the value is being inserted/removed. Inserting at the end of the array is fast. Inserting at the beginning means every other item in the array needs to be reindexed. The same applies for removing elements from the beginning (or at another index that is not the last item).

**Array Methods**
* push - O(1)
* pop - O(1)
* shift - O(*n*)
* unshift - O(*n*)
* concat - O(*n*)
* slice - O(*n*)
* splice - O(*n*)
* sort - O(*n* log *n*)
* forEach/map/filter/reduce/etc. - O(*n*)