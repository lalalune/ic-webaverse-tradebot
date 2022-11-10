import React, { memo } from "react";
import { PresentationalBagItem } from "./BagItem";

const DragPreview = ({ items, itemId }) => {
  const item = items[itemId];
  console.log('items', items);
  
  return (
    <PresentationalBagItem containerId={itemId} item={item} />
  );
};

export default memo(DragPreview);
