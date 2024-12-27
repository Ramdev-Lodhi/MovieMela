import axios from "axios";
import { API_KEY } from "/src/config/ENVConfig.jsx";
import latestmovies from "../assets/latestmovies.json";
const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});
//Using Axios Method get api data
export const getMovies = () => {
  //   console.log("getMovies");
  return api.get(`?apikey=${API_KEY}&s=titanic&page=1`);
};

export const getMoviesData = async ({ request }) => {
  try {
    let allMovies = [];
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("search") || "";
    console.log(searchQuery);
    if (searchQuery) {
      const response = await api.get(
        `?apikey=${API_KEY}&s=${searchQuery}&page=1`
      );
      console.log(response.data.Search);

      if (response.data.Search) {
        allMovies = [...allMovies, ...response.data.Search];
      }
    } else {
      for (let page = 0; page < 10; page++) {
        const query = latestmovies[page];
        console.log(`query ${query.name}`);
        const response = await api.get(
          `?apikey=${API_KEY}&s=${query.name}&page=1`
        );
        console.log(`res${response.data.Search}`);

        if (response.data.Search) {
          allMovies = [...allMovies, ...response.data.Search];
        }
      }
    }

    return allMovies;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
