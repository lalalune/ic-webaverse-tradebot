import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import React, { useState, useEffect } from "react"
import { IconButton, Stack, Button } from "@mui/material"

import ItemSlot from "./ItemSlot"
import RemoteSlot from "./RemoteSlot"
import { getSlotItem } from './utils/funcs'
import { useStore } from './utils/store'

export const InventoryComponent = (props: any) => {
  const {
    itemNumPerPage, updateItemNumPerPage,
    nfts, updateNfts, tradeItems,
    updateTradeItems, items, updateItems,
    selSlot, updateSelSlot,
    curPage, updateCurPage,
  } = useStore()

  const onNextPage = () => {
    updateCurPage(curPage + 1)
  }

  const onPrevPage = () => {
    updateCurPage(curPage > 1 ? curPage - 1 : 1)
  }

  const onAccept = () => {
    console.log('onAccept: ')
  }

  const onCancel = () => {
    console.log('onCancel: ')
  }

  return (
    <>
      <div className="class-inventory-panel-title">{props.title}</div>
      <div className="class-inventory-panel-items">
        {/* <Stack
          direction="row"
          justifyContent="center"
          flexWrap={"wrap"}
          sx={{ position: "relative" }}
        >
          {React.Children.toArray(
            props.getSlots().map((slot: number) =>
              <ItemSlot
                item={getSlotItem(items, slot)}
                isTrade={props.isTrade}
              />
            )
          )}
        </Stack> */}

        {props.isTrade ? (
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {props.tradeItems ? (
              props.isAcceptedOffer && (
                <div className="class-inventory-panel-trade-result-text">Accepted</div>
              )
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={onAccept} >
                  onAccept
                </Button>
                <Button variant="contained" color="error" onClick={onCancel}>
                  Cancel
                </Button>
              </>
            )}
          </Stack>
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              sx={{ svg: { color: "white" } }}
              className={`${"class-inventory-pagination-btn"} ${curPage <= 1 ? "class-inventory-disable" : ""}`}
              onClick={() => onPrevPage()}
              disabled={curPage < 1 ? true : false}
            >
              <IoIosArrowBack />
            </IconButton>
            <p className="class-inventory-text">
              Page {`${curPage} - ${props.totalPage}`}
            </p>

            <IconButton
              sx={{ svg: { color: "white" } }}
              className={`${"class-inventory-pagination-btn"} ${curPage >= props.totalPage ? "class-inventory-disable" : ""}`}
              onClick={() => onNextPage()}
              disabled={curPage >= props.totalPage ? true : false}
            >
              <IoIosArrowForward />
            </IconButton>
          </Stack>
        )}
      </div>
    </>
  )
}

export default InventoryComponent
