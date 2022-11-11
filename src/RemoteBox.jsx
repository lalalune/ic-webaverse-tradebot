import React, { memo } from "react";

import StyledBagBox from "./BagBox.style";

const RemoteBox = ({ className, children }) => {
  return (
    <StyledBagBox className={className} isOver={false} canDrop={false}>
      {children}
    </StyledBagBox>
  );
};
export default memo(RemoteBox);
