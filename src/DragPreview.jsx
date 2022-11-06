import React, { memo } from "react";
import { itemDictionary } from "./config";
import { PresentationalBagItem } from "./inventory/BagItem";
import * as R from 'ramda';

const DragPreview = ({ itemId, count }) => {
  const item = itemDictionary[itemId];
  return (
    <PresentationalBagItem containerId={R.prop('id', item)} item={item} count={count} />
  );
};

export default memo(DragPreview);
