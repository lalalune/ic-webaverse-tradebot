import React, { memo } from "react";
import { useDrop } from "react-dnd";
import { Types } from "../config";

import StyledBagBox from "./BagBox.style";

const Bag = ({
  children,
  updateItemOrder,
  bagId,
  hasItem,
  accept,
  className,
  showType,
  shouldHighlight
}) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Object.values(Types),
    drop(item) {
      if (item.bagId === bagId) return undefined;
      updateItemOrder(bagId, item);
      return undefined;
    },
    collect: monitor => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        type: monitor.getItemType()
      };
    }
  });

  return (
    <StyledBagBox
      isOver={isOver}
      canDrop={!hasItem && canDrop && shouldHighlight}
      ref={drop}
      className={className}
    >
      {showType && !children && <span className="slot-type">{accept}</span>}
      {children}
    </StyledBagBox>
  );
};
export default memo(Bag);
