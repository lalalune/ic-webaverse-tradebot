import css from "./index.css";
import styleInject from 'style-inject';

styleInject(css);

import React from "react";

import { Trade } from "./Trade";

export const App = ({ type }) => {
  return <div style={{
    // center on the page
    // the inner div is 600px by 400px, if that is useful
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "400px",
  }}>
    <Trade type={type} />
  </div>
}

export default App;
