import React from "react";
import { Stack } from "@mui/material";

const RemoteSlot = (props: any) => {
  return props.item ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class-inventory-item class-inventory-trade-item"
    >
      <div className="class-inventory-item-content">
        <div className="class-inventory-item-content-inside">
          <img className="class-inventory-item-preview" src={props.item.image} />
          <div>
            <span className="class-inventory-item-name">{props.item.name}</span>
          </div>
        </div>
      </div>
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class-inventory-item-empty class-inventory-trade-item-empty"
    >
      <div
        className="class-item-slot empty"
        style={{ width: "100%", height: "100%" }}
      ></div>
    </Stack>
  );
};

export default RemoteSlot
