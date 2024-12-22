// export const getMoviesData = async () => {
//   try {
//     //   const response = await fetch(
//     //     `https://www.omdbapi.com/?i=tt3896198&apikey=${
//     //       import.meta.env.VITE_API_KEY
//     //     }&s=titanic&page=1`
//     //   );
//     const response = await fetch(
//       `https://www.omdbapi.com/?i=tt3896198&apikey=95f4efcd&s=all&page=2`
//     );
//     // const response = await fetch(
//     //   `https://www.omdbapi.com/?i=tt3896198&apikey=95f4efcd&s=titanic&page=1`
//     // );
//     const data = response.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
import { API_KEY } from "/src/config/ENVConfig.jsx";
// console.log(API_KEY);

export const getMoviesData = async () => {
  try {
    // const totalPages = Math.ceil(8963 / 10);
    let allMovies = [];

    for (let page = 1; page <= 5; page++) {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=all&page=${page}`
      );

      const data = await response.json();

      if (data.Search) {
        allMovies = [...allMovies, ...data.Search];
      }
    }

    return allMovies;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
