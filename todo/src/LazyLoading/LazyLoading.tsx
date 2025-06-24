import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent/LazyComponent"));

export const LazyLoading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
