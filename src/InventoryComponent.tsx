import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import React, { useState, useEffect } from "react"
import { IconButton, Stack, Button } from "@mui/material"

import ItemSlot from "./Slot"
import RemoteSlot from "./RemoteSlot"

const InventoryComponent = (props: any) => {
  const [state, setState] = useState({
    currentPage: 1,
    acceptoffer: false,
  })

  const goToNextPage = () => {
    setState((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }))
  }
  const goToPrevPage = () => {
    setState((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage > 1 ? prevState.currentPage - 1 : 1,
    }))
  }

  const acceptEvent = () => {
    console.log("accept")
    setState((prevState) => ({
      ...prevState,
      acceptoffer: !state.acceptoffer,
    }))
  }

  const cancelEvent = () => {
    console.log("cancel")
  }

  return (
    <>
      <div className="inventory-txt">{props.title}</div>
      <div className="inventory-items">
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap={"wrap"}
          sx={{ position: "relative" }}
          className={`inventory`}
        >
          {props.getCurrentSlots(state.currentPage).map((slot) => {
            return (
              <ItemSlot
                slot={slot}
                value={props.getItemDataInSlot(slot) || null}
                key={slot}
                trade={props.trade}
              />
            )
          })}
        </Stack>

        {props.trade ? (
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {props.tradeItems ? (
              props.offerAccept && (
                <div className="inventory-trade-result-text"> Accepted</div>
              )
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={acceptEvent}
                >
                  {state.acceptoffer ? "Accepted" : "Accept"}
                </Button>
                <Button variant="contained" color="error" onClick={cancelEvent}>
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
              className={`${"inventory-paginationBtn"} ${
                state.currentPage <= 1 ? "inventory-disable" : ""
              }`}
              onClick={() => goToPrevPage()}
              disabled={state.currentPage < 1 ? true : false}
            >
              <IoIosArrowBack />
            </IconButton>
            <p className="inventory-text">
              Page {`${state.currentPage} - ${props.totalPage}`}
            </p>

            <IconButton
              sx={{ svg: { color: "white" } }}
              className={`${"inventory-paginationBtn"} ${
                state.currentPage >= props.totalPage ? "inventory-disable" : ""
              }`}
              onClick={() => goToNextPage()}
              disabled={state.currentPage >= props.totalPage ? true : false}
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
