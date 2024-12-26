import { API_KEY } from "/src/config/ENVConfig.jsx";
// console.log(API_KEY);
export const getMoviesData = async ({ request }) => {
  try {
    // const totalPages = Math.ceil(8963 / 10);
    let allMovies = [];
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("search") || "";
    const latestMovies = [
      "Pushpa",
      "RRR",
      "Dangal",
      "PK",
      "Drishyam",
      "Shrikant",
      "Lagaan",
      "Sector 36",
      "Stree",
      "Kalki",
    ];
    for (let page = 1; page <= 10; page++) {
      const query = searchQuery ? searchQuery : latestMovies[page - 1];

      // const response = await fetch(
      //   `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${
      //     search === "" ? "all" : search
      //   }&page=${page}`
      // );
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=1`
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
