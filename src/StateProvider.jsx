import React, { createContext, useState } from "react";
import { tradeBoxNum, inventoryBoxNum, pageBoxNum } from "./utils/constants";

const initRemoteBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
  return {
    id: i,
    item: null,
  };
});

const initLocalBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
  return {
    id: i,
    item: null,
  };
});

const initInventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
    return { id: i, type: "all", item: null };
  });

export const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [plugActor, setPlugActor] = useState(null);
    const [isCreator, setIsCreator] = useState(false);
    const [localUser, setLocalUser] = useState(null);
    const [curTradeId, setCurTradeId] = useState(null);
    const [tradeData, setTradeData] = useState(null);
    const [tradeStarted, setTradeStarted] = useState(false);
    const [remoteBoxes, setRemoteBoxes] = useState(initRemoteBoxes);
    const [localBoxes, setLocalBoxes] = useState(initLocalBoxes);
    const [inventoryBoxes, setInventoryBoxes] = useState(initInventoryBoxes);
    const [accepted, setAccepted] = useState(false);
    const [curPage, setCurPage] = useState(1);
    const [selItem, setSelItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const store = {
        plugActor,
        setPlugActor,
        isCreator,
        setIsCreator,
        localUser,
        setLocalUser,
        curTradeId,
        setCurTradeId,
        tradeData,
        setTradeData,
        tradeStarted,
        setTradeStarted,
        remoteBoxes,
        setRemoteBoxes,
        localBoxes,
        setLocalBoxes,
        inventoryBoxes,
        setInventoryBoxes,
        accepted,
        setAccepted,
        curPage,
        setCurPage,
        selItem,
        setSelItem,
        loading,
        setLoading,
    }
    return (
        <StateContext.Provider value={store}>
            {children}
        </StateContext.Provider>
    )
};
