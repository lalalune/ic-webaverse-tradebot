import React from "react";

export const Loading = ({ loading }) => {

  return loading ? (
    <div className={"absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center opacity-30 bg-white"}>
      <div className="w-32 h-32 border-8 rounded-full border-t-green-900 animate-spin"></div>
    </div>
  ) : null;
};
