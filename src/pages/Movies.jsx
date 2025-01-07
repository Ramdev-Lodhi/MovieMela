import { Card } from "../components/UI/Card";
import { useEffect, useState, useTransition } from "react";
import { getMoviesData } from "../services/GetApiService";
import { MovieCardSkeletonAnimation } from "../components/layout/Loading";

export const Movies = () => {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getMoviesData();
      if (Array.isArray(res)) {
        setData(res);
      } else {
        console.error("Unexpected response format:", res);
        setData([]);
      }
    });
  }, []);

  if (isPending) return <MovieCardSkeletonAnimation />;
  return (
    <ul className="container grid grid-four--cols">
      {data &&
        data.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
};
