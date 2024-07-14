> TDZ Temporary dead zone

> shadowing

> scope

- lexical scope
- function is treated as value then it is a First class function
- we can pass entire function as an argument to a function
- if we dont have a name to a function it is a anonymous function
- ![](./July-05/images/lexicalScope.png)
- const does not allow mutation (Immutable)

> Assignment -> draw a table to know which array method will not mutate

> 5 pillars of code quality

- 1.  readability - 75%
- 2. Maintainability
- 3. extensibility
- 4. testing
- 5. performance

> Slice operator (Immutable array method)

> join

> split

> reverse

> map

> Filter (Higher order function)

## Immutable Array Methods

| Method        | Description                                                                                                     | Return Type                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| map()         | Creates a new array with the results of calling a provided function on every element in the calling array.      | Array                                        |
| filter()      | Creates a new array with all elements that pass the test implemented by the provided function.                  | Array                                        |
| slice()       | Returns a shallow copy of a portion of an array into a new array object.                                        | Array                                        |
| concat()      | Merges two or more arrays and returns a new array.                                                              | Array                                        |
| reduce()      | Applies a function against an accumulator and each element in the array to reduce it to a single value.         | any (depends on accumulator's initial value) |
| every()       | Tests whether all elements in the array pass the test implemented by the provided function.                     | Boolean                                      |
| some()        | Tests whether at least one element in the array passes the test implemented by the provided function.           | Boolean                                      |
| find()        | Returns the value of the first element in the array that satisfies the provided testing function.               | any                                          |
| findIndex()   | Returns the index of the first element in the array that satisfies the provided testing function.               | Number                                       |
| indexOf()     | Returns the first index at which a given element can be found in the array, or -1 if it is not present.         | Number                                       |
| lastIndexOf() | Returns the last index at which a given element can be found in the array, or -1 if it is not present.          | Number                                       |
| includes()    | Determines whether an array includes a certain value among its entries, returning true or false as appropriate. | Boolean                                      |
| toString()    | Returns a string representing the specified array and its elements.                                             | String                                       |
| join()        | Joins all elements of an array into a string.                                                                   | String                                       |
