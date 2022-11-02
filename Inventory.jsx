import React from 'react';
import {InventoryContent} from './InventoryContent';
import './inventory.css';

const Inventory = () => {
  // console.log('Inventory Render');

  return (
    <div className="class_inventory">
      <InventoryContent />
      <div className="class_inventory_tl"></div>
      <div className="class_inventory_tr"></div>
      <div className="class_inventory_br"></div>
      <div className="class_inventory_bl"></div>
    </div>
  );
};

export default Inventory;
