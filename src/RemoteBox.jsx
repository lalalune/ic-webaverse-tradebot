import React from "react";

import StyledBagBox from "./BagBox.style";

const RemoteBox = ({ children }) => {
  return (
    <StyledBagBox isOver={false} canDrop={false}>
      {children}
    </StyledBagBox>
  );
};
export default React.memo(RemoteBox);
