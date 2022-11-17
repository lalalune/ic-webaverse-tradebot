import React, { memo, useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import classnames from "classnames";
import { GLTFModel } from "react-3d-viewer";

import { clone, isImage, isMedia, isModel } from "./utils/funcs";
import { useStore } from "./utils/store";
import { itemTypes } from "./utils/constants";

import StyledBagItem from "./BagItem.style";

export const PresentationalBagItem = ({ drag, isDragging, item }) => {
  const { setSelItem } = useStore();
  const modelRef = useRef(null);

  const handleClick = (event) => {
    switch (event.detail) {
      case 1:
        if (window && window.openInWebaverse) {
          window.openInWebaverse(item);
        } else {
          setSelItem(item);
        }
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const refContainer = modelRef?.current?.$container;
      if (refContainer?.children?.length > 1) {
        refContainer.removeChild(refContainer.firstChild);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return item ? (
    <StyledBagItem
      className="flex items-center justify-center class_model"
      ref={drag}
      isDragging={isDragging}
      onClick={handleClick}
    >
      {isImage(item?.metadata?.image) && (
        <img className="w-full h-full" src={item.metadata.image} />
      )}
      {isMedia(item?.metadata?.image) && (
        <video
          className="w-full h-full"
          src={item.metadata.image}
          autoPlay
          loop
          muted
        />
      )}
      {isModel(item?.metadata?.image) && (
        <GLTFModel
          ref={modelRef}
          width={96}
          height={96}
          src={item.metadata.image}
          enabled={false}
          position={{ x: -0.15, y: -0.3, z: -0.3 }}
        />
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
  const { plugActor, tradeData } = useStore();
  if (!item) item = {};
  item.isForTrade = isForTrade;
  // console.log("item: ", item);

  const [{ handlerId }, drop] = useDrop({
    accept: itemTypes.LAYER1,
    canDrop(dragItem, monitor) {
      const flag = tradeLayer !== "remote";
      return flag;
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    drop(dragEl, monitor) {
      // console.log("drag item: ", dragEl.item);
      // console.log("hover item: ", item);
      // if (!ref.current || item.canister || !plugActor || !tradeData) return; // When full item
      if (!ref.current || item.canister || !tradeData) return; // When full item

      const dragIndex = dragEl.index;
      const hoverIndex = index;
      const cloneDragTradeItem = clone(dragEl.item);
      const cloneDragTradeBoxes = clone(dragEl.tradeBoxes);
      const cloneHoverTradeItem = clone(item);
      const cloneHoverTradeBoxes = clone(tradeBoxes);

      console.log("cloneDragTradeItem: ", cloneDragTradeItem);
      // console.log("cloneHoverTradeItem: ", cloneHoverTradeItem);
      // console.log("cloneDragTradeBoxes: ", cloneDragTradeBoxes);
      // console.log("cloneHoverTradeBoxes: ", cloneHoverTradeBoxes);
      // console.log("tradeLayer: ", tradeLayer);
      // console.log("dragEl.tradeLayer: ", dragEl.tradeLayer);

      // Time to combine with ic
      if (dragEl.tradeLayer === "inventory" && tradeLayer === "local") {
        (async () => {
          // const res = await plugActor.add_item_to_trade(tradeData.id, {
          //   name: cloneDragTradeItem.metadata.name,
          //   canisterId: isCreator ? tradeData.host : tradeData.guest,
          //   tokenId: cloneDragTradeItem.id,
          // });
          // console.log("add_item_to_trade res: ", res);
          // const res = await plugActor.get_all_trades();
          // console.log("get_all_trades res: ", res);
        })();
      }

      if (dragEl.tradeLayer === "local" && tradeLayer === "inventory") {
        (async () => {
          // const res = await plugActor.remove_item_from_trade(tradeData.id, {
          //   name: cloneDragTradeItem.metadata.name,
          //   canisterId: isCreator ? tradeData.host : tradeData.guest,
          //   tokenId: cloneDragTradeItem.id,
          // });
          // console.log("remove_item_from_trade res: ", res);
        })();
      }

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
    type: itemTypes.LAYER1,
    canDrag: !!item.canister,
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
    <div
      className={classnames({ opacity: opacity })}
      ref={ref}
      data-handler-id={handlerId}
    >
      <PresentationalBagItem drag={drag} isDragging={isDragging} item={item} />
    </div>
  );
};

export default BagItem;
