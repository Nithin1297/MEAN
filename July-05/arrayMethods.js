// let oranges = [3, 6, 7, 2];
// oranges.push(10);
// console.log(oranges);

// const mangoes = [3, 6, 7, 2]; // Address
// mangoes.push(10);
// console.log(mangoes);
// console.log(mangoes[0]);
// console.log(mangoes[1]);
// console.log(mangoes[2]);

// mangoes[0] = 8; // No error (Changing the value)
// // mangoes = [1, 2, 3]; // Error (Changing the address)
// const cuties = ["🌍", "❤️", "🦌", "🐢"];
// console.log(cuties);
// console.log(cuties.reverse());
// console.log(cuties);

// let x = [...cuties]; // Spread operator
// console.log(x);
// console.log(x.reverse());
// console.log(cuties);

// // 5 pillars of code quality
// // 1. readability - 75%
// // 2. Maintainability
// // 3.extensibility
// // 4.testing
// // 5.performance

// // Slice operator (Immutable array method)
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr.join(" -> "));
// console.log(arr.slice(1, 4).join(" <-> "));
// console.log("1-2-3-4-5-6".split("-"));

// Map
const arrayOfNumbers = [5, 6, 9, 10];
// console.log(arrayOfNumbers);
// console.log(arrayOfNumbers.map((x) => x * 2));
// console.log(arrayOfNumbers.map((x,i) => x * 2 + i));
// console.log(arrayOfNumbers);

// function numbers(arr) {
//   const doubleArray = [];
//   for (let value of arrayOfNumbers) {
//     doubleArray.push(value * 2);
//   }
//   console.log(doubleArray);
// }
// numbers(arrayOfNumbers);
// console.log(arrayOfNumbers);

// console.log(arrayOfNumbers.map((x) => x * 2));
// console.log(arrayOfNumbers);

function ownmap(fn, arrayOfNumbers) {
  let doubleArray = [];
  for (let index in arrayOfNumbers) {
    // console.log(typeof +index)
    doubleArray.push(fn(arrayOfNumbers[index], index));
  }
  return doubleArray;
}
// console.log(ownmap((chiku, index) => chiku - 2 + index, arrayOfNumbers));

// let v = [5, 6, 9, 10].map((x, i) => x * 2 + i);
// console.log(v)
const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

function countLength(fn, obj) {
  anotherObject = [];
  for (let value of obj) {
    anotherObject.push(fn(value));
  }
  return anotherObject;
}
// console.log(countLength((len) => len.length, avengers));

// console.log(avengers.map((x) => x.length));

// Filter (Higher order function)

// console.log(avengers.filter((x) => x.length > 10));

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Rating 4.7 or more

console.log(
  books
    .filter((r) => r.rating >= 4.7)
    .map((t) => t.title)
    .sort()
);

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
