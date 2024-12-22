import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";
import { Suspense } from "react";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  // if (navigation.state === "loading") return <Loading />;
  return (
    <>
      <Header />
      {/* {navigation.state === "loading" ? <Loading /> : <Outlet />} */}
      {navigation.state === "loading" ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      )}
      <Footer />
    </>
  );
};
export default AppLayout;
