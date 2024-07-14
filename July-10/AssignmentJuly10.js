const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];
// Q22: Write a function that returns an array of movies where the average rating is above a certain
// value, including the average rating in the result

function getMoviesWithHighAverageRating(hRating) {
  return movies
    .map((movie) => ({
      title: movie.title,
      avgRating:
        movie.ratings.reduce((acc, curr) => acc + curr, 0) /
        movie.ratings.length,
    }))
    .reduce((acc, curr) => {
      curr.avgRating > hRating
        ? acc.concat(`${curr.title} has an average rating of ${curr.avgRating}`)
        : curr;
      return acc;
    }, []);
  //   .filter((x) => x.avgRating > hRating)
  //   .map((x) => `${x.title} has an average rating of ${x.avgRating}`)
}

function getMoviesWithHighAverageRating(hRating) {
  return movies
    .map((movie) => ({
      title: movie.title,
      avgRating:
        movie.ratings.reduce((acc, curr) => acc + curr, 0) /
        movie.ratings.length,
    }))
    .reduce((acc, curr) => {
      return curr.avgRating > hRating
        ? acc.concat(`${curr.title} has an average rating of ${curr.avgRating}`)
        : acc;
    }, []);
  //   .filter((x) => x.avgRating > hRating)
  //   .map((x) => `${x.title} has an average rating of ${x.avgRating}`)
}

// console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00","Arjun Reddy
//  has an average rating of 8.67", "Jersey has an average rating of 8.67"]

// Q23: Write a function that returns an array of movie titles directed
// by a specific director, sorted by year in ascending order

function getTitlesByDirectorSortedByYear(director) {
  return movies
    .filter((movie) => movie.director === director)
    .map((x) => x.title)
    .sort((a, b) => a.title - b.title);
}

// console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
// console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

// Q24: Write a function that returns the average rating of movies released in a specific year

function getAverageRatingByYear(year) {
  const movie = movies.find((x) => x.year === year);
  if (!movie) return "No movies released in the specified year";
  return (
    movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length
  );
}

// console.log(getAverageRatingByYear(2018)); // Should print: 9.00
// console.log(getAverageRatingByYear(2014)); // Should print: "No movies released in the specified year"

// Q25: Write a function that returns an array of objects with movie titles and their highest ratings

function getMoviesWithHighestRatings() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}

// console.log(getMoviesWithHighestRatings());
// Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 },
// { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }]

// Q26: Write a function that returns the director with the most movies directed

function getDirectorWithMostMovies() {
  const directorCount = movies
    .map((movie) => {
      title: movie.title;
      director: movie.director;
      count: movies.reduce((acc, curr) => {
        var count = 0;
        acc.director === curr.director ? (count += 1) : count;
        return count;
      });
    })
    .map((x) => x.director);
}

// console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

// Q27: Write a function that merges two arrays of movies into one using the spread operator

const moreMovies = [
  {
    id: 6,
    title: "Jathiratnalu",
    director: "k.v anudeep",
    year: 2023,
    ratings: [7, 8, 9],
    genre: "comedy",
  },
  {
    id: 7,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

const mergeMovies = (movies, moreMovies) => {
  return [...movies, ...moreMovies];
};
// console.log(mergeMovies(movies, moreMovies));
// Should print: array with all 7 movies

// Q28: Write a function that accepts any number of movie objects and returns an array of
// their titles using the rest operator

const getTitles = (...movieObjects) => {
  return movieObjects.map((movie) => movie.title);
};

// console.log(getTitles(...movies)); // Should print titles of all movies in the array
// console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

// Q29: Write a function that merges two arrays of movies into one using the spread operator
// and provides a default value for the second array
const moreMoviess = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

function mergeMoviess(movies, moreMoviess = []) {
  return [...movies, ...moreMoviess];
}

// console.log(mergeMoviess(movies, moreMoviess)); // Should print the merged array of movies
// console.log(mergeMoviess(movies)); // Should print the original array of movies

// Q30: Write a function that returns the last N movie titles, using slice and spread operator with a default value for N

const getLastNMovieTitles = (n = 3) =>
  [...movies.slice(-n)].map((movie) => movie.title);

// console.log(getLastNMovieTitles()); // Should print the last 3 movie titles
// console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

// Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string
// using the rest operator, nullish coalescing, and template literals Interesting

const getMovieTitlesByIds = (...movieIds) => {
  const titles = movieIds.flatMap(
    (id) => movies.find((movie) => movie.id === id)?.title ?? "Unknown Title"
  );
  return titles.length > 0
    ? `Selected Movies: ${titles.join(", ")}`
    : "No movies found with the given IDs";
};
// console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: Selected Movies: Baahubali, Mahanati, Jersey
// console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
// console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

// Q32: Write a function that accepts any number of movies and returns a formatted string listing their
// titles and genres using the rest operator, nullish coalescing, and template literals Interesting

const listMovies = (...allMovies) => {
  return [allMovies]
    .flat()
    .map(
      (x) => `${x?.title ?? "Unknown Title"} (${x?.genre ?? "Unknown Genre"})`
    )
    .join(" , ");
};

// console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
// console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

// Q33: Write a function that calculates the total number of ratings for each director Challenging
// Ex81 -
const getTotalRatingsForDirectors = () => {
  return movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});
};

// console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

// Q34: Write a function that returns an array of genres sorted by the total number of ratings
// received by movies in that genre Challenging

const getGenresSortedByTotalRatings = () => {
  const genreRatings = movies.reduce((acc, movie) => {
    if (acc[movie.genre]) {
      acc[movie.genre] += movie.ratings.length;
    } else {
      acc[movie.genre] = movie.ratings.length;
    }
    return acc;
  }, {});

  return Object.entries(genreRatings)
    .sort(([, a], [, b]) => b - a)
    .map(([genre]) => genre);
};

// console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings

// Q35: Write a function that returns an array of movie titles directed by directors who have directed
// more than one movie Challenging

function getTitlesByDirectorsWithMultipleMovies() {
  const directors = movies.reduce((acc, movie) => {
    if (acc[movie.director]) {
      acc[movie.director]++;
    } else {
      acc[movie.director] = 1;
    }
    return acc;
  }, {});
  const multiDirectors = Object.keys(directors).filter(
    (director) => directors[director] > 1
  );

  return movies
    .filter((movie) => multiDirectors.includes(movie.director))
    .map((movie) => movie.title);
}

// console.log(getTitlesByDirectorsWithMultipleMovies()); // Should print: ["Baahubali", "Eega"]

// Q36: Write a function that calculates the total number of ratings for each genre and returns the
// genre with the highest total ratings Challenging

const getGenreWithHighestTotalRatings = () => {
  const genreRatings = movies.reduce((acc, movie) => {
    if (acc[movie.genre]) {
      acc[movie.genre] += movie.ratings.length;
    } else {
      acc[movie.genre] = movie.ratings.length;
    }
    return acc;
  }, {});

  const highestRatingsGenre = Object.entries(genreRatings).reduce(
    ([genreA, ratingA], [genreB, ratingB]) =>
      ratingA > ratingB ? [genreA, ratingA] : [genreB, ratingB]
  );

  return highestRatingsGenre[0];
};

// console.log(getGenreWithHighestTotalRatings()); // Should print the genre with the highest total ratings

// Q37: Write a function that returns an array of directors who have directed movies with an
// average rating above a certain value Challenging

function getDirectorsWithHighAverageRatings(threshold) {
  const directorsTotalRatings = movies.reduce((acc, movie) => {
    acc[movie.director] =
      (acc[movie.director] || 0) + movie.ratings.reduce((a, b) => a + b);
    return acc;
  }, {});

  const directorMovieCounts = movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(directorsTotalRatings).filter((director) => {
    const totalRatings = directorsTotalRatings[director];
    const movieCount = directorMovieCounts[director];
    return totalRatings / movieCount >= threshold;
  });
}
// console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings

// Q38: Write a function that updates a movie's genre and ratings by ID, using object destructuring,
// spread operator, and default values Challenging

function updateMovieDetails(movie) {
  const { id } = movie;
  return movies.map((movie) =>
    movie.id === id
      ? {
          ...movie,
          genre: newGenre,
          ratings: newRatings.length > 0 ? newRatings : movie.ratings,
        }
      : movie
  );
}

// console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
// console.log(updateMovieDetails(6, { genre: "Thriller" }));
// Should print: Movie not found

// Q39: Update or add a movie based on the id Challenging

function updateOrAddMovie(newMovie) {
  const { id, title, director, year, ratings, genre } = newMovie;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    // Add a new movie
    return [...movies, newMovie];
  } else {
    // Update an existing movie
    return movies.map((movie) =>
      movie.id === id
        ? {
            ...movie,
            title,
            director,
            year,
            ratings,
            genre,
          }
        : movie
    );
  }
}

// console.log(
//   updateOrAddMovie({
//     id: 6,
//     title: "Pushpa",
//     director: "Sukumar",
//     year: 2021,
//     ratings: [8, 9, 8],
//     genre: "Action",
//   })
// );
// // Should add Pushpa to the list
// console.log(
//   updateOrAddMovie({
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [10, 10, 9],
//     genre: "Sports",
//   })
// );
// Should update Jersey's ratings in the list

// const curriedMultiply = (a) => (b) => a * b;
// const double = curriedMultiply(2);
// console.log(double(5)); // Output: 10

const CArea = (l) => (b) => (h) => l * b * h;
// console.log(CArea(1)(2)(3));

function fullname() {
  return `${this.firstname} ${this.lastname}`;
}

const stud1 = {
  firstname: "Nithin",
  lastname: "Madduri",
  fullname,
};
// console.log(fullname.apply(stud1));
