import React from "react";
import classnames from "classnames";

import { useStore } from "./utils/store";

export const Loading = () => {
  const { loading } = useStore();

  return (
    <div
      className={classnames(
        "absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center opacity-30 bg-white",
        { hidden: !loading }
      )}
    >
      <div className="w-32 h-32 border-8 rounded-full border-t-green-900 animate-spin"></div>
    </div>
  );
};
