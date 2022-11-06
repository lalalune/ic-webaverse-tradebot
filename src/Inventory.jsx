import React, {useEffect, useRef} from 'react';
import {InventoryContent} from './InventoryContent.jsx';
import {useStore} from './store.jsx';
import {getPosInInventory} from './funcs.jsx';
import './inventory.css';

export const Inventory = () => {
  const {
    updateSelItem,
    selItemEl,
    updateSelItemEl,
    selCloneItemEl,
    updateSelCloneItemEl,
    inventoryEl,
    updateInventoryEl,
    inventoryTLEl,
    updateInventoryTLEl,
    inventoryTREl,
    updateInventoryTREl,
    inventoryBREl,
    updateInventoryBREl,
    inventoryBLEl,
    updateInventoryBLEl,
  } = useStore();

  const inventoryRef = useRef();
  const inventoryTLRef = useRef();
  const inventoryTRRef = useRef();
  const inventoryBRRef = useRef();
  const inventoryBLRef = useRef();

  useEffect(() => {
    updateInventoryEl(inventoryRef.current);
    updateInventoryTLEl(inventoryTLRef.current);
    updateInventoryTREl(inventoryTRRef.current);
    updateInventoryBREl(inventoryBRRef.current);
    updateInventoryBLEl(inventoryBLRef.current);
  }, []);

  return (
    <div
      ref={inventoryRef}
      className="class_inventory"
      onMouseMove={e => {
        if (!selCloneItemEl) return;
        const {x, y} = getPosInInventory({
          x: e.clientX,
          y: e.clientY,
          inventoryEl,
          inventoryTLEl,
          inventoryTREl,
          inventoryBREl,
          inventoryBLEl,
        });
        selCloneItemEl.style.left = `${x}px`;
        selCloneItemEl.style.top = `${y}px`;
      }}
      onMouseDown={e => {
        if (!selItemEl || !selCloneItemEl) return;
        selItemEl.className = selItemEl.className.replace(' selected', '');
        inventoryEl.removeChild(selCloneItemEl);
        updateSelItem(null);
        updateSelItemEl(null);
        updateSelCloneItemEl(null);
      }}
    >
      <InventoryContent />
      <div ref={inventoryTLRef} className="class_inventory_tl"></div>
      <div ref={inventoryTRRef} className="class_inventory_tr"></div>
      <div ref={inventoryBRRef} className="class_inventory_br"></div>
      <div ref={inventoryBLRef} className="class_inventory_bl"></div>
    </div>
  );
};