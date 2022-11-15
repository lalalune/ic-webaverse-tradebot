export const getSortedItems = ({ items, slotType, itemNumPerPage }) => {
  if (!items) items = [];
  const sortedItems = [];
  items.forEach((item) => {
    sortedItems[item.slot] = item;
  });
  const length = sortedItems.length
    ? Math.ceil(sortedItems.length / itemNumPerPage) * itemNumPerPage
    : itemNumPerPage;
  for (let i = 0; i < length; i++) {
    if (!sortedItems[i]) sortedItems[i] = { slot: i, slotType };
  }
  return sortedItems;
};

export const getLength = (a, b) => {
  const length = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  return length;
};

export const getPosInInventory = (info) => {
  // const item = info.itemEl.getBoundingClientRect();
  const inventory = info.inventoryEl.getBoundingClientRect();
  const tl = info.inventoryTLEl.getBoundingClientRect();
  const tr = info.inventoryTREl.getBoundingClientRect();
  const br = info.inventoryBREl.getBoundingClientRect();
  const bl = info.inventoryBLEl.getBoundingClientRect();

  const topLength = getLength(tl, tr);
  const bottomLength = getLength(bl, br);
  const leftLength = getLength(tl, bl);
  const rightLength = getLength(tr, br);

  const addHeight = (info.x - inventory.x) / inventory.width;
  const diffAddHeight = tl.y < tr.y ? addHeight : 1 - addHeight;
  const diffLeftX = Math.abs(((bl.x - tl.x) * (bl.y - info.y)) / (bl.y - tl.y));
  const diffTopY =
    tl.y < tr.y
      ? Math.abs(((tr.y - tl.y) * (info.x - tl.x)) / (tr.x - tl.x))
      : Math.abs((tr.y - tl.y) * (1 - (info.x - tl.x) / (tr.x - tl.x)));

  const width =
    Math.min(topLength, bottomLength) +
    (Math.abs(topLength - bottomLength) * (info.y - inventory.y)) /
      inventory.height;
  const height =
    Math.min(leftLength, rightLength) +
    Math.abs(leftLength - rightLength) * diffAddHeight;

  // const x = (info.x - tl.x - diffLeftX - item.width / 2) * (600 / width);
  // const y =
  //   (info.y - Math.min(tl.y, tr.y) - diffTopY - item.height / 2) *
  //   (400 / height);

  const x = (info.x - tl.x - diffLeftX + 5) * (600 / width);
  const y = (info.y - Math.min(tl.y, tr.y) - diffTopY / 2 + 5) * (400 / height);

  return { x, y };
};
