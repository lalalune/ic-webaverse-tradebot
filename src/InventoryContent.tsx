import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import React, { useState, useEffect } from "react"
import { IconButton, Stack } from "@mui/material"

import {
  inventoryLimit,
  analyzeInventoryItems,
  analyzeTradeItems,
} from "./util/orderItems"
import DragAndDropAPI from "./DragAndDropAPI"
import InventoryComponent from "./InventoryComponent"

const InventoryContent = ({
  nftImage,
  tradeImages,
  onMouseUp,
  onMouseDown,
}) => {
  const [state, setState] = useState({
    tradePage: 1,
    currentPage: 1,
  })

  const totalPage = Math.ceil(nftImage?.length / inventoryLimit)

  const [items, setItems] = useState([...tradeImages, ...nftImage])
  const [draggingSlotId, setDraggingSlot] = useState(null)
  const getItemDataInSlot = (slot) => items.find((item) => item.slot === slot)

  const moveItemToSlot = (oldSlot, newSlot) => {
    setItems((currentState) => {
      let newInventory = [...currentState]
      let targetIndex: any
      let isChange: any = true
      let selectSlot: any
      newInventory.forEach((item, index) => {
        if (item.slot === oldSlot) {
          targetIndex = index
          selectSlot = item
        }
        if (item.slot === parseInt(newSlot)) {
          isChange = false
        }
      })
      if (isChange) {
        newInventory[targetIndex] = {
          ...newInventory[targetIndex],
          slot: parseInt(newSlot),
        }
      }
      onMouseDown(selectSlot, newSlot)
      console.log("Inventory", analyzeInventoryItems(newInventory))
      console.log("Trade", analyzeTradeItems(newInventory))
      return [...newInventory]
    })
  }

  const getRemoteSlots = (currentPage) => {
    const res: any = []
    for (let i = 0; i < inventoryLimit; i++) res.push(i)
    return res
  }

  const getLocalSlots = (currentPage) => {
    const res: any = []
    for (let i = inventoryLimit; i < inventoryLimit * 2; i++) res.push(i)
    return res
  }

  const getCurrentSlots = (currentPage) => {
    const res: any = []
    const startIndex = (currentPage + 1) * inventoryLimit
    const endIndex = startIndex + inventoryLimit
    for (let i = startIndex; i < endIndex; i++) res.push(i)
    return res
  }

  useEffect(() => {
    const selectItme = items.find((item) => item.slot === draggingSlotId)
    if (selectItme) onMouseUp(selectItme, draggingSlotId)
  }, [draggingSlotId, items])

  useEffect(() => {
    console.log(state)
  }, [state.currentPage])

  return (
    <>
      <div className="inventory-panel">
        {items.length !== 0 ? (
          <>
            <DragAndDropAPI
              activeDraggedSlot={draggingSlotId}
              setActiveDraggedSlot={setDraggingSlot}
              changeItems={moveItemToSlot}
            />
            <InventoryComponent
              title="Remote Trade"
              getCurrentSlots={getRemoteSlots}
              getItemDataInSlot={getItemDataInSlot}
              tradeItems={tradeImages}
              trade={true}
              offerAccept={true}
            />
            <InventoryComponent
              title="Local Trade"
              getCurrentSlots={getLocalSlots}
              getItemDataInSlot={getItemDataInSlot}
              trade={true}
            />
          </>
        ) : (
          <Stack>
            <p className="inventory-text">No Data Found</p>
          </Stack>
        )}
      </div>
      <div className="inventory-panel">
        <InventoryComponent
          title="Inventory"
          totalPage={totalPage}
          getCurrentSlots={getCurrentSlots}
          getItemDataInSlot={getItemDataInSlot}
        />
      </div>
    </>
  )
}

export default InventoryContent
