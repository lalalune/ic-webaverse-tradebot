import React from "react";
import StyledFrame from "./Frame.style";

const Frame = ({ children, title, className }) => (
  <StyledFrame className={className}>
    <div className="boxes-meta">
      {title && <span className="boxes-title">{title}</span>}
    </div>
    <div className="box-inner-container">{children}</div>
  </StyledFrame>
);

export default Frame;
