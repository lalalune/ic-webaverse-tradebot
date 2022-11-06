import React from "react";
import { useDragLayer } from "react-dnd";
import DragPreview from "./DragPreview";
import StyledDragLayer from './DragLayer.style';

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
const DragLayer = props => {
  const {items} = props;
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
    <StyledDragLayer>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        <DragPreview items={items} itemId={item.id} />
      </div>
    </StyledDragLayer>
  );
};
export default DragLayer;
