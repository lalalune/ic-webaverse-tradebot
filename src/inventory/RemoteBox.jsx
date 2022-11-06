import React, { memo } from "react";
import { useDrop } from "react-dnd";
import { Types } from "../config";

import StyledBagBox from "./BagBox.style";

const Bag = ({
  children,
  accept,
  className,
  showType,
}) => {

  return (
    <StyledBagBox
      isOver={false}
      canDrop={false}
      className={className}
    >
      {children}
    </StyledBagBox>
  );
};
export default memo(Bag);
