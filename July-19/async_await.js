// function getCountriesByPopulation() {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => {
//       const names = data
//         .filter((x) => x.population > 10000000)
//         .sort((a, b) => b.population - a.population)
//         .map((n) => n.name.common);
//       console.log(names);
//     });
// }

// getCountriesByPopulation();

async function getCountriesByPopulation() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const names = countries
    .filter((x) => x.population > 10000000)
    .sort((a, b) => b.population - a.population)
    .map((n) => n.name.common);
  console.log(names);
}
// Top level await - feature
// await getCountriesByPopulation();
// console.log(typeof getCountriesByPopulation());

// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");

async function getCountriesByPopulation2() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    var countries = await res.json();
  } catch (err) {
    console.log(err);
  }

  const names = countries
    .filter((x) => x.population > 10000000)
    .sort((a, b) => b.population - a.population)
    .map((n) => n.name.common);
  console.log(names);
}

getCountriesByPopulation2();
