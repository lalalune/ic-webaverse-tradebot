import React, { useEffect, memo, Fragment, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import StyledBagItem from "./BagItem.style";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ItemTypes } from "./ItemTypes";
import { clone } from "./funcs";

let lastClick = Date.now();

const handleClick = (item) => {
  console.log("click");
  // check for double click
  const now = Date.now();
  if (now - lastClick < 500) {
    // double click
    console.log("double click");
    console.log("item is", item);
    if (window && window.openInWebaverse) {
      window.openInWebaverse(item);
    }
  }
  lastClick = now;
};

export const PresentationalBagItem = ({
  drag,
  isDragging,
  item,
  // containerId,
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
      // data-for={containerId.toString()}
    >
      <div onClick={() => handleClick(item)}>
        {json &&
          json.image &&
          (json.image.includes("mp4") ? (
            <video src={json.image} autoPlay loop muted />
          ) : (
            <img src={json.image} />
          ))}
      </div>
    </StyledBagItem>
  );
};

const BagItem = ({
  item,
  bagId,
  isForTrade,
  index,
  tradeItems,
  updateTradeItems,
  tradeLayer,
}) => {
  const ref = useRef(null);
  // console.log("item, bagId, isForTrade", item, bagId, isForTrade);
  if (!item) item = {};
  item.isForTrade = isForTrade;
  item.type = "all";

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.LAYER1,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(hoverEl, monitor) {
      if (!ref.current || item.id !== undefined) {
        return;
      }
      const dragIndex = hoverEl.index;
      const hoverIndex = index;
      const cloneTradeItem = clone(item);
      const cloneTradeItems = clone(tradeItems);
      const cloneHoverTradeItem = clone(hoverEl.item);
      const cloneHoverTradeItems = clone(hoverEl.tradeItems);

      // Don't replace items with themselves
      if (dragIndex === hoverIndex && tradeLayer === hoverEl.tradeLayer) {
        return;
      }

      // Time to actually perform the action
      if (tradeLayer === hoverEl.tradeLayer) {
        cloneTradeItems[hoverIndex].item = cloneHoverTradeItem;
        cloneTradeItems[dragIndex].item = cloneTradeItem;
        updateTradeItems(cloneTradeItems);
      } else {
        console.log("cloneTradeItem: ", cloneTradeItem);
        console.log("cloneHoverTradeItem: ", cloneHoverTradeItem);
        cloneTradeItems[hoverIndex].item = cloneHoverTradeItem;
        cloneHoverTradeItems[dragIndex].item = cloneTradeItem;
        updateTradeItems(cloneTradeItems);
        hoverEl.updateTradeItems(cloneHoverTradeItems);
      }

      // Note: we're mutating the monitor hoverEl here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      hoverEl.index = hoverIndex;
      hoverEl.tradeLayer = tradeLayer;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LAYER1,
    canDrag: true,
    item: () => {
      return { index, tradeItems, updateTradeItems, item, tradeLayer };
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
        // containerId={item.id}
        drag={drag}
        isDragging={isDragging}
        item={item}
      />
    </div>
  );
};

export default memo(BagItem);
