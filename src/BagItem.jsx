import React, { useEffect, memo, Fragment } from "react";
import { useDrag } from "react-dnd";
import StyledBagItem from "./BagItem.style";
import { getEmptyImage } from "react-dnd-html5-backend";

let lastclick = Date.now();
  
const handleClick = (item) => {
  console.log('click')
  // check for double click
  const now = Date.now();
  if (now - lastclick < 500) {
    // double click
    console.log('double click');
    console.log('item is', item);
    if(window && window.openInWebaverse){
      window.openInWebaverse(item);
    }
  }
  lastclick = now;

}

export const PresentationalBagItem = ({
  drag,
  isDragging,
  item,
  containerId
}) => {
  if (!item) return null;
  const [json, setJson] = React.useState(null);
  useEffect(() => {
    const j = item.metadata?.json?.value.TextContent
    let j2;
    if(j)
    j2 = JSON.parse(j)
    if(!j) {
      setJson({name: item.collection, image: item.url });
      return
    }
      setJson({name: j2, image: j2.image});
  }, [item]);

  return (
      <StyledBagItem
        ref={drag}
        isDragging={isDragging}
        data-tip
        data-for={containerId.toString()}
      >
      <div         onClick={() => handleClick(item)}>
      {json && json.image && json.image.includes('mp4') ? (
        <video src={json.image} autoPlay loop muted />
      ) : (
        <img src={(json && json.image) || "assets/bastard-sword.png"} />
      )}
      </div>
      </StyledBagItem>
  );
};

const BagItem = ({ item, bagId, isForTrade }) => {
  console.log('item, bagId, isForTrade', item, bagId, isForTrade)
  item.isForTrade = isForTrade;
  item.type = "all";
  const [{ isDragging }, drag, preview] = useDrag({
    item,
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
      containerId={item.id}
      drag={drag}
      isDragging={isDragging}
      item={item}
    />
  );
};

export default memo(BagItem);
