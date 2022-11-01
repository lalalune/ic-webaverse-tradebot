import './inventory.css';
import React, {useEffect} from 'react';
// import {useStore} from './utils/store';
// import {orderItems, orderTradeItems} from './utils/funcs';
// import InventoryContent from './InventoryContent';

const Inventory = () => {
  // const { nfts, updateNfts, tradeItems, updateTradeItems, updateItems } =
  //   useStore();

  // useEffect(() => {
  //   updateNfts(orderItems(nfts));
  //   updateTradeItems(orderTradeItems(tradeItems));
  // }, []);

  // useEffect(() => {
  //   updateItems([...nfts, ...tradeItems]);
  // }, [nfts, tradeItems]);

  return (
    <div className="class-inventory">
      {/* <InventoryContent /> */}
      <div id="class-inventory-top-left">Test</div>
      <div id="class-inventory-top-right"></div>
      <div id="class-inventory-bottom-right"></div>
      <div id="class-inventory-bottom-left"></div>
    </div>
  );
};

export default Inventory;
