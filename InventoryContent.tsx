import React, { useState, useEffect } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { IconButton, Stack } from "@mui/material"

import {
  analyzeInventoryItems,
  analyzeTradeItems,
  getSlotItem
} from "./utils/funcs"
import DragAndDropAPI from "./DragAndDrop"
import InventoryComponent from "./InventoryComponent"
import { useStore } from './utils/store'

const InventoryContent = () => {
  const {
    itemNumPerPage, updateItemNumPerPage,
    nfts, updateNfts, tradeItems,
    updateTradeItems, items, updateItems,
    selSlot, updateSelSlot,
    curPage
  } = useStore()

  const totalPage = Math.ceil(nfts.length / itemNumPerPage)

  const moveItemToSlot = (oldSlot: number, newSlot: number) => {
    const newItems = [...items]
    const item = getSlotItem(newItems, oldSlot)
    item!.slot = newSlot
    updateItems(newItems)
    console.log("analyzeInventoryItems: ", analyzeInventoryItems(newItems))
    console.log("analyzeTradeItems: ", analyzeTradeItems(newItems))
  }

  const getRemoteSlots = () => {
    const res: any = []
    for (let i = 0; i < itemNumPerPage; i++) res.push(i)
    return res
  }

  const getLocalSlots = () => {
    const res: any = []
    for (let i = itemNumPerPage; i < itemNumPerPage * 2; i++) res.push(i)
    return res
  }

  const getCurrentSlots = () => {
    const res: any = []
    const startIndex = (curPage + 1) * itemNumPerPage
    const endIndex = startIndex + itemNumPerPage
    for (let i = startIndex; i < endIndex; i++) res.push(i)
    return res
  }

  return (
    <>
      <div className="class-inventory-panel">
        {items.length !== 0 ? (
          <>
            <DragAndDropAPI moveItemToSlot={moveItemToSlot} />
            <InventoryComponent
              title="Remote Trade"
              getSlot={getRemoteSlots}
              isTrade={true}
              isAcceptedOffer={true}
            />
            <InventoryComponent
              title="Local Trade"
              getSlot={getLocalSlots}
              isTrade={true}
            />
          </>
        ) : (
          <Stack>
            <p className="class-inventory-text">No Data Found</p>
          </Stack>
        )}
      </div>
      <div className="class-inventory-panel">
        <InventoryComponent
          title="Inventory"
          totalPage={totalPage}
          getSlot={getCurrentSlots}
        />
      </div>
    </>
  )
}

export default InventoryContent
