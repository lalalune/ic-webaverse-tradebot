import React from "react";

import {BagBoxStyle} from "./BagBox.jsx";

const RemoteBox = ({ children }) => {
  return (
    <div style={BagBoxStyle}>
      {children}
    </div>
  );
};
export default React.memo(RemoteBox);
