import React from 'react';
import {Stack} from '@mui/material';

import {
  analyzeInventoryItems,
  analyzeTradeItems,
  getSlotItem,
} from './utils/funcs';
import {DragAndDrop} from './DragAndDrop';
import {InventoryComponent} from './InventoryComponent';
import {useStore} from './utils/store';

export const InventoryContent = () => {
  const {itemNumPerPage, nfts, items, updateItems, curPage} = useStore();

  const totalPage = Math.ceil(nfts.length / itemNumPerPage);

  const moveItemToSlot = (oldSlot, newSlot) => {
    const newItems = [...items];
    const item = getSlotItem(newItems, oldSlot);
    item.slot = newSlot;
    updateItems(newItems);
    console.log('analyzeInventoryItems: ', analyzeInventoryItems(newItems));
    console.log('analyzeTradeItems: ', analyzeTradeItems(newItems));
  };

  const getRemoteSlots = () => {
    const res = [];
    for (let i = 0; i < itemNumPerPage; i++) res.push(i);
    return res;
  };

  const getLocalSlots = () => {
    const res = [];
    for (let i = itemNumPerPage; i < itemNumPerPage * 2; i++) res.push(i);
    return res;
  };

  const getCurrentSlots = () => {
    const res = [];
    const startIndex = (curPage + 1) * itemNumPerPage;
    const endIndex = startIndex + itemNumPerPage;
    for (let i = startIndex; i < endIndex; i++) res.push(i);
    return res;
  };

  return (
    <>
      <div className="class_inventory_panel">
        {items.length !== 0 ? (
          <>
            <DragAndDrop moveItemToSlot={moveItemToSlot} />
            <InventoryComponent
              title="Remote Trade"
              getSlots={getRemoteSlots}
              isTrade={true}
              isAcceptedOffer={true}
            />
            <InventoryComponent
              title="Local Trade"
              getSlots={getLocalSlots}
              isTrade={true}
            />
          </>
        ) : (
          <Stack>
            <p className="class_common_text">No Data Found</p>
          </Stack>
        )}
      </div>
      <div className="class_inventory_panel">
        <InventoryComponent
          title="Inventory"
          totalPage={totalPage}
          getSlots={getCurrentSlots}
        />
      </div>
    </>
  );
};
