export const inventoryLimit = 9
export const orderItems = (items) => {
  let newItems = []
  let indexNum = 18
  for (var i = 0; i < items.length; i++) {
    newItems[i] = items[i]
    if (!Object.keys(newItems[i]).includes("slot")) {
      while (
        items.findIndex((item: { slot: number }) => item.slot !== indexNum)
      ) {
        indexNum++
      }
      newItems[i].slot = indexNum
      indexNum++
    }
  }
  return newItems
}
export const orderTradeItems = (items) => {
  let newItems = []
  let indexNum = 0
  for (var i = 0; i < items.length; i++) {
    newItems[i] = items[i]
    newItems[i].slot = indexNum
    indexNum++
  }
  return newItems
}
export const analyzeTradeItems = (items) => {
  let tradeItems = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].slot % 18 > 8) tradeItems.push(items[i])
  }
  return tradeItems
}
export const analyzeInventoryItems = (items) => {
  let inventoryItems = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].slot % 18 < 9) inventoryItems.push(items[i])
  }
  return inventoryItems
}
