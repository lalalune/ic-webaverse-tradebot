import React, {useEffect, useRef} from 'react';
import {InventoryContent} from './InventoryContent';
import './inventory.css';
import {useStore} from './store';
import {getPosInInventory} from './funcs';

const Inventory = () => {
  // console.log('Inventory Render');

  const {
    items,
    updateItems,
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
    // console.log('Inventory inventoryEl: ', inventoryRef.current);
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
          // itemEl: selCloneItemEl,
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

export default Inventory;
