import React from "react";

export const ModalBox = ({ children }) => {
  return (
    <div className="z-10 absolute w-full h-full flex justify-center items-center">
      <div className="border border-white rounded  bg-yellow-900 w-1/3 h-1/3 justify-evenly flex flex-col items-center gap-2">
        {children}
      </div>
    </div>
  );
};
