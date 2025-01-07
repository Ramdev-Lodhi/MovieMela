import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";
import { useEffect, useState } from "react";
import { getMovies } from "../services/GetApiService";

export const Movies = () => {
  const [data, setData] = useState([]);
  const moviesData = useLoaderData();
  console.log(data);

  console.log(moviesData);

  const getMoviesData = async () => {
    try {
      const moviesData = await getMovies();
      console.log(moviesData);
      setData(moviesData.data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoviesData();
  }, []);
  return (
    <ul className="container grid grid-four--cols">
      {moviesData &&
        moviesData.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
};
