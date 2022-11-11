import create from "zustand";
import { tradeBoxNum, inventoryBoxNum, pageBoxNum } from "./constants";
import { clone } from "./funcs";

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
  isCreator: false,
  updateIsCreator: (newVal) => set((state) => ({ isCreator: newVal })),

  tradeData: null,
  updateTradeData: (newVal) => set((state) => ({ tradeData: newVal })),

  existTrade: false,
  updateExistTrade: (newVal) => set((state) => ({ existTrade: newVal })),

  remoteBoxes: clone(initRemoteBoxes),
  updateRemoteBoxes: (newVal) => set((state) => ({ remoteBoxes: newVal })),

  localBoxes: clone(initLocalBoxes),
  updateLocalBoxes: (newVal) => set((state) => ({ localBoxes: newVal })),

  inventoryBoxes: initInventoryBoxes,
  updateInventoryBoxes: (newVal) =>
    set((state) => ({ inventoryBoxes: newVal })),

  partner: null,
  updatePartner: (newVal) => set((state) => ({ partner: newVal })),

  plugActor: null,
  updatePlugActor: (newVal) => set((state) => ({ plugActor: newVal })),

  accepted: false,
  updateAccepted: (newVal) => set((state) => ({ accepted: newVal })),

  boxNumPerPage: pageBoxNum,
  updateBoxNumPerPage: (newVal) => set((state) => ({ boxNumPerPage: newVal })),

  curPage: 1,
  updateCurPage: (newVal) => set((state) => ({ curPage: newVal })),

  selItem: null,
  updateSelItem: (newVal) => set((state) => ({ selItem: newVal })),

  loading: false,
  updateLoading: (newVal) => set((state) => ({ loading: newVal })),
}));
