import React from "react";

import StyledFrame from "./Frame.style";

const Frame = ({ className, children }) => (
  <StyledFrame className={className}>
    <div className="w-full h-full p-3 rounded shadow-inner bg-[url('/frame/bg.jpg')] bg-center bg-cover">
      {children}
    </div>
  </StyledFrame>
);

export default Frame;
