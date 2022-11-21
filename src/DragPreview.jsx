import * as React from "react";
import { PresentationalBagItem } from "./inventory/BagItem";

const DragPreview = ({ items, itemId }) => {
  const item = items[itemId];

  return <PresentationalBagItem containerId={itemId} item={item} />;
};

export default React.memo(DragPreview);
