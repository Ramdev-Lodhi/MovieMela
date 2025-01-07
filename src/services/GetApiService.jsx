import axios from "axios";
import { API_KEY } from "/src/config/ENVConfig.jsx";
import latestmovies from "../assets/latestmovies.json";
const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});
//Using Axios Method get api data
export const getMovies = () => {
  return api.get(`?apikey=${API_KEY}&s=titanic&page=1`);
};

export const getMoviesData = async () => {
  try {
    let allMovies = [];

    for (let page = 0; page < 10; page++) {
      const query = latestmovies[page];
      const response = await api.get(
        `?apikey=${API_KEY}&s=${query.name}&page=1&type=movie`
      );
      if (response.data?.Search) {
        allMovies = [...allMovies, ...response.data.Search];
      }
    }
    return allMovies;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const getSearchData = async ({ request }) => {
  try {
    let allMovies = [];
    const url = request ? new URL(request.url) : null;
    const searchQuery = url?.searchParams.get("search") || "";
    if (searchQuery) {
      const response = await api.get(
        `?apikey=${API_KEY}&s=${searchQuery}&page=1`
      );
      if (response.data?.Search) {
        allMovies = [...allMovies, ...response.data.Search];
      }
    } else {
      for (let page = 0; page < 10; page++) {
        const query = latestmovies[page];
        const response = await api.get(
          `?apikey=${API_KEY}&s=${query.name}&page=1&type=movie`
        );
        if (response.data?.Search) {
          allMovies = [...allMovies, ...response.data.Search];
        }
      }
    }
    return allMovies;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
