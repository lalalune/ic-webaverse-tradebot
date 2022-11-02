import React from 'react';
import {InventoryComponent} from './InventoryComponent';
import {useStore} from './store';
import {getSortedItems} from './funcs';

export const InventoryContent = () => {
  // console.log('InventoryContent Render');

  const {items, itemNumPerPage, curInventoryPage, updateCurInventoryPage} =
    useStore();
  // console.log('items: ', items);
  // console.log('itemNumPerPage: ', itemNumPerPage);
  // console.log('curInventoryPage: ', curInventoryPage);
  const inventoryItems = getSortedItems(
    items.filter(item => item.slotType === 'inventory'),
  );
  // console.log('inventoryItems: ', inventoryItems);
  const remoteItems = getSortedItems(
    items.filter(item => item.isTrade && item.slotType === 'remote'),
  );
  // console.log('remoteItems: ', remoteItems);
  const localItems = getSortedItems(
    items.filter(item => item.isTrade && item.slotType === 'local'),
  );
  // console.log('localItems: ', localItems);

  return (
    <>
      <div className="class_inventory_panel">
        <InventoryComponent
          title="Remote Trade"
          compItems={remoteItems}
          isTrade={true}
          // isAcceptedOffer={true}
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
