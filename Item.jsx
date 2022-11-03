import React from 'react';
import {Stack} from '@mui/material';
import {useStore} from './store';
import {getLength, getPosInInventory} from './funcs';

export const Item = ({item, isTrade}) => {
  // console.log('Item Render');

  const {
    items,
    updateItems,
    inventoryEl,
    inventoryTLEl,
    inventoryTREl,
    inventoryBREl,
    inventoryBLEl,
    selItem,
    updateSelItem,
    selItemEl,
    updateSelItemEl,
    selCloneItemEl,
    updateSelCloneItemEl,
  } = useStore();

  return item && item.name ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={`class_item ${
        isTrade ? 'class_trade_item' : 'class_user_item'
      }`}
      data-item-slot={item.slot}
      onMouseDown={e => {
        if (selItemEl || selCloneItemEl) return;
        const itemEl = e.target;
        const cloneItemEl = itemEl.cloneNode(true);
        itemEl.className += ' selected';
        cloneItemEl.className += ' virtual';
        inventoryEl.appendChild(cloneItemEl);
        // console.log('itemEl: ', itemEl);
        // console.log('cloneItemEl: ', cloneItemEl);
        // console.log('onClick Position: ', e.clientX, e.clientY);
        // console.log('inventoryEl Rect: ', inventoryEl.getBoundingClientRect());
        const {x, y} = getPosInInventory({
          x: e.clientX,
          y: e.clientY,
          // itemEl,
          inventoryEl,
          inventoryTLEl,
          inventoryTREl,
          inventoryBREl,
          inventoryBLEl,
        });
        // console.log('top left: ', top, left);
        cloneItemEl.style.left = `${x}px`;
        cloneItemEl.style.top = `${y}px`;
        updateSelItem(item);
        updateSelItemEl(itemEl);
        updateSelCloneItemEl(cloneItemEl);
      }}
    >
      <img className="class_item_image" src={item.image} />
      <div>
        <span className="class_item_name">{item.name}</span>
      </div>
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={`class_item empty ${
        isTrade ? 'class_trade_item' : 'class_user_item'
      }`}
      onMouseDown={e => {
        if (!selItem) return;
        const cloneItems = [...items];
        const selItemIndex = cloneItems.findIndex(
          item =>
            item.slot === selItem.slot && item.slotType === selItem.slotType,
        );
        // console.log('selItemIndex: ', selItemIndex);
        cloneItems[selItemIndex].slot = item.slot;
        updateItems(cloneItems);
      }}
    ></Stack>
  );
};
