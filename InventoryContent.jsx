import React from 'react';
import {Stack} from '@mui/material';
import {InventoryComponent} from './InventoryComponent';
import {useStore} from './store';

export const InventoryContent = () => {
  // console.log('InventoryContent Render');

  const {items, itemNumPerPage, curInventoryPage, updateCurInventoryPage} =
    useStore();
  // console.log('items: ', items);
  // console.log('itemNumPerPage: ', itemNumPerPage);
  // console.log('curInventoryPage: ', curInventoryPage);
  const inventoryItems = items.filter(item => item.slotType === 'inventory');
  // console.log('inventoryItems: ', inventoryItems);
  const tradeItems = items.filter(item => item.isTrade);
  // console.log('tradeItems: ', tradeItems);
  const remoteItems = items.filter(
    item => item.isTrade && item.slotType === 'remote',
  );
  // console.log('remoteItems: ', remoteItems);
  const localItems = items.filter(
    item => item.isTrade && item.slotType === 'local',
  );
  // console.log('localItems: ', localItems);

  return (
    <>
      <div className="class_inventory_panel">
        {tradeItems.length ? (
          <>
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
          </>
        ) : (
          <Stack
            className="class_common_text"
            justifyContent="center"
            alignItems="center"
          >
            No Data Found
          </Stack>
        )}
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
