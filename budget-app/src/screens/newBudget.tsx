import { Suspense, lazy } from "react";

const Main = lazy(() => import("../components/budget/main"));

const NewBudget = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  );
};

export default NewBudget;
