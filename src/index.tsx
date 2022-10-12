// import { AuthService, useAuthState } from '@xrengine/client-core/src/user/services/AuthService'
import React, { useEffect, useState } from "react";
import InventoryContent from "./InventoryContent";
import { orderItems, orderTradeItems } from "./util/orderItems";
import "./styles/type.css";

export const Inventory = ({
  NFTs,
  items1,
  background,
  dragEvent,
  dropEvent,
}): any => {
  const [tradeNFTs, setTradeNFTs] = useState([]);
  const [item1, setItem1] = useState([]);

  const modalStyle = {
    background: background,
  };

  useEffect(() => {
    if (NFTs) {
      const newNFTs = orderItems(NFTs);
      const newItems1 = orderTradeItems(items1);
      setTradeNFTs(newNFTs);
      setItem1(newItems1);
    }
  }, []);

  return (
    <div id="inventory_trade" className="inventory-modal">
      {tradeNFTs.length > 0 ? (
        <div className={"inventory-content"} style={modalStyle}>
          <InventoryContent
            nftImage={tradeNFTs}
            tradeImages={item1}
            onMouseUp={dragEvent}
            onMouseDown={dropEvent}
          />
        </div>
      ) : (
        "No NFTs"
      )}
      <div id="inventory_top_left"></div>
      <div id="inventory_top_right"></div>
      <div id="inventory_bottom_right"></div>
      <div id="inventory_bottom_left"></div>
    </div>
  );
};

export default Inventory;
