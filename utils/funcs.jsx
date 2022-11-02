export const orderItems = items => {
  const newItems = [];
  let indexNum = 18;

  for (let i = 0; i < items.length; i++) {
    newItems[i] = items[i];
    if (!Object.keys(newItems[i]).includes('slot')) {
      while (items.findIndex(item => item.slot !== indexNum)) {
        indexNum++;
      }
      newItems[i].slot = indexNum;
      indexNum++;
    }
  }

  return newItems;
};

export const orderTradeItems = items => {
  const newItems = [];
  let indexNum = 0;

  for (let i = 0; i < items.length; i++) {
    newItems[i] = items[i];
    newItems[i].slot = indexNum;
    indexNum++;
  }

  return newItems;
};

export const analyzeTradeItems = items => {
  const tradeItems = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].slot % 18 > 8) tradeItems.push(items[i]);
  }
  return tradeItems;
};

export const analyzeInventoryItems = items => {
  const inventoryItems = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].slot % 18 < 9) inventoryItems.push(items[i]);
  }
  return inventoryItems;
};

export const getSlotItem = (items, slot) =>
  items.find(item => item.slot === slot);
