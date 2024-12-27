import { API_KEY } from "/src/config/ENVConfig.jsx";
import latestmovies from "../assets/latestmovies.json";
// console.log(API_KEY);

//Using Fetch Methode get api data
export const getMoviesData = async ({ request }) => {
  try {
    let allMovies = [];
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("search") || "";
    console.log(searchQuery);
    if (searchQuery) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&page=1`
      );
      const data = await response.json();
      console.log(data);

      if (data.Search) {
        allMovies = [...allMovies, ...data.Search];
      }
    } else {
      for (let page = 0; page < 10; page++) {
        const query = latestmovies[page];
        console.log(`query ${query.name}`);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query.name}&page=1`
        );

        console.log(page);
        const data = await response.json();
        console.log(data);

        if (data.Search) {
          allMovies = [...allMovies, ...data.Search];
        }
      }
    }

    return allMovies;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
