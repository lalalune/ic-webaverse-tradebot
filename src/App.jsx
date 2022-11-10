import React from "react";
import StyledApp from "./App.style";
import Trade from "./Trade";
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer

function App () {
    return (
      <StyledApp>
            <Trade type={'web'} />
      </StyledApp>
    );
}

export default App;
