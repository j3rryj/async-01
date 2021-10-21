# Async Tests

This is a set of tests used to test knowledge of asynchronous code in JavaScript. Follow the instructions and run
the unit tests to check your code.

## Callbacks

1. Open [src/01-callbacks.js](src/01-callbacks.js) and import `add` from `lib/add.js`.

2. Create and export an `addAsync` function.

3. `addAsync` should call the function `add`, but should be an asynchronous node-style callback function. 

   hint: You can use `setTimeout` to make it async.

4. run `npm test -- callbacks` to test.

Proceed when all tests are green.

## Promises

1. Open [src/02-promises.js](src/02-promises.js) and create and export an `addPromise` function.

   `addPromise` should call `addAsync` from [src/01-callbacks.js](src/01-callbacks.js) but return a `Promise`
   instead of being a node-style callback function.

2. Create and export function `serialApiCalls`.

   The function should call `mockApiCall(1)` and `mockApiCall(2)`, and return the results in an Array. The API calls should be made in serial (one at a time).

3. Create and export function `parallelApiCalls`.

   Repeat the same process from `serialApiCalls`, except the API calls should be made in parallel (both at the same time).

4. run `npm test -- promises` to test.
