import React, { memo } from "react";

import StyledBagBox from "./BagBox.style";

const Bag = ({ children, className }) => {
  return (
    <StyledBagBox isOver={false} canDrop={false} className={className}>
      {children}
    </StyledBagBox>
  );
};
export default memo(Bag);
