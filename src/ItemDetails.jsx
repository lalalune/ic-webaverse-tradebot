import React from "react";

import { useStore } from "./utils/store";

export const ItemDetails = () => {
  const { selItem } = useStore();

  return selItem ? (
    <div className="absolute bottom-0 right-0 z-10 flex flex-col w-1/4 gap-1 p-4 bg-black-100">
      <div className="flex flex-col gap-1 font-bold text-red-900">
        <div>{selItem.collection}</div>
        <div>{"#7849"}</div>
      </div>
      <div className="flex items-center justify-center w-full p-4 bg-black">
        <img className="w-4/5" src={selItem.metadata.image} />
      </div>
    </div>
  ) : (
    <></>
  );
};
