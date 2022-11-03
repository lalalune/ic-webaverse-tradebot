import React from 'react';
import {InventoryComponent} from './InventoryComponent';
import {useStore} from './store';
import {getSortedItems} from './funcs';

export const InventoryContent = () => {
  const {items, itemNumPerPage, curInventoryPage, updateCurInventoryPage} =
    useStore();

  const inventoryItems = getSortedItems({
    items: items.filter(item => item.slotType === 'inventory'),
    slotType: 'inventory',
    itemNumPerPage,
  });
  const remoteItems = getSortedItems({
    items: items.filter(item => item.slotType === 'remote'),
    slotType: 'remote',
    itemNumPerPage,
  });
  const localItems = getSortedItems({
    items: items.filter(item => item.slotType === 'local'),
    slotType: 'local',
    itemNumPerPage,
  });

  return (
    <>
      <div className="class_inventory_panel">
        <InventoryComponent
          title="Remote Trade"
          compItems={remoteItems}
          isTrade={true}
          isAcceptedOffer={false}
        />
        <InventoryComponent
          title="Local Trade"
          compItems={localItems}
          isTrade={true}
        />
      </div>
      <div className="class_inventory_panel">
        <InventoryComponent
          title="Inventory"
          compItems={inventoryItems}
          pageNum={Math.ceil(inventoryItems.length / itemNumPerPage)}
          curPage={curInventoryPage}
          updatePage={updateCurInventoryPage}
        />
      </div>
    </>
  );
};
