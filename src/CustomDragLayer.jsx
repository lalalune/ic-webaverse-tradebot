import React from "react";
import { useDragLayer } from "react-dnd";
import BoxDragPreview from "./BoxDragPreview";
import StyledCustomDragLayer from './CustomDragLayer.style';

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none"
    };
  }
  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}
const CustomDragLayer = props => {
  const { isDragging, item, initialOffset, currentOffset } = useDragLayer(
    monitor => ({
      item: monitor.getItem(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging()
    })
  );

  if (!isDragging) {
    return null;
  }
  return (
    <StyledCustomDragLayer>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        <BoxDragPreview itemId={item.id} />
      </div>
    </StyledCustomDragLayer>
  );
};
export default CustomDragLayer;
