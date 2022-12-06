import React from "react";

export const BagBoxStyle = {
  position: "relative",
  width: "40px",
  display: "inline-block",
  height: "40px",
  margin: "4px",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "radial-gradient(#0c1e20 0%, #101010 66%)",
  borderRadius: "2px",
  boxShadow: "0px 0px 0px 2px #2f3639"
}

const BagBox = ({ children, isOver, candrop }) => {
  return (
    <div isover={isOver} candrop={candrop} style={{
      border: candrop
      ? `1px solid ${isOver ? "green" : "gold"}`
      : "1px solid #0c1e20", ...BagBoxStyle}}>
      {children}
    </div>
  );
};

export default React.memo(BagBox);