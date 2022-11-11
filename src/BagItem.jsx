import React, { useEffect, memo, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import StyledBagItem from "./BagItem.style";
import { ItemTypes } from "./ItemTypes";
import { clone } from "./funcs";
import { useStore } from "./store";
import { Stack } from "@mui/system";

let lastClick = Date.now();

export const PresentationalBagItem = ({ drag, isDragging, item }) => {
  const [metadata, setMetadata] = useState(null);
  const { updateSelItem } = useStore();

  const handleClick = (item) => {
    // check for double click
    const now = Date.now();
    if (now - lastClick < 500) {
      // double click
      if (window && window.openInWebaverse) {
        window.openInWebaverse(item);
      } else {
        updateSelItem(item);
      }
    }
    lastClick = now;
  };

  useEffect(() => {
    if (!item || !item.canister) {
      setMetadata(null);
      return;
    }
    // console.log("item: ", item);
    const jsonMetadata = item.metadata?.json?.value.TextContent;
    let _metadata;

    if (jsonMetadata) {
      _metadata = JSON.parse(jsonMetadata);
    } else {
      _metadata = {
        name: item.collection,
        image: item.url,
      };
    }

    // console.log("metadata: ", _metadata);
    setMetadata(_metadata);
  }, [item]);

  return item ? (
    <StyledBagItem ref={drag} isDragging={isDragging} data-tip>
      {metadata ? (
        <>
          {metadata.image ? (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
              onClick={() => handleClick(item)}
            >
              {metadata.image.includes("mp4") && (
                <video src={metadata.image} autoPlay loop muted />
              )}
              {(metadata.image.includes("jpg") ||
                metadata.image.includes("png")) && <img src={metadata.image} />}
              Image
            </Stack>
          ) : (
            <>No Image</>
          )}
        </>
      ) : (
        <></>
      )}
    </StyledBagItem>
  ) : (
    <></>
  );
};

const BagItem = ({
  item,
  isForTrade,
  index,
  tradeBoxes,
  updateTradeBoxes,
  tradeLayer,
}) => {
  const ref = useRef(null);
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
    drop(dragEl, monitor) {
      // console.log("drag item: ", dragEl.item);
      // console.log("hover item: ", item);
      if (!ref.current || item.canister) return; // When full item

      const dragIndex = dragEl.index;
      const hoverIndex = index;
      const cloneDragTradeItem = clone(dragEl.item);
      const cloneDragTradeBoxes = clone(dragEl.tradeBoxes);
      const cloneHoverTradeItem = clone(item);
      const cloneHoverTradeBoxes = clone(tradeBoxes);

      // console.log("cloneDragTradeItem: ", cloneDragTradeItem);
      // console.log("cloneHoverTradeItem: ", cloneHoverTradeItem);
      // console.log("cloneDragTradeBoxes: ", cloneDragTradeBoxes);
      // console.log("cloneHoverTradeBoxes: ", cloneHoverTradeBoxes);

      // Time to actually perform the action
      if (tradeLayer === dragEl.tradeLayer) {
        cloneDragTradeBoxes[dragIndex].item = cloneHoverTradeItem;
        cloneDragTradeBoxes[hoverIndex].item = cloneDragTradeItem;
        updateTradeBoxes(cloneDragTradeBoxes);
      } else {
        cloneDragTradeBoxes[dragIndex].item = cloneHoverTradeItem;
        cloneHoverTradeBoxes[hoverIndex].item = cloneDragTradeItem;
        dragEl.updateTradeBoxes(cloneDragTradeBoxes);
        updateTradeBoxes(cloneHoverTradeBoxes);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LAYER1,
    canDrag: true,
    item: () => {
      return { index, tradeBoxes, updateTradeBoxes, item, tradeLayer };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <PresentationalBagItem drag={drag} isDragging={isDragging} item={item} />
    </div>
  );
};

export default memo(BagItem);
