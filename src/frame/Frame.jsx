import React from "react";
import StyledFrame from "./Frame.style";

const Frame = ({ children, title, className, style }) => (
  <StyledFrame className={className}>
    <div className="boxes-meta" style={style}>
      {title && <span className="boxes-title">{title}</span>}
    </div>
    <div className="box-inner-container">{children}</div>
  </StyledFrame>
);

export default Frame;
