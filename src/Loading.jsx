import React from "react";
import { Stack } from "@mui/material";

import { useStore } from "./store";

export const Loading = () => {
  const { loading } = useStore();

  return (
    <Stack
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        display: loading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0.3",
        backgroundColor: "white",
      }}
    >
      <Stack
        style={{
          border: "16px solid #f3f3f3",
          borderTop: "16px solid #3498db",
          borderRadius: "50%",
          width: "130px",
          height: "130px",
          animation: "spin 2s linear infinite",
        }}
      ></Stack>
    </Stack>
  );
};
