import create from 'zustand';

export const useStore = create(set => ({
  items: [
    {name: '0', image: 'images/item.jpg', slotType: 'inventory', slot: 0},
    {name: '1', image: 'images/item.jpg', slotType: 'inventory', slot: 3},
    {name: '2', image: 'images/item.jpg', slotType: 'inventory', slot: 5},
    {name: '3', image: 'images/item.jpg', slotType: 'inventory', slot: 7},
    {name: '4', image: 'images/item.jpg', slotType: 'inventory', slot: 8},
    {name: '5', image: 'images/item.jpg', slotType: 'inventory', slot: 9},
    {
      name: '6',
      image: 'images/item.jpg',
      slotType: 'local',
      slot: 0,
      isTrade: true,
    },
    {
      name: '7',
      image: 'images/item.jpg',
      slotType: 'local',
      slot: 2,
      isTrade: true,
    },
  ],
  updateItems: newItems => set(state => ({items: newItems})),

  itemNumPerPage: 9,
  updateItemNumPerPage: newItemNumPerPage =>
    set(state => ({itemNumPerPage: newItemNumPerPage})),

  selItemEl: null,
  updateSelItemEl: newSelItemEl => set(state => ({selItemEl: newSelItemEl})),

  curInventoryPage: 1,
  updateCurInventoryPage: newCurPage =>
    set(state => ({curInventoryPage: newCurPage})),
}));
