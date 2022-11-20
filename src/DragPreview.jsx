import * as React from "react";
import { PresentationalBagItem } from "./inventory/BagItem";

const DragPreview = ({ items, itemId }) => {
  const item = items[itemId];
  console.log("items", items);

  return <PresentationalBagItem containerId={itemId} item={item} />;
};

export default React.memo(DragPreview);
