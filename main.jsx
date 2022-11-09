import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { App } from "./src/App.jsx";
// import { PlugProvider, Authenticated } from "@raydeck/useplug";
// import { whitelist } from "./constants";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PlugProvider whitelist={whitelist}>
      <Authenticated>
        <App />
      </Authenticated>
      <App />
    </PlugProvider> */}
    <App />
  </React.StrictMode>
);
