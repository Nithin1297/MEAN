// JS is an interpreted language (2 phases)

console.log("Hello Nithin");

console.log(a); // not defined(Not declared) is an error
var a = 10;
console.log(a); // 10

// floating up - hoisting (myth)
// var a;
// console.log(a); //
// a = 10;
// console.log(a); // 10

// (2 phases)
// 1. phase - compilation - JS guy
console.log(a); // skipped
var a = 10; // js guy - do you know a? alright note it down
console.log(a); //

//2. Execution Phase
console.log(a); // not defined(Not declared) is an error
var a = 10; //
console.log(a); //

// variables and values are remembered by execution context