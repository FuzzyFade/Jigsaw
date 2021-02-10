import React, { Suspense } from "react";
import Loading from "@/components/Loading/index";

const LoadableComponent = React.lazy(() => import("./newpage"));

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoadableComponent />
    </Suspense>
  );
};
