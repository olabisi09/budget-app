import { Suspense, lazy } from "react";
import Layout from "../components/layout";

const Main = lazy(() => import("../components/home"));

const Home = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </Layout>
  );
};

export default Home;
