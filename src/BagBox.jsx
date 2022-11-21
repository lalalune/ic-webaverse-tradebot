import React from "react";

import StyledBagBox from "./BagBox.style";

const BagBox = ({ className, children, isOver, canDrop }) => {
  return (
    <StyledBagBox className={className} isOver={isOver} canDrop={canDrop}>
      {children}
    </StyledBagBox>
  );
};

export default React.memo(BagBox);
