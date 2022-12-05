import React from "react";

import StyledBagBox from "./BagBox.style";

const BagBox = ({ children, isOver, canDrop }) => {
  return (
    <StyledBagBox isOver={isOver} canDrop={canDrop}>
      {children}
    </StyledBagBox>
  );
};

export default React.memo(BagBox);
