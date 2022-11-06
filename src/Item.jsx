import React from 'react';
import {Stack} from '@mui/material';
import {useStore} from './store.jsx';
import {getPosInInventory} from './funcs.jsx';

export const Item = ({item, isTrade}) => {
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
      onMouseDown={e => {
        if (selItem || selItemEl || selCloneItemEl) return;
        const itemEl = e.target;
        const cloneItemEl = itemEl.cloneNode(true);
        const {x, y} = getPosInInventory({
          x: e.clientX,
          y: e.clientY,
          inventoryEl,
          inventoryTLEl,
          inventoryTREl,
          inventoryBREl,
          inventoryBLEl,
        });
        cloneItemEl.style.left = `${x}px`;
        cloneItemEl.style.top = `${y}px`;
        inventoryEl.appendChild(cloneItemEl);
        itemEl.className += ' selected';
        cloneItemEl.className += ' virtual';
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
          e => e.slot === selItem.slot && e.slotType === selItem.slotType,
        );
        cloneItems[selItemIndex].slot = item.slot;
        cloneItems[selItemIndex].slotType = item.slotType;
        updateItems(cloneItems);
      }}
    ></Stack>
  );
};
