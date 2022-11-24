import create from "zustand";
import { tradeBoxNum, inventoryBoxNum, pageBoxNum } from "./utils/constants";
import { clone } from "./utils/funcs";

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

export const useStore = create((set) => ({
  plugActor: null,
  setPlugActor: (newVal) => set((state) => ({ plugActor: newVal })),

  isCreator: false,
  setIsCreator: (newVal) => set((state) => ({ isCreator: newVal })),

  localUserId: null,
  setLocalUserId: (newVal) => set((state) => ({ localUserId: newVal })),

  curTradeId: null,
  setCurTradeId: (newVal) => set((state) => ({ curTradeId: newVal })),

  tradeData: null,
  setTradeData: (newVal) => set((state) => ({ tradeData: newVal })),

  tradeStarted: false,
  setTradeStarted: (newVal) => set((state) => ({ tradeStarted: newVal })),

  remoteBoxes: clone(initRemoteBoxes),
  setRemoteBoxes: (newVal) => set((state) => ({ remoteBoxes: newVal })),

  localBoxes: clone(initLocalBoxes),
  setLocalBoxes: (newVal) => set((state) => ({ localBoxes: newVal })),

  inventoryBoxes: initInventoryBoxes,
  setInventoryBoxes: (newVal) =>
    set((state) => ({ inventoryBoxes: newVal })),

  accepted: false,
  setAccepted: (newVal) => set((state) => ({ accepted: newVal })),

  boxNumPerPage: pageBoxNum,
  setBoxNumPerPage: (newVal) => set((state) => ({ boxNumPerPage: newVal })),

  curPage: 1,
  setCurPage: (newVal) => set((state) => ({ curPage: newVal })),

  selItem: null,
  setSelItem: (newVal) => set((state) => ({ selItem: newVal })),

  loading: false,
  setLoading: (newVal) => set((state) => ({ loading: newVal })),
  authenticated: false,
  setAuthenticated: (newVal) => set((state) => ({ authenticated: newVal })),

  principal: null,
  setPrincipal: (newVal) => set((state) => ({ principal: newVal }))
}));