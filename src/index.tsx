// import { AuthService, useAuthState } from '@xrengine/client-core/src/user/services/AuthService'
import React, { useEffect, useState } from "react"
import InventoryContent from "./InventoryContent"
import { orderItems, orderTradeItems } from "./util/orderItems"
import "./styles/type.css"

export const Inventory = ({
  items0,
  items1,
  background,
  dragEvent,
  dropEvent,
}): any => {
  const [item0, setItem0] = useState([])
  const [item1, setItem1] = useState([])

  const modalStyle = {
    background: background,
  }

  useEffect(() => {
    if (items0) {
      const newItems0 = orderItems(items0)
      const newItems1 = orderTradeItems(items1)
      setItem0(newItems0)
      setItem1(newItems1)
    }
  }, [])

  return (

    <div id="inventory_trade" className="inventory-modal">
      {item0.length > 0 ? (
        <div className={"inventory-content"} style={modalStyle}>
          <InventoryContent
            nftImage={item0}
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
  )
}

export default Inventory
