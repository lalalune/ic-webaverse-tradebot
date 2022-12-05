import css from "./index.css";
import styleInject from 'style-inject';

styleInject(css);

import React from "react";

import { Trade } from "./Trade";

export const App = ({ type }) => {
  return <Trade type={type} />;
}

export default App;
