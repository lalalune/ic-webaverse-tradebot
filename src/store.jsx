import create from "zustand";
import { boxNum, inventoryBoxNum, pageBoxNum } from "./constants";
import {
  middleTradeData,
  middleInventoryItems,
  middleExistTrade,
} from "./icMiddle";

const initBoxes = [...Array(boxNum).keys()].map((i) => {
  return {
    id: i,
    item: null,
  };
});

const initInventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
  return { id: i, type: "all", item: middleInventoryItems[i] ?? null };
});

export const useStore = create((set) => ({
  tradeData: middleTradeData,
  updateTrades: (newVal) => set((state) => ({ tradeData: newVal })),

  remoteBoxes: initBoxes,
  updateRemoteBoxes: (newVal) => set((state) => ({ remoteBoxes: newVal })),

  localBoxes: initBoxes,
  updateLocalBoxes: (newVal) => set((state) => ({ localBoxes: newVal })),

  inventoryBoxes: initInventoryBoxes,
  updateInventoryBoxes: (newVal) =>
    set((state) => ({ inventoryBoxes: newVal })),

  partner: null,
  updatePartner: (newVal) => set((state) => ({ partner: newVal })),

  plugActor: null,
  updatePlugActor: (newVal) => set((state) => ({ plugActor: newVal })),

  existTrade: middleExistTrade,
  updateExistTrade: (newVal) => set((state) => ({ existTrade: newVal })),

  accepted: false,
  updateAccepted: (newVal) => set((state) => ({ accepted: newVal })),

  boxNumPerPage: pageBoxNum,
  updateBoxNumPerPage: (newVal) => set((state) => ({ boxNumPerPage: newVal })),

  curPage: 1,
  updateCurPage: (newVal) => set((state) => ({ curPage: newVal })),

  selItem: null,
  updateSelItem: (newVal) => set((state) => ({ selItem: newVal })),

  loading: true,
  updateLoading: (newVal) => set((state) => ({ loading: newVal })),
}));
