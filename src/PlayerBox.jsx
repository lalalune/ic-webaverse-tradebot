import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import BagItem from "./BagItem";

const style = {
  border: "1px solid gray",
  height: "80px",
  width: "80px"
};

const PlayerBox = ({ onDrop, currentItem, type }) => {
  const [{ isOver, draggingColor, canDrop }, drop] = useDrop({
    accept: [type],
    drop(item) {
      onDrop(item);
      return undefined;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      draggingColor: monitor.getItemType()
    })
  });
  const opacity = isOver ? 1 : 0.7;
  return (
    <div
      ref={drop}
      style={{
        ...style,
        opacity,
        border: canDrop?'1px solid gold': '1px solid gray',
      }}
    >
      <p>{type}</p>

      {currentItem && <BagItem item={currentItem} />}
    </div>
  );
};

const StatefulPlayerBox = props => {
  const [currentItem, setlastDropedType] = useState(null);
  const handleDrop = useCallback(item => setlastDropedType(item), []);
  return <PlayerBox {...props} currentItem={currentItem} onDrop={handleDrop} />;
};
export default StatefulPlayerBox;
