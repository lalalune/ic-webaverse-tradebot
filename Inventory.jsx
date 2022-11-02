import React, {useEffect} from 'react';
import {useStore} from './utils/store';
import {orderItems, orderTradeItems} from './utils/funcs';
import {InventoryContent} from './InventoryContent';
import './inventory.css';

const Inventory = () => {
  const {nfts, updateNfts, tradeItems, updateTradeItems, items, updateItems} =
    useStore();

  useEffect(() => {
    updateNfts(orderItems(nfts));
    updateTradeItems(orderTradeItems(tradeItems));
  }, []);

  useEffect(() => {
    updateItems([...nfts, ...tradeItems]);
  }, [nfts, tradeItems]);

  useEffect(() => {
    console.log('items: ', items);
  }, [items]);

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
