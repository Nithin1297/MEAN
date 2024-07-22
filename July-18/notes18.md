# 18th July

- setTimeout() is not part of js , it is part of browser

```js
// 1.Timer
setTimeout(() => {
    console.log("hello);
},5000)
// Action -> Reaction
// Action has to complete -> Triggers another action
```

![What will be there in browser and what happens](./images/image.png) // Event Loop

- for loop code is blocking code it blocks the async code to execute
- If the code in call stack then we can see in screen

> Promise

- there are three states

1. pending
2. fulfilled
3. rejected

- only when resolve happens .then will happen => refer promise.js file
- .then returns Promise object
- console.log returns nothing (undefined)

> promise.all

1. waits till all promise complete
2. anyone errors | goes to catch block
3. waits till one get rejected if not then all promise to complete

> promise.race

<!-- 1.waits  -->

> Promise.allSettled

1. waits till all promise complete
2. if any of the promise is rejected it displays resolved(fulfilled) promises
3. it will not go the catch block, it goes to the .then
4. always returns array of objects (it has status and value)

> Promise.finally

1. whether the promise is resolved or rejected the finally will always executed
2. use it for cleanup code or login
