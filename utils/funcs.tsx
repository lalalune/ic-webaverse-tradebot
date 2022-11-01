import { Item } from './types'

export const orderItems = (items: Array<Item>) => {
  const newItems: Array<Item> = [];
  let indexNum = 18;

  for (var i = 0; i < items.length; i++) {
    newItems[i] = items[i];
    if (!Object.keys(newItems[i]).includes("slot")) {
      while (
        items.findIndex((item) => item.slot !== indexNum)
      ) {
        indexNum++;
      }
      newItems[i].slot = indexNum;
      indexNum++;
    }
  }

  return newItems;
};

export const orderTradeItems = (items: Array<Item>) => {
  let newItems: Array<Item> = [];
  let indexNum = 0;

  for (var i = 0; i < items.length; i++) {
    newItems[i] = items[i];
    newItems[i].slot = indexNum;
    indexNum++;
  }

  return newItems;
};

export const analyzeTradeItems = (items: Array<Item>) => {
  let tradeItems: Array<Item> = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].slot % 18 > 8) tradeItems.push(items[i]);
  }
  return tradeItems;
};

export const analyzeInventoryItems = (items: Array<Item>) => {
  let inventoryItems: Array<Item> = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].slot % 18 < 9) inventoryItems.push(items[i]);
  }
  return inventoryItems;
};

export const getSlotItem = (items: Item[], slot: number) => items.find((item) => item.slot === slot)
