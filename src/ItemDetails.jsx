import React from "react";

import { useStore } from "./utils/store";

export const ItemDetails = () => {
  const { selItem } = useStore();

  return selItem ? (
    <div className="absolute bottom-0 right-0 z-10 flex flex-col w-1/4 gap-1 p-1 bg-black-100">
      <div className="flex flex-col gap-1 font-bold text-red">
        <div>{selItem.collection}</div>
        <div>{"#7849"}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};
