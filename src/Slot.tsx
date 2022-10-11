import React, { useState } from "react"
import { Stack } from "@mui/material"

const MainComponent = (props: any) => {
  const ItemSlot = ({ value, slot }: any) => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        className={`${"inventory-item"} ${props.trade ? "inventory-trade-item" : "inventory-user-item"}`}
      >
        <div
          id={`item-slot-${slot}`}
          className="inventory-itemContent"
          data-slot={props.slot}
          data-type={`item`}
        >
          <div className="inventory-itemInsideContent">
            <img className="inventory-itemPreview" src={value.image} />
            <div>
              <span className="inventory-item-name">{value.name}</span>
            </div>
          </div>
        </div>
      </Stack>
    )
  }

  const EmptySlot = ({ slot }: any) => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        className={`${"inventory-itemEmpty"} ${props.trade ? "inventory-trade-itemEmpty" : "inventory-user-itemEmpty"}`}
      >
        <div
          className="item-slot empty"
          style={{ width: "100%", height: "100%" }}
          data-slot={slot}
          data-type={`empty-slot`}
        ></div>
      </Stack>
    )
  }

  return props.value !== null ? (
    <ItemSlot {...props} />
  ) : (
    <EmptySlot {...props} />
  )
}

export default MainComponent
