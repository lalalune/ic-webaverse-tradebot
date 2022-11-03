import create from 'zustand';

export const useStore = create(set => ({
  items: [
    {name: '0', image: 'images/item.jpg', slotType: 'inventory', slot: 0},
    {name: '1', image: 'images/item.jpg', slotType: 'inventory', slot: 2},
    {name: '2', image: 'images/item.jpg', slotType: 'inventory', slot: 4},
    {name: '3', image: 'images/item.jpg', slotType: 'inventory', slot: 6},
    {name: '4', image: 'images/item.jpg', slotType: 'inventory', slot: 7},
    {name: '5', image: 'images/item.jpg', slotType: 'inventory', slot: 8},
    {
      name: '6',
      image: 'images/item.jpg',
      slotType: 'local',
      slot: 0,
    },
    {
      name: '7',
      image: 'images/item.jpg',
      slotType: 'local',
      slot: 2,
    },
  ],
  updateItems: newItems => set(state => ({items: newItems})),

  itemNumPerPage: 9,
  updateItemNumPerPage: newItemNumPerPage =>
    set(state => ({itemNumPerPage: newItemNumPerPage})),

  selItem: null,
  updateSelItem: newSelItem => set(state => ({selItem: newSelItem})),

  selItemEl: null,
  updateSelItemEl: newSelItemEl => set(state => ({selItemEl: newSelItemEl})),

  selCloneItemEl: null,
  updateSelCloneItemEl: newSelCloneItemEl =>
    set(state => ({selCloneItemEl: newSelCloneItemEl})),

  curInventoryPage: 1,
  updateCurInventoryPage: newCurPage =>
    set(state => ({curInventoryPage: newCurPage})),

  inventoryEl: null,
  updateInventoryEl: newInventoryEl =>
    set(state => ({inventoryEl: newInventoryEl})),

  inventoryTLEl: null,
  updateInventoryTLEl: newInventoryTLEl =>
    set(state => ({inventoryTLEl: newInventoryTLEl})),

  inventoryTREl: null,
  updateInventoryTREl: newInventoryTREl =>
    set(state => ({inventoryTREl: newInventoryTREl})),

  inventoryBREl: null,
  updateInventoryBREl: newInventoryBREl =>
    set(state => ({inventoryBREl: newInventoryBREl})),

  inventoryBLEl: null,
  updateInventoryBLEl: newInventoryBLEl =>
    set(state => ({inventoryBLEl: newInventoryBLEl})),
}));
