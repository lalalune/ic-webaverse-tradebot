import React, { memo } from "react";

import StyledBagBox from "./BagBox.style";

const Bag = ({
  children,
  type,
  className,
  showType,
  shouldHighlight,
  isOver,
  canDrop,
}) => {
  return (
    <StyledBagBox className={className} isOver={isOver} canDrop={canDrop}>
      {showType && !children && <span className="slot-type">{type}</span>}
      {children}
    </StyledBagBox>
  );
};
export default memo(Bag);
