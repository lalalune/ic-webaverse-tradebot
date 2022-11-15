import React, { useEffect, memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import StyledBagItem from "./BagItem.style";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ItemTypes } from "./ItemTypes";

export const PresentationalBagItem = ({
  drag,
  isDragging,
  item,
  containerId,
}) => {
  if (!item) return null;
  const [json, setJson] = React.useState(null);
  useEffect(() => {
    const j = item.metadata?.json?.value.TextContent;
    let j2;
    if (j) j2 = JSON.parse(j);
    if (!j) {
      setJson({ name: item.collection, image: item.url });
      return;
    }
    setJson({ name: j2, image: j2.image });
  }, [item]);
  return (
    <StyledBagItem
      ref={drag}
      isDragging={isDragging}
      data-tip
      data-for={containerId.toString()}
    >
      {json && json.image && json.image.includes("mp4") ? (
        <video src={json.image} autoPlay loop muted />
      ) : (
        <img src={(json && json.image) || "assets/bastard-sword.png"} />
      )}
    </StyledBagItem>
  );
};

const BagItem = ({ item, bagId, isForTrade, index, swapItems }) => {
  const ref = useRef(null);

  // console.log('item, bagId, isForTrade', item, bagId, isForTrade)
  item.isForTrade = isForTrade;
  item.type = "all";

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.MINE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(hoverItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = hoverItem.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      swapItems(dragIndex, hoverIndex);

      // Note: we're mutating the monitor hoverItem here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      hoverItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.MINE,
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <PresentationalBagItem
        containerId={item.id}
        // drag={drag}
        // isDragging={isDragging}
        item={item}
      />
    </div>
  );
};

export default memo(BagItem);
