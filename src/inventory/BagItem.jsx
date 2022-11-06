import React, { useEffect, memo, Fragment } from "react";
import { useDrag } from "react-dnd";
import StyledBagItem from "./BagItem.style";
import { getEmptyImage } from "react-dnd-html5-backend";
import ReactTooltip from "react-tooltip";
import StyledItemTooltip from "./ItemTooltip.style";

export const PresentationalBagItem = ({
  drag,
  isDragging,
  item,
  count,
  containerId
}) => {
  if (!item) return null;
  return (
    <StyledItemTooltip>
      <StyledBagItem
        ref={drag}
        isDragging={isDragging}
        data-tip
        data-for={containerId.toString()}
      >
        <img src={item.image} />
        <div className="item-meta">
          {count && count > 1 && <span className="item-count"> x {count}</span>}
        </div>
      </StyledBagItem>
      {!isDragging && (
        <ReactTooltip
          id={containerId.toString()}
          effect="solid"
          border={false}
          className="react-tooltip"
        >
          <ul>
            <li>
              Name: <strong>{item.name}</strong>
            </li>
            <li>
              Type: <strong>{item.type}</strong>
            </li>
            
          </ul>
        </ReactTooltip>
      )}
    </StyledItemTooltip>
  );
};

const BagItem = ({ item, bagId, count, isEquiped }) => {

  const [{ isDragging }, drag, preview] = useDrag({
    item: Object.assign(item, { bagId, isEquiped, count }),
    canDrag: true,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <PresentationalBagItem
      containerId={bagId}
      drag={drag}
      isDragging={isDragging}
      item={item}
      count={count}
    />
  );
};

export default memo(BagItem);
