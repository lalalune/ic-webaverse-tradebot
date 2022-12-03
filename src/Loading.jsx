import React from "react";
import classnames from "classnames";

export const Loading = ({ loading }) => {

  return loading ? (
    <div
      className={classnames(
        "absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center opacity-30 bg-white",
        { hidden: !loading }
      )}
    >
      <div className="w-32 h-32 border-8 rounded-full border-t-green-900 animate-spin"></div>
    </div>
  ) : null;
};
