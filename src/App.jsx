import React from "react";
import StyledApp from "./App.style";
import Trade from "./Trade";
import { ItemDetails } from "./ItemDetails";

function App() {
  return (
    <StyledApp>
      <Trade type={"web"} />
      <ItemDetails></ItemDetails>
    </StyledApp>
  );
}

export default App;
