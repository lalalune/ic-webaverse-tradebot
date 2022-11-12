import React, { useEffect } from "react";

import { useStore } from "./store";

import { Trade } from "./Trade";

import StyledApp from "./App.style";

function App() {
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
    <StyledApp>
      <Trade />
    </StyledApp>
  );
}

export default App;
