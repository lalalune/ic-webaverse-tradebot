import React, { memo } from "react";
import { PresentationalBagItem } from "./inventory/BagItem";
import * as R from 'ramda';

const DragPreview = ({ items, itemId, count }) => {
  const item = items[itemId];
  return (
    <PresentationalBagItem containerId={R.prop('id', item)} item={item} count={count} />
  );
};

export default memo(DragPreview);
