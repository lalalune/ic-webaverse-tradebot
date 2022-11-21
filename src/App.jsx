import css from "./index.css";
import styleInject from 'style-inject';

styleInject(css);

import React from "react";

import { Trade } from "./Trade";

export const App = ({type}) => {
  return (
      <div className="body">
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <Trade type={type} />
        </div>
      </div>
  );
};

export default App;