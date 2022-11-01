import React from "react";
import { Stack } from "@mui/material";

const ItemSlot = ({ item, isTrade }) => {
  return item ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={`${"class-inventory-item"} ${isTrade ? "class-inventory-trade-item" : "class-inventory-user-item"
        }`}
    >
      <div
        id={`class-item-slot-${item.slot}`}
        className="class-inventory-item-content"
        data-slot={item.slot}
        data-type={`item`}
      >
        <div className="class-inventory-item-content-inside">
          <img className="class-inventory-item-preview" src={item.image} />
          <div>
            <span className="class-inventory-item-name">{item.name}</span>
          </div>
        </div>
      </div>
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={`${"class-inventory-item-empty"} ${isTrade ? "class-inventory-trade-item-empty" : "class-inventory-user-item-empty"
        }`}
    >
      <div
        className="class-item-slot-empty"
        style={{ width: "100%", height: "100%" }}
        data-slot={item.slot}
        data-type={`empty-slot`}
      ></div>
    </Stack>
  );
};

export default ItemSlot
