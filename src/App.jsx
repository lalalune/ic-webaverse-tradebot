import React, { useEffect } from "react";

import { useStore } from "./store";

import { Trade } from "./Trade";

export const App = () => {
  const { remoteBoxes, localBoxes, inventoryBoxes, loading } = useStore();

  // useEffect(() => {
  //   console.log("remoteBoxes: ", remoteBoxes);
  //   console.log("localBoxes: ", localBoxes);
  //   console.log("inventoryBoxes: ", inventoryBoxes);
  // }, [remoteBoxes, localBoxes, inventoryBoxes]);

  useEffect(() => {
    console.log("loading: ", loading);
  }, [loading]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <Trade />
    </div>
  );
};
