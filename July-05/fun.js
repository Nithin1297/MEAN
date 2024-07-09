var price = 300;
// function getprice() {
//   console.log(price);
//   var price = 500;
//   console.log(price);
// }
// console.log(getprice());

// shadowing

// let price = 300; // Shadow - Sachin's son
// function getprice() {
//   console.log(price);
//   var price = 500; // Lime light - Sachin
//   console.log(price);
// }
// console.log(getprice());

// scope
// function func() {
//   var a = "Geeks";
//   if (true) {
//    var a = "GeeksforGeeks"; // New value assigned
//     console.log(a); // "GeeksforGeeks"
//     // var a = "Hello";
//     // console.log(a); // "Hello"
//   }
//   console.log(a); // "Hello"
// }
// func();

// function func() {
//     var a = "Geeks";
//     if (true) {
//      var a = "GeeksforGeeks"; // New value assigned
//       console.log(a); // "GeeksforGeeks"
//       // var a = "Hello";
//       // console.log(a); // "Hello"
//     }
//     console.log(a); // "Hello"
//   }
//   func();

// function sayhello() {
//   return "HEllO";
// }
// // sayhello;
// console.log(typeof sayhello);
// console.log(sayhello);

// function sayhello() {
//   return function () {
//     console.log("Hello!");
//   };
// }
// var temp = sayhello();
// temp();
// sayhello()();

//Lexical Scope & Closure
// let codeword = "hulk";
// function spacecheck() {
//   let question = "please provide the code word";
//   function codewordcheck() {
//     console.log(question);
//     let password = "hulk";
//     if (password == codeword) {
//       console.log("success");
//     } else {
//       console.log("fail");
//     }
//   }
//   codewordcheck();
// }
// spacecheck();
