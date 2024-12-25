import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {
  Loading,
  MovieCardDetialsAnimation,
  MovieCardSkeletonAnimation,
} from "./Loading";
// import { Suspense } from "react";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  // if (navigation.state === "loading") return <Loading />;
  return (
    <>
      <Header />
      {/* {navigation.state === "loading" ? <Loading /> : <Outlet />} */}
      {navigation.state === "loading" ? (
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
