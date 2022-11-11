import React, { useEffect } from "react";
import StyledApp from "./App.style";
import { Trade } from "./Trade";
import { Loading } from "./Loading";
import { ItemDetails } from "./ItemDetails";
import { useStore } from "./store";

function App() {
  const { remoteBoxes, localBoxes, inventoryBoxes } = useStore();

  // useEffect(() => {
  //   console.log("remoteBoxes: ", remoteBoxes);
  //   console.log("localBoxes: ", localBoxes);
  //   console.log("inventoryBoxes: ", inventoryBoxes);
  // }, [remoteBoxes, localBoxes, inventoryBoxes]);

  return (
    <StyledApp>
      <Trade />
      <Loading />
      <ItemDetails />
    </StyledApp>
  );
}

export default App;
