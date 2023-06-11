import React, { Suspense } from "react";
import Loading from "./loading";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-rows-6 grid-flow-col gap-1">
        <div className="row-span-6 bg-orange-200">Setting Sidebar</div>
        <div className="col-span-5 ">setting Header</div>
        <div className="row-span-5 col-span-5 bg-red-500">{children}</div>
      </div>
    </Suspense>
  );
}
