
// Top 3 Students
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

// This should output: "Eva, Bob, Charlie"
// console.log(
//   `"${students
//     .sort((a, b) => b.score - a.score)
//     .slice(0, 3)
//     .map((x) => x.name)
//     .join()}"`
// );

// Grade is 80 or more - promote
// status: "promoted"
const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// console.log(
//   employees
//     .filter((x) => x.grade > 80)
//     .map((y) => ({ ...y, status: "Promoted" }))
// );

const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];

// console.log(players.filter((x) => requiredSkills.every()).map((y) => y.name));

const person1 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
  place: {
    // city: "Chennai",
    state: "TS",
  },
};
// if (person1.place.city) {
//   console.log(person1.place.city);
// } else if (!person1.place.city) {
//   console.log("City is Unknown");
// } else if (person1.place.state) {
//   console.log(person1.place.state);
// } else if (!person1.place.state) {
//   console.log("state is Unknown");
// } else if (!person1.place) {
//   console.log("Place is Unknown");
// } else {
//   console.log(person1.place);
// }

// Above code is defensive code

// console.log(person1?.place?.city ?? "Unknown"); // optionaL CHAINING AND Nullish coalescing

// Ex1

const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

const getPersonInfo = ({
  age: personAge,
  name: { first: firstName, last: lastName },
  favoriteColors: [primaryColor, secondaryColor],
}) =>
  `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;

// console.log(getPersonInfo(person));

// Ex2:
// function createBook(title, author, year) {
//   return {
//     title: title,
//     author: author,
//     year: year,
//     getSummary: function () {
//       return `${title} by ${author}, published in ${year}.`;
//     },
//   };
// }

const createBook = (title, author, year) => {
  return {
    title: title,
    author: author,
    year: year,
    getSummary: function () {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
};

const book = createBook("1984", "George Orwell", 1949);
// console.log(book.getSummary(), book);

// Ex3:
const users = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);

  const age = user?.profile?.age ?? "Age not mentioned";
  const city = user?.profile?.address?.city ?? "City not mentioned";

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}

// displayUserProfile(1); // Should work
// displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case

// Ex 4
const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

// Task 4.1: Determine if all books in the library have been borrowed.
// if (library.every((x) => x.borrowed))
//   console.log("Yes, all books are borrowed");
// else console.log("All books are not Borrowed");

// console.log(
//   library.every((x) => x.borrowed)
//     ? "Yes, all books are borrowed"
//     : "all books are not borrowed"
// );

// Output
// "Yes, all books are borrowed"

// Task 4.2: Determine if there are books in the library written by multiple authors

// Output

// let a = library.filter((a) => a.title.authors);

// "No, there are no multiple authors"

// console.log([1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(curr), []));

// console.log(
//   [1, 7, 3, 10, 5].reduce((acc, curr) => {
//     return acc > curr ? acc : curr;
//   })
// );

// console.log(
//   [1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(`${curr} -> `), "")
// ); // converted to string

// console.log(
//   [1, 7, 151, 3, 10, 5, 4].reduce(
//     (acc, curr) => (curr % 2 == 0 ? acc.concat(curr) : acc),
//     []
//   )
// ); // Filtering even numbers
