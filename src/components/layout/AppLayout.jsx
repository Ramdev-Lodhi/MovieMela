import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {
  Loading,
  MovieCardDetialsAnimation,
  MovieCardSkeletonAnimation,
} from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <Header />
      {navigation.state !== "idle" ? (
        navigation.location.pathname === "/movies" ? (
          <MovieCardSkeletonAnimation />
        ) : navigation.location.pathname.includes("/movies/") ? (
          <MovieCardDetialsAnimation />
        ) : (
          <Loading />
        )
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};
export default AppLayout;
