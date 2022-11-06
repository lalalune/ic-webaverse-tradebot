import React, { memo } from "react";
import { PresentationalBagItem } from "./inventory/BagItem";

const DragPreview = ({ items, itemId }) => {
  const item = items[itemId];
  return (
    <PresentationalBagItem containerId={item.id} item={item} />
  );
};

export default memo(DragPreview);
