import React, { useState } from "react";
import { Stack } from "@mui/material";

const RemoteSlotComponent = (props: any) => {
  const ItemSlot = ({ value }: any) => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        className="inventory-item inventory-trade-item"
      >
        <div className="inventory-itemContent">
          <div className="inventory-itemInsideContent">
            <img className="inventory-itemPreview" src={value.image} />
            <div>
              <span className="inventory-item-name">{value.name}</span>
            </div>
          </div>
        </div>
      </Stack>
    );
  };

  const EmptySlot = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        className="inventory-itemEmpty inventory-trade-itemEmpty"
      >
        <div
          className="item-slot empty"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </Stack>
    );
  };

  return props.value !== null ? (
    <ItemSlot {...props} />
  ) : (
    <EmptySlot {...props} />
  );
};

export default RemoteSlotComponent;
