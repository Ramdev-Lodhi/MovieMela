import { API_KEY } from "/src/config/ENVConfig.jsx";
// console.log(API_KEY);
export const getMoviesData = async ({ request }) => {
  try {
    // const totalPages = Math.ceil(8963 / 10);
    let allMovies = [];
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("search") || "";

    for (let page = 1; page <= 5; page++) {
      const query = searchQuery ? searchQuery : "all";
      // const response = await fetch(
      //   `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${
      //     search === "" ? "all" : search
      //   }&page=${page}`
      // );
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
      );
      console.log(page);

      const data = await response.json();
      console.log(data);

      if (data.Search) {
        allMovies = [...allMovies, ...data.Search];
      }
    }

    return allMovies;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
