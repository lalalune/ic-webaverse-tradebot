import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { GLTFModel } from "react-3d-viewer";
import { Principal } from "@dfinity/principal"

import { clone, isImage, isMedia, isModel } from "./utils";
import { itemTypes } from "./constants";

export const PresentationalBagItem = ({ isDragging, item, setSelItem }) => {
  const modelRef = React.useRef(null);

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
        console.log('handling double click')
        break;
      case 3:
        console.log('handling triple click')
        break;
      default:
        console.log('handling default click')
        break;
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const refContainer = modelRef && modelRef.current && modelRef.current.$container;
      if (refContainer && refContainer.children && refContainer.children.length > 1) {
        refContainer.removeChild(refContainer.firstChild);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return item && (
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "0 !important",
        opacity: isDragging ? 0 : 1,
        cursor: "grab",
        img: {
          maxWidth: "100%"
        },
        video: {
          maxWidth: "100%"
        },
      }}
      onClick={handleClick}
    >
      {isImage(item?.url) && (
        <span onClick={handleClick}>
          <img
            crossOrigin="anonymous"
            referrerPolicy="no-referer-on-downgrade"
            style={{}}
            src={item.url}
            onClick={handleClick}
          />
        </span>
      )}
      {isMedia(item?.url) && (
        <span onClick={handleClick}>
          <video
            crossOrigin="anonymous"
            referrerPolicy="no-referer-on-downgrade"
            style={{}}
            src={item.url}
            autoPlay
            loop
            muted
          />
        </span>
      )}
      {isModel(item?.url) && (
        <GLTFModel
          ref={modelRef}
          width={38}
          height={38}
          src={item.url}
          enabled={false}
          position={{ x: -0.15, y: -0.3, z: -0.3 }}
          onClick={handleClick}
        />
      )}
    </div>
  )
};

const BagItem = ({
  item,
  isForTrade,
  index,
  tradeBoxes,
  setTradeBoxes,
  tradeLayer,
  plugActor,
  tradeData,
  setSelItem,
  setLoading,
  setMessage,
  isConfirmedItem,
}) => {
  const ref = React.useRef(null);
  if (!item) item = {};
  item.isForTrade = isForTrade;
  // console.log("item: ", item);

  const [{ handlerId }, drop] = useDrop({
    accept: itemTypes.LAYER1,
    candrop(dragItem, monitor) {
      const flag = (tradeLayer !== "remote");
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
      if ((dragEl.index === index && dragEl.tradeLayer === tradeLayer) || tradeLayer === 'remote') return;

      const dragIndex = dragEl.index;
      const hoverIndex = index;
      const cloneDragTradeItem = clone(dragEl.item);
      cloneDragTradeItem.slot = hoverIndex
      const cloneDragTradeBoxes = clone(dragEl.tradeBoxes);
      const cloneHoverTradeItem = clone(item);
      cloneHoverTradeItem.slot = dragIndex
      const cloneHoverTradeBoxes = clone(tradeBoxes);

      console.log("cloneDragTradeItem: ", cloneDragTradeItem);
      console.log("cloneDragTradeItem canister: ", Principal.fromText(cloneDragTradeItem.canister_id));

      // Time to combine with ic
      if (dragEl.tradeLayer === "inventory" && tradeLayer === "local") {
        (async () => {
          setLoading(true)
          const canisterItem = {
            token_id: parseInt(cloneDragTradeItem.token_id), name: cloneDragTradeItem.name, canister_id: Principal.fromText(cloneDragTradeItem.canister_id)
          }
          const res = await plugActor.add_item_to_trade(tradeData.id, canisterItem);
          console.log('add_item_to_trade res: ', res)
          setLoading(false)
        })();
      }

      if (dragEl.tradeLayer === "local" && tradeLayer === "inventory") {
        if (isConfirmedItem(cloneDragTradeItem.token_id)) {
          setMessage('This item is confirmed.')
          return
        }
        (async () => {
          setLoading(true)
          const res = await plugActor.remove_item_from_trade(tradeData.id, {
            token_id: parseInt(cloneDragTradeItem.token_id), name: cloneDragTradeItem.name, canister_id: Principal.fromText(cloneDragTradeItem.canister_id)
          });
          console.log("remove_item_from_trade res: ", res);
          setLoading(false)
        })();
      }

      // Time to actually perform the action
      if (tradeLayer === dragEl.tradeLayer) {
        // setTradeBoxes((prevBox) =>
        //   update(prevBox, {
        //     $splice: [
        //       [dragIndex, 1],
        //       [hoverIndex, 0, prevBox[dragIndex]],
        //     ],
        //   }),
        // )
        cloneHoverTradeBoxes[dragIndex].item = cloneHoverTradeItem;
        cloneHoverTradeBoxes[hoverIndex].item = cloneDragTradeItem;
        setTradeBoxes(cloneHoverTradeBoxes);
      } else {
        cloneDragTradeBoxes[dragIndex].item = cloneHoverTradeItem;
        cloneHoverTradeBoxes[hoverIndex].item = cloneDragTradeItem;
        dragEl.setTradeBoxes(cloneDragTradeBoxes);
        setTradeBoxes(cloneHoverTradeBoxes);
      }

      dragEl.index = hoverIndex
      dragEl.tradeLayer = tradeLayer
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.LAYER1,
    canDrag: !!item.canister_id && tradeLayer !== 'remote',
    item: () => {
      return { index, tradeBoxes, setTradeBoxes, item, tradeLayer };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      style={{
        opacity,
        display: "inline",
      }}
      ref={ref}
      data-handler-id={handlerId}
    >
      <PresentationalBagItem isDragging={isDragging} item={item} setSelItem={setSelItem} />
    </div>
  );
};

export default BagItem;
