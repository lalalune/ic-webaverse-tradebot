import React from "react";
import { Stack } from "@mui/material";
import { useStore } from "./store";

export const ItemDetails = () => {
  const { selItem } = useStore();
  console.log("selItem: ", selItem);

  return selItem ? (
    <Stack
      position={"absolute"}
      width={"24vw"}
      direction={"column"}
      gap={".25em"}
      right={"3vw"}
      bottom={"3vw"}
    >
      <Stack color={"red"} fontWeight={"bold"}>
        <Stack>{selItem.collection}</Stack>
        <Stack>{"#7849"}</Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={"24vw"}
        alignItems={"center"}
        backgroundColor={"black"}
        justifyContent={"center"}
      >
        <img src={selItem.url} style={{ width: "60%", height: "60%" }}></img>
      </Stack>
    </Stack>
  ) : (
    <></>
  );
};
