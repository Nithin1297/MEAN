// var drivingEligibilityTest = new Promise((resolve, reject) => {
//   let age = 32;

//   age >= 18
//     ? resolve("you are Eligible") // fulfilled then go to .then
//     : reject(`Try again after ${18 - age} Years`); // fulfilled go to .catch
// });

// drivingEligibilityTest
//   .then((msg) => console.log("Congrats!! " + msg))
//   .catch((msg) => console.log("Oops!! " + msg));

var drivingEligibilityTest = new Promise((resolve, reject) => {
  let age = 52;

  age >= 18
    ? setTimeout(() => {
        resolve("You are eligible");
      }, 2000)
    : reject(`Try again after ${18 - age} Years`);
});

// console.log(typeof drivingEligibilityTest);
// console.log(drivingEligibilityTest);

// drivingEligibilityTest
//   .then((msg) => msg + " this is fun ")
//   .then((msg) => " Super cool " + msg)
//   .then((msg) => console.log("Final: " + msg)); // .then returns Promise object

// drivingEligibilityTest
//   .then((msg) => msg + " this is fun ")
//   .then((msg) => " Super cool " + msg)
//   .then((msg) => console.log("Final: " + msg)) // .then returns Promise object
//   .catch((msg) => console.log("Oops!! " + msg));

// drivingEligibilityTest
//   .then((msg) => msg + " this is fun ")
//   .then((msg) => Promise.reject(" Super cool " + msg))
//   .then((msg) => console.log("Final: " + msg)) // skip
//   .catch((msg) => console.log("Oops!! " + msg));

// drivingEligibilityTest
//   .then((msg) => msg + " this is fun ")
//   .then((msg) => console.log(" Super cool " + msg))
//   .then((msg) => console.log("Final: " + msg))
//   .catch((msg) => console.log("Oops!! " + msg));

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     const names = data.map((n) => n.name.common);
//     console.log(names);
//   });

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     const names = data
//       .filter((x) => x.population > 10000000)
//       .sort((a, b) => b.population - a.population)
//       .map((n) => n.name.common);
//     console.log(names);
//   });

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     const names = data
//       .filter((x) => x.population > 10000000)
//       .sort((a, b) => b.population - a.population)
//       .map((n, T ) => `${T+1}. ${n.name.common} - ${n.population}\n`)
//       .join("");
//     console.log(names);
//   });

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     const names = data
//       .filter((x, t) => x.population > 10000000)
//       .sort((a, b) => b.population - a.population)
//       .map((n, T) => `${T + 1}. ${n.name.common} - ${n.population}\n`)
//       .slice(0, 10)
//       .join("");
//     console.log(names);
//   });

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     const names = data
//       .filter((x, t) => x.population > 10000000)
//       .sort((a, b) => b.population - a.population)
//       .map(
//         (n, T) =>
//           ` ${n.name.common} - ${new Intl.NumberFormat("en-IN").format(
//             n.population
//           )}\n`
//       )
//       .slice(0, 10);

//     document.querySelector(".lists").innerHTML = names
//       .map((x) => `<li>${x}</li>`)
//       .join("");
//     console.log(names);
//   });
