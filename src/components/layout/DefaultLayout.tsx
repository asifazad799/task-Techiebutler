import React from "react";

import { BluredPloygons } from "../static-poligons";

export function DefaultLayout({ children }) {
  return (
    <div className="h-[100vh] w-full bg-[#03011b] flex-shrink-0 relative overflow-hidden">
      <div className="absolute top-[-106px] left-[-290px]">
        <BluredPloygons />
      </div>
      <div className="absolute bottom-[-65px] right-[-84px]">
        <BluredPloygons />
      </div>
      <div className="m-3">{children}</div>
    </div>
  );
}
